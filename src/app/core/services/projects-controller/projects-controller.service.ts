import { Injectable } from '@angular/core';
import { Project } from '@shared/models/project.model';
import {
  uploadString,
  getDownloadURL,
  Storage,
  ref,
  deleteObject,
} from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import {
  collection,
  addDoc,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  DocumentData,
  WithFieldValue,
  Firestore,
  updateDoc,
  doc,
  Timestamp,
  query,
  onSnapshot,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsControllerService {
  private readonly COLLECTION_NAME = 'projects';
  private converter: FirestoreDataConverter<Project> = {
    toFirestore(project: WithFieldValue<Project>): DocumentData {
      return project as DocumentData;
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): Project {
      const data = snapshot.data(options)!;
      console.log('from firestore trigger');
      return {
        ...data,
        id: snapshot.id,
      } as Project;
    },
  };
  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.converter
  );

  constructor(private storage: Storage, private firestore: Firestore) {}

  async addProject(project: Project) {
    await this.replaceDataUrls(project);
    const data: any = {
      ...project,
      createdAt: Timestamp.now(),
      modifiedAt: Timestamp.now(),
    };
    delete data.id;
    return addDoc(this.col, data);
  }

  private async replaceDataUrls(project: Project) {
    if (this.isDataUrl(project.thumbnailImageUrl)) {
      project.thumbnailImageUrl = await this.uploadDataUrl(
        project.thumbnailImageUrl
      );
    }
    await Promise.all(
      project.slideshowImageUrls.map(async (slideShowImageUrl, index) => {
        if (this.isDataUrl(slideShowImageUrl)) {
          project.slideshowImageUrls[index] = await this.uploadDataUrl(
            slideShowImageUrl
          );
        }
      })
    );
  }

  private isDataUrl(value: string) {
    return new RegExp(/data:/).test(value);
  }

  private async uploadDataUrl(dataUrl: string) {
    const fileRef = ref(this.storage, `images/${uuidv4()}`);
    await uploadString(fileRef, dataUrl, 'data_url');
    return await getDownloadURL(fileRef);
  }

  fetchAll(): Observable<Project[]> {
    return new Observable((subscriber) => {
      onSnapshot(
        query(this.col),
        (querySnapshot) =>
          subscriber.next(querySnapshot.docs.map((doc) => doc.data())),
        subscriber.error,
        subscriber.complete
      );
    });
  }

  async updateProject(project: Project) {
    const docRef = doc(this.firestore, `${this.COLLECTION_NAME}/${project.id}`);
    const data: any = {
      ...project,
      modifiedAt: Timestamp.now(),
    };
    delete data.id;
    await updateDoc(docRef, data);
  }

  async deleteProject(project: Project) {
    await this.deleteImages(project);
    console.log('deleted images');
    await this.deleteDoc(project);
    console.log('deleted doc');
  }

  private async deleteImages(project: Project) {
    const deletionPromises: Promise<void>[] = [];
    deletionPromises.push(this.deleteImage(project.thumbnailImageUrl));
    project.slideshowImageUrls.forEach((slideshowImageUrl) => {
      deletionPromises.push(this.deleteImage(slideshowImageUrl));
    });
    await Promise.all(deletionPromises);
  }

  private async deleteImage(path: string) {
    const fileRef = ref(this.storage, path);
    await deleteObject(fileRef);
  }

  private async deleteDoc(project: Project) {
    const docRef = doc(this.firestore, `${this.COLLECTION_NAME}/${project.id}`);
    await deleteDoc(docRef);
  }
}

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
  deleteDoc,
  orderBy,
  collectionData,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

type SortBy = 'createdAt';
type SortDirection = 'asc' | 'desc';

// These should match the allowed mimetypes set in the file input
const fileExtension: { [key: string]: string } = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
};

@Injectable({
  providedIn: 'root',
})
export class ProjectsControllerService {
  private readonly COLLECTION_NAME = 'projects';
  private converter: FirestoreDataConverter<Project> = {
    toFirestore(project: WithFieldValue<Project>): DocumentData {
      const data = project as DocumentData;
      // When a document is replaced the id property has to be deleted
      if ('id' in data) delete data['id'];
      return data;
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): Project {
      const data = snapshot.data(options)!;
      data['id'] = snapshot.id;
      return data as Project;
    },
  };
  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.converter
  );

  constructor(private storage: Storage, private firestore: Firestore) {}

  async addProject(project: Project) {
    await this.replaceDataUrls(project);
    // Overwrite Timestamps to current time
    project.createdAt = Timestamp.now();
    project.modifiedAt = Timestamp.now();
    return addDoc(this.col, project);
  }

  private async replaceDataUrls(project: Project) {
    const replaceDataUrlPromises: Promise<string>[] = [];
    replaceDataUrlPromises.push(this.replaceDataUrl(project.thumbnailImageUrl));
    project.slideshowImageUrls.forEach((slideshowImageUrl) => {
      replaceDataUrlPromises.push(this.replaceDataUrl(slideshowImageUrl));
    });
    const urls = await Promise.all(replaceDataUrlPromises);
    project.thumbnailImageUrl = urls[0];
    project.slideshowImageUrls = urls.slice(1);
  }

  private async replaceDataUrl(slideshowImageUrl: string) {
    const url = this.isDataUrl(slideshowImageUrl)
      ? await this.uploadDataUrl(slideshowImageUrl)
      : slideshowImageUrl;
    return url;
  }

  private isDataUrl(value: string) {
    return new RegExp(/^data:/).test(value);
  }

  private async uploadDataUrl(dataUrl: string) {
    const mimeType = dataUrl.substring(5).split(';')[0];
    const extension = fileExtension[mimeType];
    const fileRef = ref(this.storage, `images/${uuidv4()}.${extension}`);
    await uploadString(fileRef, dataUrl, 'data_url');
    return await getDownloadURL(fileRef);
  }

  fetchAllProjects(
    sortBy: SortBy = 'createdAt',
    sortDirection: SortDirection = 'asc'
  ): Observable<Project[]> {
    const q = query(this.col, orderBy(sortBy, sortDirection));
    return collectionData(q);
  }

  fetchOneProject(id: string): Observable<Project | undefined> {
    const docRef = doc(this.col, id);
    return docData(docRef);
  }

  async updateProject(project: Project) {
    await this.replaceDataUrls(project);
    project.modifiedAt = Timestamp.now();
    const docRef = doc(this.col, project.id);
    const data = project as DocumentData;
    // When a document is updated the id property has to be deleted explicitly. toFirestore is not
    // triggered on an update
    delete data['id'];
    await updateDoc(docRef, data);
  }

  async deleteProject(project: Project) {
    await this.deleteImages(project);
    await this.deleteDoc(project);
  }

  private async deleteImages(project: Project) {
    const deletionPromises: Promise<void>[] = [];
    if (project.thumbnailImageUrl)
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
    const docRef = doc(this.col, project.id);
    await deleteDoc(docRef);
  }
}

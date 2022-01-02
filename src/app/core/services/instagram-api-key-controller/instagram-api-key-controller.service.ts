import { Injectable } from '@angular/core';
import {
  collection,
  DocumentData,
  Firestore,
  FirestoreDataConverter,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
  doc,
  setDoc,
  collectionData,
} from '@angular/fire/firestore';
import { InstagramApiKey } from '@shared/models/instagram-api-key.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramApiKeyControllerService {
  private readonly COLLECTION_NAME = 'instagram-api-keys';
  private converter: FirestoreDataConverter<InstagramApiKey> = {
    toFirestore(
      instagramApiKey: WithFieldValue<InstagramApiKey>
    ): DocumentData {
      const data = instagramApiKey as DocumentData;
      // When a document is replaced the id property has to be deleted
      if ('id' in data) delete data['id'];
      return data;
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): InstagramApiKey {
      const data = snapshot.data(options)!;
      data['id'] = snapshot.id;
      return data as InstagramApiKey;
    },
  };
  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.converter
  );

  constructor(private firestore: Firestore) {}

  replaceInstagramApiKey(instagramApiKey: InstagramApiKey) {
    const docRef = doc(this.col, instagramApiKey.id);
    return setDoc(docRef, instagramApiKey);
  }

  fetchAllInstagramApiKeys(): Observable<InstagramApiKey[]> {
    return collectionData(this.col);
  }
}

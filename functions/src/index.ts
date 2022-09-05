import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

import { app } from './http';
import { scaleImage } from './storage/scale-image';

export const api = functions.region('europe-west3').https.onRequest(app);

export const scale = functions
  .region('europe-west3')
  .storage.object()
  .onFinalize(scaleImage);

import * as functions from 'firebase-functions';

import { app } from './http';

export const api = functions.region('europe-west3').https.onRequest(app);

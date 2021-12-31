import * as express from 'express';
import * as functions from 'firebase-functions';

import { router as mailRouter } from './mails/routes';

export const app = express();

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', functions.config().frontend.url);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/mails', mailRouter);

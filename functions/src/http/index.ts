import * as express from 'express';
import * as functions from 'firebase-functions';
import { EnvironmentVariables } from '../models/environment-variables';
import { router as mailRouter } from './mails/routes';

export const app = express();

const allowedOrigins = (functions.config() as EnvironmentVariables).frontend.url
  .split(',')
  .map((url) => url.trim());

app.use((req, res, next) => {
  if (allowedOrigins.length === 0) {
    res.status(500).send('Missing allowed origins');
    return;
  }
  const origin = req.get('origin');
  if (!origin) {
    res.status(400).send('Missing origin request header field');
    return;
  }
  const isOriginAllowed = allowedOrigins.includes(origin);

  res.setHeader(
    'Access-Control-Allow-Origin',
    isOriginAllowed ? origin : allowedOrigins[0]
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/mails', mailRouter);

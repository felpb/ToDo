// src/app.ts
import express, { Express } from 'express';
import index from './routes';

const app: Express = express();
app.use('/', index);

export default app;
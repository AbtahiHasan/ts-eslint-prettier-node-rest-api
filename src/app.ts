/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';

export const app: Application = express();

app.use(cors());
app.use(express.json());

// all routes here
app.use('/api/v1', router);

app.use(globalErrorHandler);

app.use(notFound);

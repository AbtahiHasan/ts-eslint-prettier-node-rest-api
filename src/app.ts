/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import studentRouter from './app/modules/student/student.routes';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';

export const app: Application = express();

app.use(cors());
app.use(express.json());

// all routes here
app.use('/api/v1/students', studentRouter);

app.use(globalErrorHandler);

app.use(notFound);

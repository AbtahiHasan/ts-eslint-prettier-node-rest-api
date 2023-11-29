import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import studentRouter from './app/modules/student.routes';

export const app: Application = express();

app.use(cors());
app.use(express.json());

// all routes here
app.use('/api/v1/students', studentRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  try {
    next(`Route ${req.originalUrl} not found`);
  } catch (error) {
    next(error);
  }
});

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     try {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

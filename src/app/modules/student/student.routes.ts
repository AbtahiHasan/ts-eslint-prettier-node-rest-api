import express from 'express';
import { studentControllers } from './student.controller';

const studentRouter = express.Router();

studentRouter.get('/', studentControllers.getAllStudents);

studentRouter.get('/:studentId', studentControllers.getSingleStudent);

export default studentRouter;

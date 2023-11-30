import express from 'express';
import userController from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import studentValidationSchema from '../student/student.validation';
const userRouter = express.Router();

userRouter.post(
  '/create-student',
  validateRequest(studentValidationSchema.createStudentValidationSchema),
  userController.createStudent,
);

export default userRouter;

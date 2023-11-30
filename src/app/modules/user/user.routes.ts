import express from 'express';
import userController from './user.controller';
const userRouter = express.Router();

userRouter.post('/create-student', userController.createStudent);

export default userRouter;

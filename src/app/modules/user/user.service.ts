import mongoose from 'mongoose';
import config from '../../config';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (!admissionSemester) throw new Error('invalid admission semester');
    userData.id = await generateStudentId(admissionSemester);

    const newUser = await User.create([userData], { session });

    if (newUser.length) {
      payload.id = newUser[0].id;
      payload.user = newUser[0]._id;
      const newStudent = await Student.create([payload], { session });
      return newStudent;
    }
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw new Error('Failed to create student');
  } finally {
    await session.endSession();
  }
};

const userServices = { createStudentIntoDB };
export default userServices;

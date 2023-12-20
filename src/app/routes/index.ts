import express from 'express';
import studentRouter from '../modules/student/student.routes';
import userRouter from '../modules/user/user.routes';
import academicSemesterRouter from '../modules/academicSemester/academicSemester.routes';
import AcademicDepartmentRouter from '../modules/academicDepartment/academicDepartment.routes';
import AcademicFacultyRouter from '../modules/academicFaculty/academicFaculty.routes';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/students',
    route: studentRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouter,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRouter,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

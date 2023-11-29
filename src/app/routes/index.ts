import express from 'express';
import studentRouter from '../modules/student/student.routes';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/students',
    route: studentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

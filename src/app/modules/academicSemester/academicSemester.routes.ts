import express from 'express';
import academicSemesterControllers from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import academicSemesterValidationSchemas from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidationSchemas.createAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);
router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidationSchemas.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);
router.get('/', academicSemesterControllers.getAllAcademicSemesters);
router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemester,
);

const academicSemesterRouter = router;

export default academicSemesterRouter;

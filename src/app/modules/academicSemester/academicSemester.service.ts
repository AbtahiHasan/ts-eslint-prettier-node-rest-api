import { TAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

const getSingleAcademicSemesterIntoDb = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const academicSemesterServices = {
  createAcademicSemesterIntoDb,
  getSingleAcademicSemesterIntoDb,
};
export default academicSemesterServices;

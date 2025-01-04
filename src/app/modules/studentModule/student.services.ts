import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createAStudentToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createAStudentToDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};

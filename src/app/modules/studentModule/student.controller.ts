import { Request, Response } from 'express';
import { StudentServices } from './student.services';
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;
    const result = await StudentServices.createAStudentToDB(StudentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Got all students',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudent,
};

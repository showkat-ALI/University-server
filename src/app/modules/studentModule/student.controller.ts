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
const getSingleStudent = async (req: Request, res: Response) => {
  const { studentID } = req.params;
  try {
    const result = await StudentServices.getSingleStudentFromDB(studentID);
    res.status(200).json({
      success: true,
      message: `Got student with id ${studentID}`,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      messsage: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};

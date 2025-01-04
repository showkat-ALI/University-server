import express from 'express';
import { StudentControllers } from './student.controller';
const router = express.Router();
router.post('/create-a-student', StudentControllers.createStudent);
router.get('/all-students', StudentControllers.getAllStudent);
router.get(
  '/get-single-student/:studentID',
  StudentControllers.getSingleStudent,
);
export const StudentRoutes = router;

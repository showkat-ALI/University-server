import express from 'express';
import { StudentControllers } from './student.controller';
const router = express.Router();
router.post('/create-a-student', StudentControllers.createStudent);
router.get('/all-students', StudentControllers.getAllStudent);
export const StudentRoutes = router;

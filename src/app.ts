import cors from 'cors';
import express, { Application } from 'express';
import { StudentRoutes } from './app/modules/studentModule/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);

export default app;

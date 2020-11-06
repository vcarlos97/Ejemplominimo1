import {Router} from 'express';
import studentController from "../controllers/student.controller";

const router = Router();
router.get('/todo', studentController.getStudents);
router.get('/:id', studentController.getStudent);

export = router;



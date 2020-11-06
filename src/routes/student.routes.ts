import {Router} from 'express';
import studentController from "../controllers/student.controller";

const router = Router();
router.get('/student/', studentController.getStudents);
router.get('/student/:id', studentController.getStudent);

export = router;



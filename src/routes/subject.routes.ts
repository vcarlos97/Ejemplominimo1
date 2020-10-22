import {Router} from 'express';
import subjectController from "../controllers/subject.controller";

const router = Router();
router.get('/todo', subjectController.getSubjects);
export default Router;

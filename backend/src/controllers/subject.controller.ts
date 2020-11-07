import {Request, Response} from 'express';
import Subject from '../models/subject';

const getSubjects = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Subject.find({}).populate('students');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

export default {getSubjects};
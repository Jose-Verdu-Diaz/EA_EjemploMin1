import {Request, Response} from 'express';
import Student from '../models/student';

export const students = async (req: Request, res: Response) => {
    const results = await Student.find({});
    return res.status(200).json(results);
}
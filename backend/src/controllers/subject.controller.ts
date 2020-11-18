import {Request, Response} from 'express';
import Subject from '../models/subject';

export const subjects = async (req: Request, res: Response) => {
    const results = await Subject.find({});
    return res.status(200).json(results);
}

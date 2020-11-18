import { Router } from 'express';
import { students } from '../controllers/student.controller';

const router = Router();

router.get('/', students);

export default router;
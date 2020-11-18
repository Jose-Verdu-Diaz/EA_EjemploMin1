import { Router } from 'express';
import { subjects } from '../controllers/subject.controller';

const router = Router();

router.get('/', subjects);

export default router;
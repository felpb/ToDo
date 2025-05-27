import { Router } from 'express';
import userRoutes from './get';

const router = Router();

router.use('/users', userRoutes);

export default router;
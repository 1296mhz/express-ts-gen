import express from 'express';
import root from './root';
import register from './register';
import login from './login';

const router = express.Router();
router.use('/', root);
router.use('/register', register);
router.use('/login', login);

export default router;
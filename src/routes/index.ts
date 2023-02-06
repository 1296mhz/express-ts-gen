import express from 'express';
// import token from 'policies/token';
import root from './root';
import register from './register';


const router = express.Router();
router.use('/', root);
router.use('/register', register);
// router.use(orders);

export default router;
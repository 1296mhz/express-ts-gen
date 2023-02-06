import express, { Express, Request, Response } from 'express';

const router = express.Router();
router.get('/', (req: Request, res: Response) => {
    res.render('login', { title: 'Login page' });
})

export default router;
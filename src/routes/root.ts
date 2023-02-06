import express, { Express, Request, Response } from 'express';

const router = express.Router();
router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Express + Typescript' });
})

export default router;
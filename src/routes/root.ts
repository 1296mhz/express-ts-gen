import express, { Express, Request, Response } from 'express';

const router = express.Router();
router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Express + Typescript', greeting: 'Express - Fast, flexible, minimalist web framework for Node.js applications. TypeScript can alert you to misspelled functions and properties, detect passing the wrong types of arguments or the wrong number of arguments to functions, and provide smarter autocomplete suggestions.' });
})

export default router;
import express, { Express, Request, Response } from 'express';

const router = express.Router();
router.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Hello!'
    })

})

export default router;
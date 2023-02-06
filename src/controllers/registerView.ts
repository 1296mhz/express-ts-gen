import { Request, Response } from 'express';

const registerView = (req: Request, res: Response) => {
    res.render("register", {
    });
}

export default registerView;
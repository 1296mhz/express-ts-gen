import { Request, Response } from 'express';

const loginView = (req: Request, res: Response) => {
    res.render("login", {
    });
}

export default loginView;
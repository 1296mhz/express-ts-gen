import express, { Request, Response } from 'express';
import Joi from 'joi';
const router = express.Router();
router.get('/', (req: Request, res: Response) => {
    res.render('register', { title: 'Register page' });
});

router.post('/', async (req: Request, res: Response): Promise<Response> => {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        confirmPassword: Joi.ref('password'),
    })
        .with('username', 'password')
        .with('password', 'confirmPassword');

    try {
        const value = await schema.validateAsync({ username: username, password: password, confirmPassword: confirmPassword });
        return res.status(200).send({
            message: value,
        });
    }
    catch (err: any) {
        console.log(err.details[0].message)
        return res.status(500).send({
            message: err.details[0].message,
        });
    }


})

export default router;
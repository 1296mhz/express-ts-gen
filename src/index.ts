import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import dotenv from 'dotenv';
import indexRouter from './routes/index'
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const host = process.env.HOST;

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://${host}:${port}`);
});

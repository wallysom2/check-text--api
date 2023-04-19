import bodyParser from 'body-parser';
import cors from 'cors';
import express, { json } from 'express';
import blackListRouter from './routes/blackListRouter.js';
import checkRouter from './routes/checkRouter.js';
import whiteListRouter from './routes/whiteListRouter.js';

const app = express();
app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(checkRouter);
app.use(blackListRouter);
app.use(whiteListRouter);

export default app;
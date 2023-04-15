import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import checkRouter from './routes/checkRouter.js';
import blackListRouter from './routes/blackListRouter.js';
import whiteListRouter from './routes/whiteListRouter.js';

const app = express();
app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(checkRouter);
app.use(blackListRouter);
app.use(whiteListRouter);

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
import { Router } from "express";
import { checkText } from '../controllers/checkController.js';

const checkRouter = Router();

checkRouter.get('/check', checkText)

export default checkRouter;

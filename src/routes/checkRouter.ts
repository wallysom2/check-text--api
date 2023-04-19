import { Router } from 'express';
import {
	addDirtyWord,
	checkText,
	removeDirtyWord,
	listDirtyWords
} from '../controllers/checkController.js';

const checkRouter = Router();
checkRouter.get('/', listDirtyWords);
checkRouter.get('/check', checkText);
checkRouter.post('/check/add', addDirtyWord);
checkRouter.post('/check/remove', removeDirtyWord);

export default checkRouter;

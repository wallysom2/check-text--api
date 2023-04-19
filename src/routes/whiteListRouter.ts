import { Router } from 'express';

import {
	addtoWhiteList,
	getWordsFromWhiteList,
	removefromWhiteList,
} from '../controllers/whiteListController.js';

const blackListRouter = Router();

blackListRouter.post('/whitelist/add', addtoWhiteList);
blackListRouter.post('/whitelist/remove', removefromWhiteList);
blackListRouter.get('/whitelist', getWordsFromWhiteList);

export default blackListRouter;

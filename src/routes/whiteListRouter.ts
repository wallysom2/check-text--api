import { Router } from "express";

import { addtoWhiteList,
         removefromWhiteList,
         getWordsFromWhiteList } from '../controllers/whiteListController.js';

const blackListRouter = Router();

blackListRouter.post('/whitelist/add', addtoWhiteList );
blackListRouter.post('/whitelist/remove', removefromWhiteList );
blackListRouter.get('/whitelist', getWordsFromWhiteList);

export default blackListRouter;
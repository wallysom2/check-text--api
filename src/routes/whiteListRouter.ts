import { Router } from "express";

import { addWordToWhiteList,
         removeWordfromWhiteList,
         getWordsFromWhiteList } from '../controllers/whiteListController.js';

const blackListRouter = Router();

blackListRouter.post('/whitelist/add', addWordToWhiteList );
blackListRouter.post('/whitelist/remove', removeWordfromWhiteList );
blackListRouter.get('/whitelist', getWordsFromWhiteList);

export default blackListRouter;
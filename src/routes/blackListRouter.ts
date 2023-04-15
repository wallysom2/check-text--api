import {  Router  } from "express";
import {  addWordToBlackList,
          removeWordFromBlackList,
          getWordsFromBlackList   } from '../controllers/blackListController.js';

const blackListRouter = Router();

blackListRouter.post('/blacklist/add', addWordToBlackList);
blackListRouter.post('/blacklist/remove', removeWordFromBlackList);
blackListRouter.get('/blacklist', getWordsFromBlackList);

export default blackListRouter;

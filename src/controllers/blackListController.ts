import { Request, Response } from 'express';
import blackListService from '../services/blackListService.js';
import wp from '../config/wpConfig.js';

export async function getWordsFromBlackList(req: Request, res: Response) {
  try {
    const words = await blackListService.getWordsFromBlacklist();
    res.status(200).send(words);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export async function addWordToBlackList(req: Request, res: Response) {
  const word = req.body.word;
  try {
    await wp.addToBlacklist(word);
    await blackListService.addToBlacklist(word);
    res.status(200).send(`${word} added to blacklist`);
  } catch (error) {
    if (error.message === "already_exists") {
      res.status(409).send(`${word} is already blacklisted`);
    }
  }
};

export async function removeWordFromBlackList(req: Request, res: Response) {
  const word = req.body.word;
  try {
    await wp.removeFromBlacklist(word);
    await blackListService.removeFromBlacklist(word);
    res.status(200).send(`${word} removed from blacklist`);
  } catch (error) {
    if (error.message === "not_exists") {
      res.status(404).send(`${word} is not blacklisted`);
    }
  }
};


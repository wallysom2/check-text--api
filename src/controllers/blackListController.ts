import { Request, Response } from 'express';
import wp from '../config/wpConfig.js';

let blacklist: string[] = [];

export async function addWordToBlackList(req: Request, res: Response) {
  try {
    const word = req.body.word;

    if (blacklist.includes(word)) {
      return res.status(400).send(`${word} is already in the blacklist`);
    }

    await wp.addToBlacklist(word);
    blacklist.push(word);

    res.status(200).send(`${word} added to blacklist`);
    console.log(blacklist);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export async function removeWordFromBlackList(req: Request, res: Response) {
  try {
    const word = req.body.word;

    if (!blacklist.includes(word)) {
      return res.status(400).send(`${word} is not in the blacklist`);
    }

    await wp.removeFromBlacklist(word);
    blacklist = blacklist.filter((item) => item !== word);

    res.status(200).send(`${word} removed from blacklist`);
    console.log(blacklist);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export async function getWordsFromBlackList(req: Request, res: Response) {
  try {
    res.status(200).send(blacklist);
    console.log(blacklist);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

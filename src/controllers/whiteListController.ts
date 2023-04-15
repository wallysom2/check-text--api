import { Request, Response } from 'express';
import wp from '../config/wpConfig.js';

let whitelist = [];

export async function addWordToWhiteList(req: Request, res: Response) {
    try {
        const word = req.body.word;
        if (whitelist.includes(word)) {
            return res.status(400).send(`${word} is already in the whitelist`);
        }
        await wp.addToWhitelist(word);
        whitelist.push(word);
        res.status(200).send(`${word} added to whitelist`);
        console.log(whitelist);
    } catch (error) {
        res.send(error);
    }
};

export async function removeWordfromWhiteList(req: Request, res: Response) {
    try {
        const word = req.body.word;
        const isWordInWhitelist = whitelist.includes(word);
        if (!isWordInWhitelist) {
          res.status(400).send(`${word} is not in the whitelist`);
          console.log(whitelist);
          return;
        }
        await wp.removeFromWhitelist(word);
        whitelist = whitelist.filter((item) => item !== word);
        res.status(200).send(`${word} removed from whitelist`);
        console.log(whitelist);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export async function getWordsFromWhiteList (req: Request, res: Response) {
    try {
        res.status(200).send(whitelist);
        console.log(whitelist);
    } catch (error) {
        res.sendStatus(500);
    }
};
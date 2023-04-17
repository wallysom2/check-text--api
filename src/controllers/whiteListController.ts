import { Request, Response } from 'express';
import wp from '../config/wpConfig.js';
import WhitelistService from '../services/whiteListService.js';

export async function addtoWhiteList (req: Request, res: Response) {
    const word = req.body.word;
    try {
        await wp.addToWhitelist(word);
        await WhitelistService.addToWhitelists(word);
        res.status(200).send(`${word} added to whitelist`);
    } catch (error) {
        if (error.message === "already_exists") {
            res.status(409).send(`${word} is already whitelisted`);
        }
    }
}

export async function removefromWhiteList (req: Request, res: Response) {
    const word = req.body.word;
    try {
        await wp.removeFromWhitelist(word);
        await WhitelistService.removeFromWhitelists(word);
        res.status(200).send(`${word} removed from whitelist`);
    } catch (error) {
        if (error.message === "not_exists") {
            res.status(404).send(`${word} is not whitelisted`);
        }
    }
}

export async function getWordsFromWhiteList (req: Request, res: Response) {
    try {
        const words = await WhitelistService.getWordsFromWhitelist();
        res.status(200).send(words);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

import { Request, Response } from 'express';
import checkService from '../services/checkService.js';

export async function checkText(req: Request, res: Response) {
	const text = req.query.text as string;

	try {
		const result = await checkService.checkWords(text);
		res.json({ containsProfanity: result });
	} catch (error) {
		res.status(500).send(error);
	}
}

export async function listDirtyWords(req: Request, res: Response) {
	try {
		const words = await checkService.getWordsFromCheck();
		res.status(200).send(words);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
}

export async function addDirtyWord(req: Request, res: Response) {
	const word = req.body.word;
	try {
		console.log(word + ' controller');
		await checkService.addWordCheck(word);
		res.status(200).send(`${word} added to check`);
		console.log(`${word} added to check`);
	} catch (error) {
		if (error.message === 'exists') {
			res.status(404).send('The word already exist in the checklists');
		} else {
			res.status(500).send('Internal Server Error');
		}
	}
}

export async function getWordsFromCheck(req: Request, res: Response) {
	try {
		const words = await checkService.getWordsFromCheck();
		res.status(200).send(words);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
}

export async function removeDirtyWord(req: Request, res: Response) {
	const word = req.body.word;
	try {
		await checkService.removeCheckWord(word);
		res.status(200).send(`${word} removed from check`);
	} catch (error) {
		if (error.message === 'not_exists') {
			res.status(404).send('The word does not exist in the checklists');
		} else {
			res.status(500).send('Internal Server Error');
		}
	}
}

import { Whitelist } from '@prisma/client';
import prisma from '../config/databaseConfig.js';

export async function isWordFromWhitelist(word: string): Promise<boolean> {
	const wordFromWhitelist: Whitelist = await prisma.whitelist.findUnique({
		where: {
			word,
		},
	});
	if (wordFromWhitelist) {
		return true;
	}
	return false;
}

export async function addWordToWhiteList(word: string): Promise<void> {
	await prisma.whitelist.create({
		data: {
			word,
		},
	});
}

export async function removeWordWhiteList(word: string): Promise<void> {
	await prisma.whitelist.delete({
		where: {
			word,
		},
	});
}

export async function getWordsWhiteList(): Promise<string[]> {
	const whiteListedWords = await prisma.whitelist.findMany();
	return whiteListedWords.map((word) => word.word);
}

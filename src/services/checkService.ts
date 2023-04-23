import { isWordFromBlacklist } from '../repositories/blackListRepository.js';
import {
	addCheckWords,
	getCheckWords,
	isCheckWord,
	removeDirtyWord,
} from '../repositories/checkRepository.js';
import { isWordFromWhitelist } from '../repositories/whitelistRepository.js';

async function checkWords(text: string): Promise<string[]> {
	const words = text.split(' ');

	const blacklistedWords = [];
	const whitelistedWords = [];
	const checkedWords = [];

	for (const word of words) {
		if (await isWordFromBlacklist(word)) {
			blacklistedWords.push(word);
		} else if (await isWordFromWhitelist(word)) {
			whitelistedWords.push(word);
		} else if (await isCheckWord(word)) {
			checkedWords.push(word);
		}
	}

	const filteredWords = blacklistedWords.filter(
		(word) => !whitelistedWords.includes(word),
	);

	return [...filteredWords, ...checkedWords];
}

async function addWordCheck(word: string): Promise<void> {
	const wordFromWhitelist = await isCheckWord(word);
	if (wordFromWhitelist) {
		throw new Error('exists');
	}
	await addCheckWords(word);
}

async function getWordsFromCheck(): Promise<string[]> {
	const words = await getCheckWords();
	return words;
}

async function removeCheckWord(word: string): Promise<void> {
	const wordFromChecklists = await isCheckWord(word);
	if (!wordFromChecklists) {
		throw new Error('not_exists');
	}
	await removeDirtyWord(word);
}

const checkService = {
	checkWords,
	addWordCheck,
	getWordsFromCheck,
	removeCheckWord,
};

export default checkService;

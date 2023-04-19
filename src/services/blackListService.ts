import {
	addWordToBlacklist,
	getWordsBlacklist,
	isWordFromBlacklist,
	removeWordBlackList,
} from './.././repositories/blackListRepository.js';

async function addToBlacklist(word: string): Promise<void> {
	const wordFromBlacklist = await isWordFromBlacklist(word);
	if (wordFromBlacklist) {
		throw { message: 'already_exists' };
	}
	await addWordToBlacklist(word);
}

async function removeFromBlacklist(word: string): Promise<void> {
	const wordFromBlacklist = await isWordFromBlacklist(word);
	if (!wordFromBlacklist) {
		throw { message: 'not_exists' };
	}
	await removeWordBlackList(word);
}

async function getWordsFromBlacklist(): Promise<string[]> {
	const words = await getWordsBlacklist();
	return words;
}

const blackListService = {
	addToBlacklist,
	removeFromBlacklist,
	getWordsFromBlacklist,
};

export default blackListService;

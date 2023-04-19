import {
	addWordToWhiteList,
	getWordsWhiteList,
	isWordFromWhitelist,
	removeWordWhiteList,
} from '../repositories/whitelistRepository.js';

async function addToWhitelists(word: string): Promise<void> {
	const wordFromWhitelist = await isWordFromWhitelist(word);
	if (wordFromWhitelist) {
		throw { message: 'already_exists' };
	}
	await addWordToWhiteList(word);
}

async function removeFromWhitelists(word: string): Promise<void> {
	const wordFromWhitelist = await isWordFromWhitelist(word);
	if (!wordFromWhitelist) {
		throw { message: 'not_exists' };
	}
	await removeWordWhiteList(word);
}

async function getWordsFromWhitelist(): Promise<string[]> {
	const words = await getWordsWhiteList();
	return words;
}

const WhitelistService = {
	addToWhitelists,
	removeFromWhitelists,
	getWordsFromWhitelist,
};

export default WhitelistService;

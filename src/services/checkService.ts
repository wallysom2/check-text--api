import { isWordFromBlacklist } from '../repositories/blackListRepository.js';
import { isWordFromWhitelist } from '../repositories/whitelistRepository.js';
import {
	addCheckWords,
	getCheckWords,
	isCheckWord,
	removeDirtyWord,
} from '../repositories/checkRepository.js';

async function checkWords(text: string): Promise<string[]> {
    const words = text.split(' ');
    const wordsFromBlacklist = await Promise.all(
        words.map(async (word) => {
            const wordFromBlacklist = await isWordFromBlacklist(word);
            if (wordFromBlacklist) {
                return word;
            }
            return null;
        }),
    );
    const wordsFromWhitelist = await Promise.all(
        words.map(async (word) => {
            const wordFromWhitelist = await isWordFromWhitelist(word);
            if (wordFromWhitelist) {
                return word;
            }
            return null;
        }),
    );
    const wordsFromCheck = await Promise.all(
        words.map(async (word) => {
            const wordFromCheck = await isCheckWord(word);
            if (wordFromCheck) {
                return word;
            }
            return null;
        }),
    );
    const wordsFromBlacklistFiltered = wordsFromBlacklist.filter(
        (word) => word !== null,
    );
    const wordsFromWhitelistFiltered = wordsFromWhitelist.filter(
        (word) => word !== null,
    );
    const wordsFromCheckFiltered = wordsFromCheck.filter(
        (word) => word !== null,
    );
    const wordsFiltered = wordsFromBlacklistFiltered.filter(
        (word) => !wordsFromWhitelistFiltered.includes(word),
    );
    const wordsFilteredCheck = wordsFromCheckFiltered.filter(
        (word) => !wordsFromWhitelistFiltered.includes(word),
    );
    const wordsFilteredCheck2 = wordsFilteredCheck.filter(
        (word) => !wordsFiltered.includes(word),
    );
    return wordsFilteredCheck2;
}

async function addWordCheck(word: string): Promise<void> {
	const wordFromWhitelist = await isCheckWord(word);
	if (wordFromWhitelist) {
		throw new Error ('exists' );
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

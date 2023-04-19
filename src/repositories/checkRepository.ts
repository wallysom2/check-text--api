import prisma from "../config/databaseConfig.js";


export async function isCheckWord(word: string): Promise<boolean | undefined> {
  const wordDirty = await prisma.dirtywords.findUnique({
    where: {
      word,
    },
  });
  if (wordDirty) {
    return true;
  }
  return false;
}

export async function addCheckWords(word: string): Promise<void> {
    await prisma.dirtywords.create({
        data: {
            word,
        },
    });
    }

export async function removeDirtyWord(word: string): Promise<void> {
	await prisma.dirtywords.delete({
		where: {
			word,
		},
	});
}

export async function getCheckWords(): Promise<string[]> {
	const checkWords = await prisma.dirtywords.findMany();
	return checkWords.map((word) => word.word);
}

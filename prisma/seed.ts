import { PrismaClient } from '@prisma/client';
import { dirtywords } from './dirtyWords.js';

const prisma = new PrismaClient();

async function main() {
	await prisma.dirtywords.createMany({
		data: dirtywords.map((word) => ({ word })),
		skipDuplicates: true,
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

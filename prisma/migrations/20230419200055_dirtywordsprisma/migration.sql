/*
  Warnings:

  - You are about to drop the `Blacklist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Whitelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Blacklist";

-- DropTable
DROP TABLE "Whitelist";

-- CreateTable
CREATE TABLE "dirtywords" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "dirtywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blacklist" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "blacklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whitelist" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "whitelist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dirtywords_word_key" ON "dirtywords"("word");

-- CreateIndex
CREATE UNIQUE INDEX "blacklist_word_key" ON "blacklist"("word");

-- CreateIndex
CREATE UNIQUE INDEX "whitelist_word_key" ON "whitelist"("word");

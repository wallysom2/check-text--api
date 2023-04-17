-- CreateTable
CREATE TABLE "Blacklist" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "Blacklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Whitelist" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "Whitelist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blacklist_word_key" ON "Blacklist"("word");

-- CreateIndex
CREATE UNIQUE INDEX "Whitelist_word_key" ON "Whitelist"("word");

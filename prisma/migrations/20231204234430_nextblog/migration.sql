-- CreateTable
CREATE TABLE "testtyVerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "testtyVerificationToken_token_key" ON "testtyVerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "testtyVerificationToken_identifier_token_key" ON "testtyVerificationToken"("identifier", "token");

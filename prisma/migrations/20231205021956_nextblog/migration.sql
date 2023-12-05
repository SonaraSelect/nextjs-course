-- CreateTable
CREATE TABLE "Posts" (
    "title" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorid" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_id_key" ON "Posts"("id");

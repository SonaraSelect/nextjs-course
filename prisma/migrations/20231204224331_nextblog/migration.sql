-- CreateTable
CREATE TABLE "Posts" (
    "postTitle" TEXT NOT NULL,
    "postSlug" TEXT NOT NULL,
    "postContent" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_postSlug_key" ON "Posts"("postSlug");

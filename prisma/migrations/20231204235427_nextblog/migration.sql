/*
  Warnings:

  - You are about to drop the column `postContent` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `postSlug` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `postTitle` on the `Posts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Posts_postSlug_key";

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "postContent",
DROP COLUMN "postSlug",
DROP COLUMN "postTitle",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Posts_id_key" ON "Posts"("id");

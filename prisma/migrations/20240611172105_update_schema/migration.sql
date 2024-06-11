/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Profile` table. All the data in the column will be lost.
  - The `interests` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Match_userId1_userId2_key";

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "interests",
ADD COLUMN     "interests" TEXT[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

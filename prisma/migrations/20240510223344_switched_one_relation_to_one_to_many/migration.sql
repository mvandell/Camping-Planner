/*
  Warnings:

  - You are about to drop the `_ClothingToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Clothing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ClothingToUser" DROP CONSTRAINT "_ClothingToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClothingToUser" DROP CONSTRAINT "_ClothingToUser_B_fkey";

-- AlterTable
ALTER TABLE "Clothing" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ClothingToUser";

-- AddForeignKey
ALTER TABLE "Clothing" ADD CONSTRAINT "Clothing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

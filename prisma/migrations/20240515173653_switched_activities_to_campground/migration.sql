/*
  Warnings:

  - You are about to drop the `_ActivitiesToTrip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ActivitiesToTrip" DROP CONSTRAINT "_ActivitiesToTrip_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActivitiesToTrip" DROP CONSTRAINT "_ActivitiesToTrip_B_fkey";

-- DropTable
DROP TABLE "_ActivitiesToTrip";

-- CreateTable
CREATE TABLE "_ActivitiesToCampgrounds" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActivitiesToCampgrounds_AB_unique" ON "_ActivitiesToCampgrounds"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivitiesToCampgrounds_B_index" ON "_ActivitiesToCampgrounds"("B");

-- AddForeignKey
ALTER TABLE "_ActivitiesToCampgrounds" ADD CONSTRAINT "_ActivitiesToCampgrounds_A_fkey" FOREIGN KEY ("A") REFERENCES "Activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivitiesToCampgrounds" ADD CONSTRAINT "_ActivitiesToCampgrounds_B_fkey" FOREIGN KEY ("B") REFERENCES "Campgrounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

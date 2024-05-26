/*
  Warnings:

  - Made the column `picture` on table `Campgrounds` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Campgrounds" ALTER COLUMN "picture" SET NOT NULL;

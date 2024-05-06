/*
  Warnings:

  - Added the required column `needed` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "needed" BOOLEAN NOT NULL;

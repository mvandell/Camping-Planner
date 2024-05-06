-- AlterTable
ALTER TABLE "Clothing" ALTER COLUMN "packed" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Equipment" ALTER COLUMN "packed" SET DEFAULT false,
ALTER COLUMN "needed" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "purchased" SET DEFAULT false,
ALTER COLUMN "cooler" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "current" SET DEFAULT true;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isAdmin" SET DEFAULT false;

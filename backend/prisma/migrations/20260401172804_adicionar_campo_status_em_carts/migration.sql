/*
  Warnings:

  - Added the required column `status` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('active', 'finished');

-- AlterTable
ALTER TABLE "carts" ADD COLUMN     "status" "Status" NOT NULL;

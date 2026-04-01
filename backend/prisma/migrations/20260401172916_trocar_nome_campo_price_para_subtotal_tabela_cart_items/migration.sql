/*
  Warnings:

  - You are about to drop the column `price` on the `cart_items` table. All the data in the column will be lost.
  - Added the required column `subtotal` to the `cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart_items" DROP COLUMN "price",
ADD COLUMN     "subtotal" DECIMAL(10,2) NOT NULL;

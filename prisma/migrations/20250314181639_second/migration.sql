/*
  Warnings:

  - Added the required column `alt` to the `Katalog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Katalog" ADD COLUMN     "alt" TEXT NOT NULL;

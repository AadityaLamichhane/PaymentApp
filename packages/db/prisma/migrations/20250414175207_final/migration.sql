/*
  Warnings:

  - You are about to drop the column `time` on the `TransferToUser` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `TransferToUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransferToUser" DROP COLUMN "time",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

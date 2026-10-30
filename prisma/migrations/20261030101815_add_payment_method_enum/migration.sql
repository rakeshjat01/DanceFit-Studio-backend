/*
  Warnings:

  - Made the column `paymentMethod` on table `Subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Subscription` MODIFY `paymentMethod` ENUM('CASH', 'UPI', 'CARD', 'NET_BANKING') NOT NULL DEFAULT 'CASH';

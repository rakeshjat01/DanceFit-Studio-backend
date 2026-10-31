-- CreateTable
CREATE TABLE `TeamMember` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `role` ENUM('FOUNDER', 'INSTRUCTOR', 'MEMBER') NOT NULL DEFAULT 'MEMBER',
    `bio` TEXT NULL,
    `image` VARCHAR(191) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `instagram` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

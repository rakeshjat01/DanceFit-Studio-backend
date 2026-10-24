-- CreateTable
CREATE TABLE `trial_bookings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `mobile_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `age_group` VARCHAR(191) NULL,
    `interested_service` VARCHAR(191) NULL,
    `preferred_batch` VARCHAR(191) NULL,
    `preferred_trial_date` DATETIME(3) NULL,
    `message` TEXT NULL,
    `consent_agreed` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

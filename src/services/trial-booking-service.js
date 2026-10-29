import { TrialBookingRepository } from '../repositories/index.js';

export const createBookingService = async (data) => {
  const formattedData = {
    fullName: data.fullName,
    mobileNumber: data.mobileNumber,
    email: data.email || null,
    ageGroup: data.ageGroup || null,
    interestedService: data.interestedService || null,
    preferredBatch: data.preferredBatch || null,
    preferredTrialDate: data.preferredTrialDate ? new Date(data.preferredTrialDate) : null,
    message: data.message || null,
    consentAgreed: data.consentAgreed ?? true,
  };

  return await TrialBookingRepository.createBookingRepo(formattedData);
};

export const getAllBookingsService = async () => {
  return await TrialBookingRepository.getAllBookingsRepo();
};
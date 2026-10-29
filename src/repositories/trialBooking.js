import prisma from '../config/prismaClient.js';

export const createBookingRepo = async (data) => {
  return await prisma.trialBooking.create({ data });
};

export const getAllBookingsRepo = async () => {
  return await prisma.trialBooking.findMany({
    orderBy: { createdAt: 'desc' },
  });
};
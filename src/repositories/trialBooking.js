import prisma from '../config/prismaClient.js';

class TrialBookingRepository {
  async create(data) {
    return await prisma.trialBooking.create({ data });
  }

  async getAll() {
    return await prisma.trialBooking.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}

export default TrialBookingRepository;
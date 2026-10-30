import prisma from '../config/prismaClient.js';

export const createSubscriptionRepo = async (data) => {
  return await prisma.subscription.create({
    data,
    include: {
      user: true,
      plan: true,
    },
  });
};

export const getAllSubscriptionsRepo = async () => {
  return await prisma.subscription.findMany({
    include: {
      user: true,
      plan: true,
    },
    orderBy: { createdAt: 'desc' },
  });
};
import prisma from '../config/prismaClient.js';
import { SubscriptionRepository } from '../repositories/index.js';

export const createSubscriptionService = async (data = {}) => {
  const { userId, planId, amountPaid, paymentMethod, startDate, endDate } = data;

  if (!userId || !planId) {
    throw { status: 400, message: 'userId and planId are required fields' };
  }

  // 1. User Check
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw { status: 404, message: 'User not found' };
  }

  // 2. Plan Check
  const plan = await prisma.plan.findUnique({ where: { id: planId } });
  if (!plan) {
    throw { status: 404, message: 'Plan not found' };
  }

  // 3. Date Calculations
  const subscriptionStartDate = startDate ? new Date(startDate) : new Date();

  let subscriptionEndDate;
  if (endDate) {
    subscriptionEndDate = new Date(endDate);
  } else {
    subscriptionEndDate = new Date(subscriptionStartDate);
    subscriptionEndDate.setDate(subscriptionEndDate.getDate() + plan.durationDays);
  }

  const subscriptionData = {
    userId,
    planId,
    startDate: subscriptionStartDate,
    endDate: subscriptionEndDate,
    amountPaid: amountPaid !== undefined ? amountPaid : plan.price,
    paymentMethod: paymentMethod ? paymentMethod.toUpperCase() : 'CASH', // 👈 CASH, UPI, CARD, NET_BANKING
    paymentStatus: 'PAID',
    status: 'ACTIVE',
  };

  return await SubscriptionRepository.createSubscriptionRepo(subscriptionData);
};
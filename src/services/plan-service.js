import { PlanRepository } from '../repositories/index.js';

export const createPlanService = async (data) => {
  const planData = {
    ...data,
    price: parseFloat(data.price),
    durationDays: parseInt(data.durationDays),
  };
  return await PlanRepository.createPlanRepo(planData);
};

export const getAllPlansService = async () => {
  return await PlanRepository.getAllPlanRepo();
};

export const getPlanByIdService = async (id) => {
  const plan = await PlanRepository.getPlanByIdRepo(id);
  if (!plan) {
    throw { status: 404, message: 'Plan not found' };
  }
  return plan;
};

export const updatePlanService = async (id, data) => {
  await getPlanByIdService(id);
  const updateData = {};
  if (data.name) updateData.name = data.name;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.price) updateData.price = parseFloat(data.price);
  if (data.durationDays) updateData.durationDays = parseInt(data.durationDays);
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

  return await PlanRepository.updatePlanRepo(id, updateData);
};

export const deletePlanService = async (id) => {
  await getPlanByIdService(id);
  return await PlanRepository.deletePlanRepo(id);
};
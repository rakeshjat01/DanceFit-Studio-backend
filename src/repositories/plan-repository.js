import prisma from "../config/prismaClient.js"; // 👈 Added .js extension

export const createPlanRepo = async (data) => {
  return await prisma.plan.create({ data });
};

export const getAllPlanRepo = async () => {
  return await prisma.plan.findMany({
    orderBy: { createdAt: 'desc' }, // 👈 Small 'o' (orderBy)
  });
};

export const getPlanByIdRepo = async (id) => {
  return await prisma.plan.findUnique({
    where: { id },
  });
};

export const updatePlanRepo = async (id, data) => {
  return await prisma.plan.update({
    where: { id },
    data,
  });
};

export const deletePlanRepo = async (id) => {
  return await prisma.plan.delete({
    where: { id },
  });
};
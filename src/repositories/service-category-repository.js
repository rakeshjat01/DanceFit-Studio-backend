import prisma from '../config/prismaClient.js';

export const createServiceCategoryRepo = async (data) => {
  return await prisma.serviceCategory.create({ data });
};

export const getAllServiceCategoriesRepo = async (onlyActive = true) => {
  const where = onlyActive ? { isActive: true } : {};
  return await prisma.serviceCategory.findMany({
    where,
    include: {
      services: {
        where: onlyActive ? { isActive: true } : {},
        orderBy: { order: 'asc' },
      },
    },
    orderBy: { order: 'asc' },
  });
};

export const getServiceCategoryByIdRepo = async (id) => {
  return await prisma.serviceCategory.findUnique({
    where: { id },
    include: { services: true },
  });
};

export const updateServiceCategoryRepo = async (id, data) => {
  return await prisma.serviceCategory.update({
    where: { id },
    data,
  });
};

export const deleteServiceCategoryRepo = async (id) => {
  return await prisma.serviceCategory.delete({ where: { id } });
};
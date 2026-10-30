import prisma from '../config/prismaClient.js';

export const createCategoryRepo = async (data) => {
  return await prisma.category.create({ data });
};

export const getAllCategoriesRepo = async () => {
  return await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  });
};

export const getCategoryByIdRepo = async (id) => {
  return await prisma.category.findUnique({ where: { id } });
};

export const updateCategoryRepo = async (id, data) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};

export const deleteCategoryRepo = async (id) => {
  return await prisma.category.delete({ where: { id } });
};
import prisma from '../config/prismaClient.js';

export const createServiceRepo = async (data) => {
  return await prisma.service.create({
    data,
    include: { category: true },
  });
};

export const getAllServicesRepo = async (onlyActive = true) => {
  const where = onlyActive ? { isActive: true } : {};
  return await prisma.service.findMany({
    where,
    include: { category: true },
    orderBy: { order: 'asc' },
  });
};

export const getServiceByIdRepo = async (id) => {
  return await prisma.service.findUnique({
    where: { id },
    include: { category: true },
  });
};

export const updateServiceRepo = async (id, data) => {
  return await prisma.service.update({
    where: { id },
    data,
    include: { category: true },
  });
};

export const deleteServiceRepo = async (id) => {
  return await prisma.service.delete({ where: { id } });
};
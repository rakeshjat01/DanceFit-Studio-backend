import prisma from '../config/prismaClient.js';

export const createUserRepo = async (data) => {
  return await prisma.user.create({ data });
};

export const getAllUsersRepo = async () => {
  return await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const getUserByIdRepo = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const updateUserRepo = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUserRepo = async (id) => {
  return await prisma.user.delete({
    where: { id },
  });
};
import prisma from '../config/prismaClient.js';

export const createTeamMemberRepo = async (data) => {
  return await prisma.teamMember.create({ data });
};

export const getAllTeamMembersRepo = async (filter = {}) => {
  const { onlyActive = true, role } = filter;
  
  const where = {
    ...(onlyActive ? { isActive: true } : {}),
    ...(role ? { role } : {}),
  };

  return await prisma.teamMember.findMany({
    where,
    orderBy: { order: 'asc' },
  });
};

export const getTeamMemberByIdRepo = async (id) => {
  return await prisma.teamMember.findUnique({ where: { id } });
};

export const updateTeamMemberRepo = async (id, data) => {
  return await prisma.teamMember.update({
    where: { id },
    data,
  });
};

export const deleteTeamMemberRepo = async (id) => {
  return await prisma.teamMember.delete({ where: { id } });
};
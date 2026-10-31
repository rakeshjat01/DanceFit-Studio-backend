import { TeamRepository } from '../repositories/index.js';

const VALID_ROLES = ['FOUNDER', 'INSTRUCTOR', 'MEMBER'];

export const createTeamMemberService = async (data = {}) => {
  if (!data.name || !data.designation) {
    throw { status: 400, message: 'Name and designation are required' };
  }

  if (data.role && !VALID_ROLES.includes(data.role.toUpperCase())) {
    throw { status: 400, message: 'Invalid role. Allowed roles: FOUNDER, INSTRUCTOR, MEMBER' };
  }

  const payload = {
    name: data.name,
    designation: data.designation,
    role: data.role ? data.role.toUpperCase() : 'MEMBER',
    bio: data.bio || null,
    image: data.image || null,
    order: data.order !== undefined ? Number(data.order) : 0,
    isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
    instagram: data.instagram || null,
    facebook: data.facebook || null,
    linkedin: data.linkedin || null,
  };

  return await TeamRepository.createTeamMemberRepo(payload);
};

export const getAllTeamMembersService = async (query = {}) => {
  const onlyActive = query.admin !== 'true';
  const role = query.role ? query.role.toUpperCase() : undefined;

  if (role && !VALID_ROLES.includes(role)) {
    throw { status: 400, message: 'Invalid role filter' };
  }

  return await TeamRepository.getAllTeamMembersRepo({ onlyActive, role });
};

export const getTeamMemberByIdService = async (id) => {
  const member = await TeamRepository.getTeamMemberByIdRepo(id);
  if (!member) {
    throw { status: 404, message: 'Team member not found' };
  }
  return member;
};

export const updateTeamMemberService = async (id, data = {}) => {
  await getTeamMemberByIdService(id);

  if (data.role && !VALID_ROLES.includes(data.role.toUpperCase())) {
    throw { status: 400, message: 'Invalid role. Allowed roles: FOUNDER, INSTRUCTOR, MEMBER' };
  }

  const updateData = {};
  if (data.name) updateData.name = data.name;
  if (data.designation) updateData.designation = data.designation;
  if (data.role) updateData.role = data.role.toUpperCase();
  if (data.bio !== undefined) updateData.bio = data.bio;
  if (data.image !== undefined) updateData.image = data.image;
  if (data.order !== undefined) updateData.order = Number(data.order);
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);
  if (data.instagram !== undefined) updateData.instagram = data.instagram;
  if (data.facebook !== undefined) updateData.facebook = data.facebook;
  if (data.linkedin !== undefined) updateData.linkedin = data.linkedin;

  return await TeamRepository.updateTeamMemberRepo(id, updateData);
};

export const deleteTeamMemberService = async (id) => {
  await getTeamMemberByIdService(id);
  return await TeamRepository.deleteTeamMemberRepo(id);
};
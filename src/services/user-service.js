import { UserRepository } from '../repositories/index.js';

export const createUserService = async (data) => {
  return await UserRepository.createUserRepo(data);
};

export const getAllUsersService = async () => {
  return await UserRepository.getAllUsersRepo();
};

export const getUserByIdService = async (id) => {
  const user = await UserRepository.getUserByIdRepo(id);
  if (!user) {
    throw { status: 404, message: 'User not found' };
  }
  return user;
};

export const updateUserService = async (id, data) => {
  await getUserByIdService(id);
  
  const updateData = {};
  if (data.fullName) updateData.fullName = data.fullName;
  if (data.mobileNumber) updateData.mobileNumber = data.mobileNumber;
  if (data.email !== undefined) updateData.email = data.email;
  if (data.profileImage !== undefined) updateData.profileImage = data.profileImage;
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

  return await UserRepository.updateUserRepo(id, updateData);
};

export const deleteUserService = async (id) => {
  await getUserByIdService(id);
  return await UserRepository.deleteUserRepo(id);
};
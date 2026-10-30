import prisma from '../config/prismaClient.js';
import { UserRepository } from '../repositories/index.js';

export const createUserService = async (data) => {
  // 1. Mobile number duplicate check
  if (data.mobileNumber) {
    const existingUserByMobile = await prisma.user.findUnique({
      where: { mobileNumber: data.mobileNumber },
    });

    if (existingUserByMobile) {
      throw { status: 400, message: 'User with this mobile number already exists' };
    }
  }

  // 2. Email duplicate check (agar email bheja gaya ho)
  if (data.email) {
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUserByEmail) {
      throw { status: 400, message: 'User with this email already exists' };
    }
  }

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

  // Agar update mein new mobile number aa raha hai toh uska duplicate check
  if (data.mobileNumber) {
    const existingUserByMobile = await prisma.user.findUnique({
      where: { mobileNumber: data.mobileNumber },
    });

    if (existingUserByMobile && existingUserByMobile.id !== id) {
      throw { status: 400, message: 'Mobile number is already in use by another user' };
    }
  }

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
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createUser = async (req, res, next) => {
  try {
    const user = await UserService.createUserService(req.body);
    SuccessResponse.message = 'User created successfully';
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsersService();
    SuccessResponse.message = 'Fetched all users successfully';
    SuccessResponse.data = users;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await UserService.getUserByIdService(req.params.id);
    SuccessResponse.message = 'Fetched user details successfully';
    SuccessResponse.data = user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await UserService.updateUserService(req.params.id, req.body);
    SuccessResponse.message = 'User details updated successfully';
    SuccessResponse.data = updatedUser;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await UserService.deleteUserService(req.params.id);
    SuccessResponse.message = 'User deleted successfully';
    SuccessResponse.data = {};
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
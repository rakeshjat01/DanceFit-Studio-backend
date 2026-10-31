import { StatusCodes } from 'http-status-codes';
import { ServiceCategoryService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createServiceCategory = async (req, res, next) => {
  try {
    const category = await ServiceCategoryService.createServiceCategoryService(req.body);
    SuccessResponse.message = 'Service category created successfully';
    SuccessResponse.data = category;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllServiceCategories = async (req, res, next) => {
  try {
    const onlyActive = req.query.admin !== 'true';
    const categories = await ServiceCategoryService.getAllServiceCategoriesService(onlyActive);
    SuccessResponse.message = 'Service categories fetched successfully';
    SuccessResponse.data = categories;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getServiceCategoryById = async (req, res, next) => {
  try {
    const category = await ServiceCategoryService.getServiceCategoryByIdService(req.params.id);
    SuccessResponse.message = 'Service category fetched successfully';
    SuccessResponse.data = category;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateServiceCategory = async (req, res, next) => {
  try {
    const category = await ServiceCategoryService.updateServiceCategoryService(req.params.id, req.body);
    SuccessResponse.message = 'Service category updated successfully';
    SuccessResponse.data = category;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteServiceCategory = async (req, res, next) => {
  try {
    const category = await ServiceCategoryService.deleteServiceCategoryService(req.params.id);
    SuccessResponse.message = 'Service category deleted successfully';
    SuccessResponse.data = category;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
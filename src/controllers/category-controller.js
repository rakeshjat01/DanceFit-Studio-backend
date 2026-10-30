import { StatusCodes } from 'http-status-codes';
import { CategoryService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createCategory = async (req, res, next) => {
  try {
    const category = await CategoryService.createCategoryService(req.body);
    SuccessResponse.message = 'Category created successfully';
    SuccessResponse.data = category;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategoryService.getAllCategoriesService();
    SuccessResponse.message = 'Categories fetched successfully';
    SuccessResponse.data = categories;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  try {
    const category = await CategoryService.getCategoryByIdService(req.params.id);
    SuccessResponse.message = 'Category fetched successfully';
    SuccessResponse.data = category;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await CategoryService.updateCategoryService(req.params.id, req.body);
    SuccessResponse.message = 'Category updated successfully';
    SuccessResponse.data = updatedCategory;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await CategoryService.deleteCategoryService(req.params.id);
    SuccessResponse.message = 'Category deleted successfully';
    SuccessResponse.data = deletedCategory;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
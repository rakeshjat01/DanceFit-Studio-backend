import { StatusCodes } from 'http-status-codes';
import { GalleryService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createGalleryItem = async (req, res, next) => {
  try {
    const item = await GalleryService.createGalleryItemService(req.body);
    SuccessResponse.message = 'Gallery item added successfully';
    SuccessResponse.data = item;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllGalleryItems = async (req, res, next) => {
  try {
    const { category } = req.query;
    const items = await GalleryService.getAllGalleryItemsService(category);
    SuccessResponse.message = 'Gallery items fetched successfully';
    SuccessResponse.data = items;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getGalleryItemById = async (req, res, next) => {
  try {
    const item = await GalleryService.getGalleryItemByIdService(req.params.id);
    SuccessResponse.message = 'Gallery item fetched successfully';
    SuccessResponse.data = item;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateGalleryItem = async (req, res, next) => {
  try {
    const updatedItem = await GalleryService.updateGalleryItemService(req.params.id, req.body);
    SuccessResponse.message = 'Gallery item updated successfully';
    SuccessResponse.data = updatedItem;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteGalleryItem = async (req, res, next) => {
  try {
    const deletedItem = await GalleryService.deleteGalleryItemService(req.params.id);
    SuccessResponse.message = 'Gallery item deleted successfully';
    SuccessResponse.data = deletedItem;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
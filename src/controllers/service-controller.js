import { StatusCodes } from 'http-status-codes';
import { ServiceService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createService = async (req, res, next) => {
  try {
    const service = await ServiceService.createServiceService(req.body);
    SuccessResponse.message = 'Service created successfully';
    SuccessResponse.data = service;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllServices = async (req, res, next) => {
  try {
    const onlyActive = req.query.admin !== 'true';
    const services = await ServiceService.getAllServicesService(onlyActive);
    SuccessResponse.message = 'Services fetched successfully';
    SuccessResponse.data = services;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getServiceById = async (req, res, next) => {
  try {
    const service = await ServiceService.getServiceByIdService(req.params.id);
    SuccessResponse.message = 'Service fetched successfully';
    SuccessResponse.data = service;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const service = await ServiceService.updateServiceService(req.params.id, req.body);
    SuccessResponse.message = 'Service updated successfully';
    SuccessResponse.data = service;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const service = await ServiceService.deleteServiceService(req.params.id);
    SuccessResponse.message = 'Service deleted successfully';
    SuccessResponse.data = service;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
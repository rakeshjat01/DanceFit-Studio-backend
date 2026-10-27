import { StatusCodes } from 'http-status-codes';
import { PlanService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createPlan = async (req, res, next) => {
  try {
    const plan = await PlanService.createPlanService(req.body);
    SuccessResponse.message = 'Plan created successfully';
    SuccessResponse.data = plan;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllPlans = async (req, res, next) => {
  try {
    const plans = await PlanService.getAllPlansService();
    SuccessResponse.message = 'Fetched all plans successfully';
    SuccessResponse.data = plans;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getPlanById = async (req, res, next) => {
  try {
    const plan = await PlanService.getPlanByIdService(req.params.id);
    SuccessResponse.message = 'Fetched plan details successfully';
    SuccessResponse.data = plan;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updatePlan = async (req, res, next) => {
  try {
    const updatedPlan = await PlanService.updatePlanService(req.params.id, req.body);
    SuccessResponse.message = 'Plan updated successfully';
    SuccessResponse.data = updatedPlan;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deletePlan = async (req, res, next) => {
  try {
    await PlanService.deletePlanService(req.params.id);
    SuccessResponse.message = 'Plan deleted successfully';
    SuccessResponse.data = {};
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
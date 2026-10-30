import { StatusCodes } from 'http-status-codes';
import { SubscriptionService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await SubscriptionService.createSubscriptionService(req.body);
    SuccessResponse.message = 'Subscription created successfully';
    SuccessResponse.data = subscription;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await SubscriptionService.getAllSubscriptionsService();
    SuccessResponse.message = 'Fetched all subscriptions successfully';
    SuccessResponse.data = subscriptions;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};
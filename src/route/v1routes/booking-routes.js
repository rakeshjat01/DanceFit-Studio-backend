import express from 'express';
import { TrialBookingController } from '../../controllers/index.js';
import { TrialBookingMiddleware } from '../../middlewares/index.js';

const router = express.Router();

router.post(
  '/',
  TrialBookingMiddleware.validateCreateTrialBooking,
  TrialBookingController.createBooking
);

router.get(
  '/',
  TrialBookingController.getAllBookings
);

export default router;
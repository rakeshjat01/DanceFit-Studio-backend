import express from 'express';
import { createBooking, getBookings } from '../controllers/trial-booking.js';
import { validateCreateTrialBooking } from '../middlewares/booking-middleware.js';

const router = express.Router();

router.post('/', validateCreateTrialBooking, createBooking);
router.get('/', getBookings);

export default router;
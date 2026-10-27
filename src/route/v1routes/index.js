import express from 'express';
import bookingRoutes from './booking-routes.js';
import planRoutes from './plan-routes.js';

const router = express.Router();

router.use('/trial-bookings', bookingRoutes);
router.use('/plans', planRoutes);

export default router;
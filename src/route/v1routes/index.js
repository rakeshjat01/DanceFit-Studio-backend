import express from 'express';
import bookingRoutes from './booking-routes.js';
import planRoutes from './plan-routes.js';
import userRoutes from './user-routes.js';

const router = express.Router();

router.use('/trial-bookings', bookingRoutes);
router.use('/plans', planRoutes);
router.use('/users', userRoutes);


export default router;
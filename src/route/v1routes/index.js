import express from 'express';
import bookingRoutes from './booking-routes.js';
import planRoutes from './plan-routes.js';
import userRoutes from './user-routes.js';
import subscriptionRoutes from './subscription-routes.js';
import galleryRoutes from './gallery-routes.js';
import blogRoutes from './blog-routes.js';
import categoryRoutes from './category-routes.js';
import serviceCategoryRoutes from './service-category-routes.js';
import serviceRoutes from './service-routes.js';
import teamRoutes from './team-routes.js';

const router = express.Router();

router.use('/trial-bookings', bookingRoutes);
router.use('/plans', planRoutes);
router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes)
router.use('/gallery', galleryRoutes);
router.use('/blogs', blogRoutes);
router.use('/categories', categoryRoutes);
router.use('/service-categories', serviceCategoryRoutes);
router.use('/services', serviceRoutes);
router.use('/team', teamRoutes);


export default router;
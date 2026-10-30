import express from 'express';
import { SubscriptionController } from '../../controllers/index.js';

const router = express.Router();

router.post('/', SubscriptionController.createSubscription);
router.get('/', SubscriptionController.getAllSubscriptions);

export default router;
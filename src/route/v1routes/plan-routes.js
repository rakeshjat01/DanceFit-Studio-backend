import express from 'express';

// Direct controller functions import
import {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
} from '../../controllers/plan-controller.js';

const router = express.Router();

router.post('/', createPlan);
router.get('/', getAllPlans);
router.get('/:id', getPlanById);
router.patch('/:id', updatePlan);
router.delete('/:id', deletePlan);

export default router;
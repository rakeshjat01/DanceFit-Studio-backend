import express from 'express';
import { ServiceCategoryController } from '../../controllers/index.js';

const router = express.Router();

router.post('/', ServiceCategoryController.createServiceCategory);
router.get('/', ServiceCategoryController.getAllServiceCategories);
router.get('/:id', ServiceCategoryController.getServiceCategoryById);
router.patch('/:id', ServiceCategoryController.updateServiceCategory);
router.delete('/:id', ServiceCategoryController.deleteServiceCategory);

export default router;
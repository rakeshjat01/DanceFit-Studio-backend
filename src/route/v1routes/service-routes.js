import express from 'express';
import { ServiceController } from '../../controllers/index.js';

const router = express.Router();

router.post('/', ServiceController.createService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getServiceById);
router.patch('/:id', ServiceController.updateService);
router.delete('/:id', ServiceController.deleteService);

export default router;
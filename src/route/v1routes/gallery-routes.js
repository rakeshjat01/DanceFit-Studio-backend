import express from 'express';
import { GalleryController } from '../../controllers/index.js';

const router = express.Router();

router.post('/', GalleryController.createGalleryItem);
router.get('/', GalleryController.getAllGalleryItems);
router.get('/:id', GalleryController.getGalleryItemById);
router.patch('/:id', GalleryController.updateGalleryItem);
router.delete('/:id', GalleryController.deleteGalleryItem);

export default router;
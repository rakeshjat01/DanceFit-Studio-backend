import express from 'express';
import { UserController } from '../../controllers/index.js';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
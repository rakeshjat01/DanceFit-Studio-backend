import express from 'express';
import { TeamController } from '../../controllers/index.js';

const router = express.Router();

router.post('/', TeamController.createTeamMember);
router.get('/', TeamController.getAllTeamMembers);
router.get('/:id', TeamController.getTeamMemberById);
router.patch('/:id', TeamController.updateTeamMember);
router.delete('/:id', TeamController.deleteTeamMember);

export default router;
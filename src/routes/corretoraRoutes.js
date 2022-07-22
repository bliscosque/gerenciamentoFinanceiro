import express from 'express';
import corretoraController from '../controllers/CorretoraController';

import loginRequired from '../middlewares/loginRequired';

const router = new express.Router();

router.get('/', loginRequired, corretoraController.index);
router.get('/:id', loginRequired, corretoraController.show);

router.post('/', loginRequired, corretoraController.store);
router.put('/:id', loginRequired, corretoraController.update);
router.delete('/:id', loginRequired, corretoraController.delete);

export default router;

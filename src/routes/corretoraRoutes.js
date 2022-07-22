import express from 'express';
import corretoraController from '../controllers/CorretoraController';

import loginRequired from '../middlewares/loginRequired';

const router = new express.Router();

router.get('/', loginRequired, corretoraController.index);
// router.get('/:id', loginRequired, corretoraController.show);

// my app... so I cannot create more users
// router.post('/', userController.store);
// router.put('/', userController.update);
// router.delete('/', userController.delete);

export default router;

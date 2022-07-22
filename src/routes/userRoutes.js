import express from 'express';
import userController from '../controllers/UserController';

// import loginRequired from '../middlewares/loginRequired';

const router = new express.Router();

router.get('/', userController.index); // lista usuarios
router.get('/:id', userController.show); // lista usuario

// my app... so I cannot create more users
// router.post('/', userController.store);
// router.put('/', userController.update);
// router.delete('/', userController.delete);

export default router;

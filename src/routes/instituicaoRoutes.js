import express from 'express';
import instituicaoController from '../controllers/InstituicaoController';

import loginRequired from '../middlewares/loginRequired';

const router = new express.Router();

router.get('/', loginRequired, instituicaoController.index);
router.get('/:id', loginRequired, instituicaoController.show);

router.post('/', loginRequired, instituicaoController.store);
router.put('/:id', loginRequired, instituicaoController.update);
router.delete('/:id', loginRequired, instituicaoController.delete);

export default router;

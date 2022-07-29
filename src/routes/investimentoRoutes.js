import express from 'express';
import investimentoController from '../controllers/InvestimentoController';

import loginRequired from '../middlewares/loginRequired';

const router = new express.Router();

router.get('/', loginRequired, investimentoController.index);
router.get('/:id', loginRequired, investimentoController.show);

router.post('/', loginRequired, investimentoController.store);
router.put('/:id', loginRequired, investimentoController.update);
router.delete('/:id', loginRequired, investimentoController.delete);

export default router;

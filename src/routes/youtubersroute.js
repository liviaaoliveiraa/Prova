import { Router } from 'express';
import * as youtubersController from '../controllers/youtubersController.js';

const router = Router();

router.get('/', youtubersController.listarTodos);
router.get('/:id', youtubersController.listarUm);
router.post('/', youtubersController.criar);
router.delete('/:id',youtubersController.deletar);
router.put('/:id', youtubersController.atualizar)


export default router;


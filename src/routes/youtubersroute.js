import { Router } from 'express';
import * as youtubersController from './../controllers/youtubersController.js';

const router = Router();

router.get('/', youtubersController.listarTodos);

export default router;
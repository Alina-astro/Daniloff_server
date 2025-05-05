import express from 'express';
import { insertOrder } from '../controllers/insertOrder.js';

const router = express.Router();
router.post('/order', insertOrder);

export default router;
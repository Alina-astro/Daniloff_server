import express from 'express';
import multer from 'multer';
import { insertOrder } from '../controllers/insertOrder.js';
import { getOrders } from '../controllers/getOrders.js';
import { updateOrder } from '../controllers/updateOrder.js';

const router = express.Router();
const upload = multer(); // Можно настроить, если надо сохранять файлы

router.post('/order', upload.none(), insertOrder);
router.get('/order', getOrders); // получить заявки с фильтрами
router.put('/order/:id', updateOrder); // обновить заявку

export default router;
import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer(); // Можно настроить, если надо сохранять файлы

router.post('/order', upload.none(), (req, res) => {
  console.log('Body:', req.body);
  // req.files — если будет upload.any() или upload.array()
  res.status(200).json({ message: 'Form received successfully' });
});

export default router;
import express from 'express';
const router = express.Router();

// หน้าคำสั่งซื้อ
router.get('/order', async (req, res) => {
    res.render('pages/index.ejs', { currentUrl: req.url });
});

export default router;
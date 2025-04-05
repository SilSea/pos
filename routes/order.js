import express from 'express';
const router = express.Router();

// หน้าคำสั่งซื้อ
router.get('/order', async (req, res) => {
    res.render('pages/index.ejs', { currentUrl: req.url });
});
router.get('/product_order.ejs', async (req, res) => {
    res.render('pages/product_order.ejs', { currentUrl: req.url });
});

export default router;
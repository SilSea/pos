import express from 'express';
const router = express.Router();

// หน้าสินค้า
router.get('/product', async (req, res) => {
    res.render('pages/index.ejs', { currentUrl: req.url });
});

export default router;
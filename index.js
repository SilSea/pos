import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import moment from 'moment-timezone';
import req from 'express/lib/request.js';
import { render } from 'ejs';
import orderRoute from './routes/order.js';
import productRoute from './routes/product.js';
import summaryRoute from './routes/summary.js';

const app = express();
const port = process.env.port || 3000;

// ตั้งค่าให้ Express ใช้ EJS เป็น Template Engine
app.set('view engine', 'ejs');

// ตั้งค่าโฟลเดอร์ assets สำหรับไฟล์ static เช่น CSS, รูปภาพ, และ JS
app.use(express.static('assets'));

// ตั้งค่าหน้าแรก
app.get('/', async (req, res) =>{
    res.redirect('/order');
});

// ตั้งค่าไปหน้าต่างๆของ Order
app.use('/', orderRoute);
// ตั้งค่าไปหน้าต่างๆของ Product
app.use('/', productRoute);
// ตั้งค่าไปหน้าต่างๆของ Summary
app.use('/', summaryRoute)

// Run Server
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
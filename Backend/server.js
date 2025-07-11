import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import connectDB from './config/mongodb.js';

import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import wishlistRouter from './routes/wishlistRoute.js';
import orderRouter from './routes/orderRoute.js';
import contactRouter from './routes/contactRoute.js';


const app = express();
const port = process.env.PORT || 4000;


connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());


app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter); 
app.use('/api/wishlist', wishlistRouter);
app.use('/api/order', orderRouter);
app.use('/api/contact', contactRouter);

// API endpoint to test if the API is working
app.get('/', (req, res)=>{
    res.send("API Working")
})

// Starting the server and logging the port
app.listen(port, ()=> console.log('Server started on PORT : ' + port))
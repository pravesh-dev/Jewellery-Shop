// Loading environment variables
import 'dotenv/config';

// Importing necessary modules
import express from 'express';
import cors from 'cors';

// Importing database connection function
import connectDB from './config/mongodb.js';
// Importing Cloudinary connection function
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// Creating the Express app and setting the port
const app = express();
const port = process.env.PORT || 4000;

// Connecting to the database
connectDB();

console.log("Cloudinary API Key =", process.env.CLOUDINARY_API_KEY)

// Connecting to Cloudinary
connectCloudinary();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use(cors());

// API endpoint to test if the API is working
app.get('/', (req, res)=>{
    res.send("API Working")
})

app.use('/api/user', userRouter);
app.use('/api/product', productRouter)

// Starting the server and logging the port
app.listen(port, ()=> console.log('Server started on PORT : ' + port))
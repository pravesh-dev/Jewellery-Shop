// Importing necessary modules
import express from 'express';
import cors from 'cors';

// Loading environment variables
import 'dotenv/config';
// Importing database connection function
import connectDB from './config/mongodb.js';
// Importing Cloudinary connection function
import connnectCloudinary from './config/cloudinary.js';

// Creating the Express app and setting the port
const app = express();
const port = process.env.PORT || 4000;

// Connecting to the database
connectDB();
// Connecting to Cloudinary
connnectCloudinary();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use(cors());

// API endpoint to test if the API is working
app.get('/', (req, res)=>{
    res.send("API Working")
})

// Starting the server and logging the port
app.listen(port, ()=> console.log('Server started on PORT : ' + port))
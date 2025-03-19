// Importing the cloudinary library
import { v2 as cloudinary } from 'cloudinary';

// Function to connect to Cloudinary
const connnectCloudinary = async ()=>{
    // Configuring Cloudinary with environment variables
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
}

// Exporting the function to connect to Cloudinary
export default connnectCloudinary;
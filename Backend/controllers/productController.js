import { v2 as cloudinary } from "cloudinary"; // Importing Cloudinary for image upload
import productModel from "../models/productModel.js"; // Importing the product model

// Function to add product
const addProduct = async (req, res) => {
    try {
        const {id, name, title, description, price, onSale, discount, category, subCategory, bestSeller} = req.body; // Destructuring the product data from the request body

    const image1 = req.files.image1 && req.files.image1[0]; // Getting the first image file from the request
    const image2 = req.files.image2 && req.files.image2[0]; // Getting the second image file from the request
    const image3 = req.files.image3 && req.files.image3[0]; // Getting the third image file from the request
    const image4 = req.files.image4 && req.files.image4[0]; // Getting the fourth image file from the request

    // Filtering out any undefined images
    const images = [image1, image2, image3, image4].filter((item)=> {item !== undefined});

    // Uploading the images to Cloudinary and getting their secure URLs
    let imagesUrl = await Promise.all(
        images.map( async (item)=>{
            let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'})
            return result.secure_url;
        })
    )

    // Creating the product data object
    const productData = {
        id, name, title, description, price:Number(price), onSale: onSale === "true" ? true : false, discount:Number(discount), category, subCategory, bestSeller: bestSeller === "true" ? true : false, image: imagesUrl, date: Date.now()
    }

    // Creating a new product instance
    const product = new productModel(productData);
    // Saving the product to the database
    await product.save();

    // Sending a success response
    res.json({success: true, message: "Product added successfully!"});
    
    } catch (error) {
        // Sending an error response if there's an error
        res.json({success: false, message: error.message});
        console.log(error);
    }
}

// Function to list product
const listProducts = async (req, res) => {
    try {
        // Fetching all products from the database
        const products = await productModel.find({});
        // Sending a success response with the products
        res.json({success: true, products});
    } catch (error) {
        // Sending an error response if there's an error
        res.json({success: false, message: error.message})
        console.log(error)
    }
}

// Function for removing product
const removeProduct = async (req, res) => {
    try {
        // Removing a product from the database by its ID
        await productModel.findByIdAndDelete(req.body.id);
        // Sending a success response
        res.json({success: true, message: "Product removed successfully"});
    } catch (error) {
        // Sending an error response if there's an error
        res.json({success: false, message: error.message});
        console.log(error)
    }
}

// Function for single product info
const singleProduct = async (req, res) => {
    try {

        // Fetching a single product from the database by its ID
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        // Sending a success response with the product
        res.json({success: true, product});

    } catch (error) {
        // Sending an error response if there's an error
        res.json({success: true, message: error.message});
        console.log(error);
    }
}

// Exporting the product controller functions
export { addProduct,listProducts, removeProduct, singleProduct }
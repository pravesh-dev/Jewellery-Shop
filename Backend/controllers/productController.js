import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function to add product
const addProduct = async (req, res) => {
    try {
        const {name, title, description, price, onSale, discount, category, subCategory, bestSeller} = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];


    const images = [image1, image2, image3, image4].filter((item)=> {item !== undefined});

    let imagesUrl = await Promise.all(
        images.map( async (item)=>{
            let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'})
            return result.secure_url;
        })
    )

    const productData = {
        name, title, description, price:Number(price), onSale: onSale === "true" ? true : false, discount:Number(discount), category, subCategory, bestSeller: bestSeller === "true" ? true : false, image: imagesUrl, date: Date.now()
    }

    console.log(productData)

    const product = new productModel(productData);
    await product.save();

    res.json({success: true, message: "Product added successfully!"});
    
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(error);
    }
}

// Function to list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, products});
    } catch (error) {
        res.json({success: false, message: error.message})
        console.log(error)
    }
}

// Function for removing product
const removeProduct = async (req, res) => {
    try {
        const removedProduct = await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed successfully"});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(error)
    }
}

// Function for single product info
const singleProduct = async (req, res) => {
    try {
        
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product});

    } catch (error) {
        res.json({success: true, message: error.message});
        console.log(error);
    }
}

export { addProduct,listProducts, removeProduct, singleProduct }
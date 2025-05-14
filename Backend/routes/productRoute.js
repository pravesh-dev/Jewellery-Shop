import express from "express"; // Importing express for routing
import { addProduct, listProducts, singleProduct, removeProduct } from "../controllers/productController.js"; // Importing product controller functions
import upload from "../middleware/multer.js"; // Importing multer middleware for file uploads
import adminAuth from "../middleware/adminAuth.js"; // Importing admin authentication middleware

const productRouter = express.Router(); // Creating a new router for product routes

// Route for adding a product with admin authentication and file uploads
productRouter.post('/add', adminAuth ,upload.fields([{name: 'image1', maxCount: 1}, {name: 'image2', maxCount: 1}, {name: 'image3', maxCount: 1}, {name: 'image4', maxCount: 1}]) ,addProduct);
// Route for removing a product with admin authentication
productRouter.post('/remove', adminAuth , removeProduct);
// Route for getting a single product
productRouter.get('/single', singleProduct);
// Route for listing all products
productRouter.get('/list', listProducts);

export default productRouter; // Exporting the product router
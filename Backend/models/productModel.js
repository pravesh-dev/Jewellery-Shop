import mongoose from "mongoose"; // Importing mongoose for MongoDB operations

// Defining the schema for the product model
const productSchema = new mongoose.Schema({
    name: {type: String, required: true}, // Product's name, required
    description: {type: String, required: true}, // Product's description, required
    price: {type: Number, required: true}, // Product's price, required
    image: {type: Array, required: true}, // Product's image, required and stored as an array
    category: {type: String, required: true}, // Product's category, required
    subCategory: {type: String, required: true}, // Product's sub-category, required
    bestSeller: {type: Boolean}, // Flag indicating if the product is a best seller, optional
    date: {type: Number, required: true}, // Date of product creation, required
})

// Creating or retrieving the product model
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

// Exporting the product model
export default productModel;
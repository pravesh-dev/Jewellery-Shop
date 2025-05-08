import mongoose from "mongoose";

// Defining the schema for the product model
const productSchema = new mongoose.Schema({
    name: {type: String, required: true}, // Product name
    title: {type: String, required: true}, // Product title
    description: {type: String, required: true}, // Product description
    price: {type: Number, required: true}, // Product price
    onSale: {type: Boolean, required: true}, // Product on sale status
    discount: {type: Number, required: true}, // Product discount
    image: {type: Array, required: true}, // Product images
    category: {type: String, required: true}, // Product category
    subCategory: {type: String, required: true}, // Product sub-category
    bestSeller: {type: Boolean}, // Product best seller status
    date: {type: Number, required: true}, // Product creation date
})

// Creating or retrieving the product model
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

// Exporting the product model
export default productModel;
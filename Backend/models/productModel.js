import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    onSale: {type: Boolean, required: true},
    discount: {type: Number, required: true},
    image: {type: Array, required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    bestSeller: {type: Boolean},
    date: {type: Number, required: true},
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
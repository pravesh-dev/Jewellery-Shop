import mongoose from "mongoose"; // Importing mongoose for MongoDB operations

// Defining the schema for the user model
const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true}, // User's name
    email: {type: String, required: true, unique: true}, // User's email, required and unique
    phoneNumber: {type: Number, required: true},
    password: {type: String, required: true}, // User's password, required
    cartData: {type: Object, default: {}}, // User's cart data, default is an empty object
    wishlist: {type: Object, default: {}}, // User's wishlist data, default is an empty object
}, {minimize: false}) // Schema options to prevent MongoDB from removing empty objects

// Creating or retrieving the user model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// Exporting the user model
export default userModel;
import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Function to handle user login
const loginUser = async (req, res) => {
    // Implementation for user login
}

// Function to handle user registration
const registerUser = async (req, res) => {
    try {
        const { email, fullName, phoneNumber, password, confirmPassword } = req.body;

        // Checking user exists or not
        const userExists = await userModel.findOne({email});
        if(userExists){
            return res.json({success: false, message: "User already exists"})
        }

        // Validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Enter a valid email"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "Enter a strong password"})
        }

        // Hasing user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
        });

        const user = await newUser.save();

        const token = 

    } catch (error) {
        
    }
}

// Function to handle admin login
const adminLogin = async (req, res) => {
    // Implementation for admin login
}

// Exporting the functions for user and admin login, as well as user registration
export { loginUser, registerUser, adminLogin };
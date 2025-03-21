import userModel from "../models/userModel.js";

// Function to handle user login
const loginUser = async (req, res) => {
    // Implementation for user login
}

// Function to handle user registration
const registerUser = async (req, res) => {
    try {
        const { email, fullName, phoneNumber, password, confirmPassword } = req.body;

        const userExists = await userModel.findOne({email});

        if(userExists){
            return res.json({success: false, message: "User already exists"})
        }

    } catch (error) {
        
    }
}

// Function to handle admin login
const adminLogin = async (req, res) => {
    // Implementation for admin login
}

// Exporting the functions for user and admin login, as well as user registration
export { loginUser, registerUser, adminLogin };
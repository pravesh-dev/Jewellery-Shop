import express from 'express'; // Importing express for routing
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js'; // Importing user controller functions

const userRouter = express.Router(); // Creating a new router for user routes

// Registering routes for user actions
userRouter.post('/register', registerUser); // Route for user registration
userRouter.post('/login', loginUser); // Route for user login
userRouter.post('/admin', adminLogin); // Route for admin login

export default userRouter; // Exporting the user router
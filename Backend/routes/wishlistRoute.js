import express from "express";
import authUser from "../middleware/auth.js";
import { addToWishlist, IsWishlisted, removeFromWishlist } from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter.post('/add', authUser , addToWishlist);
wishlistRouter.post('/remove', authUser , removeFromWishlist);
wishlistRouter.post('/check', authUser , IsWishlisted);

export default wishlistRouter;
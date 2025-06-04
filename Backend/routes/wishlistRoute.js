import express from "express";
import authUser from "../middleware/auth";
import { addToWishlist, removeFromWishlist } from "../controllers/wishlistController";
import { isWhitelisted } from "validator";

const wishlistRouter = express.Router();

wishlistRouter.post('/add', authUser , addToWishlist);
wishlistRouter.post('/remove', authUser , removeFromWishlist);
wishlistRouter.post('/isWishlist', authUser , isWhitelisted);

export default wishlistRouter;
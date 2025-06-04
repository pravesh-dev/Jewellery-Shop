import userModel from "../models/userModel.js";


// Add product to wishlist
const addToWishlist = async (req,res) => {

    try {
        
        const { userId, itemId } = req.body;

        const userData = await userModel.findById(userId);
        const wishlist = userData.wishlist;

        if(wishlist[itemId]) {
            wishlist[itemId] += 1
        } else {
            wishlist[itemId] = 1
        }

        await userModel.findByIdAndUpdate(userId, {wishlist});
        res.json({success: true, message: "Added To Wishlist"});

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

// Remove product from wishlist
const removeFromWishlist = async (rea,res) => {

}

// Check if product wishlisted
const IsWishlisted = async (rea,res) => {

}


export { addToWishlist, removeFromWishlist, IsWishlisted }
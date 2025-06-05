import userModel from "../models/userModel.js";

// Add product to wishlist
const addToWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    const wishlist = userData.wishlist;

    if (!wishlist.includes(itemId)) {
      wishlist.push(itemId);
    }

    await userModel.findByIdAndUpdate(userId, { wishlist });
    res.json({ success: true, message: "Added To Wishlist" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get user wishlist data
const getUserWishlist = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    const wishlist = userData.wishlist;

    res.json({ success: true, wishlist });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Remove product from wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    const wishlist = userData.wishlist;

    const updatedWishlist = wishlist.filter((item) => item !== itemId);

    await userModel.findByIdAndUpdate(userId, { wishlist: updatedWishlist });

    res.json({ success: true, message: "Item Removed From Wishlist" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { addToWishlist, getUserWishlist, removeFromWishlist };

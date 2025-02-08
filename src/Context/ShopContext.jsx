import { createContext, useEffect, useState } from "react";
import { items } from "../Components/ProductsData";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "£";
  const stad_delivery_fee = 100;
  const fast_delivery_fee = 150;

  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([500, 60000]);

  // Sorting state
  const [sortOption, setSortOption] = useState("Relevant");

  // Load cart and wishlist from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Functions
  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const lessFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  // Wishlist Functions
  const addToWishlist = (itemId) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.includes(itemId)) {
        return [...prevWishlist, itemId];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id !== itemId));
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.includes(itemId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const value = {
    items,
    currency,
    stad_delivery_fee,
    fast_delivery_fee,
    category,
    setCategory,
    subCategory,
    setSubCategory,
    priceRange,
    setPriceRange,
    sortOption,
    setSortOption,
    cartItems,
    addToCart,
    lessFromCart,
    removeFromCart,
    clearCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isItemInWishlist,
    clearWishlist,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

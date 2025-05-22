// Import necessary modules
import { createContext, useEffect, useState } from "react";
import { items } from "../Components/ProductsData";
import axios from 'axios';

// Create a new context for the shop
export const ShopContext = createContext();

// Provider component for the shop context
const ShopContextProvider = ({ children }) => {

  const [products, setProduts] = useState([])

  // Define currency and delivery fees
  const currency = "£";
  const stad_delivery_fee = 100;
  const fast_delivery_fee = 150;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl)

  // Define state for category, subcategory and price range
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([500, 60000]);

  // Define state for sorting option
  const [sortOption, setSortOption] = useState("Relevant");

  // Saved cart data
  const [cartData, setCartData] = useState([]);

  // Order checkout data
  const [checkout, setCheckout] = useState({});

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

  const getProductsData = async () => {

    try {
      
      const response = await axios.get(backendUrl + 'api/product/list');
      console.log(response.data)

    } catch (error) {
      
    }

  }

  useEffect(()=>{
    getProductsData()
  }, [])

  // Define the value object to be passed to the context provider
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
    cartData,
    setCartData,
    checkout,
    setCheckout,
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
    backendUrl,
  };

  // Return the provider with the value and children
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Export the provider as the default export
export default ShopContextProvider;

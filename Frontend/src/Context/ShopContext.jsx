// Import necessary modules
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create a new context for the shop
export const ShopContext = createContext();

// Provider component for the shop context
const ShopContextProvider = ({ children }) => {
  const [products, setProduts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || "");

  // Define currency and delivery fees
  const currency = "£";
  const stad_delivery_fee = 100;
  const fast_delivery_fee = 150;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart && savedCart !== "undefined" ? JSON.parse(savedCart) : {};
  } catch (error) {
    console.error("Invalid cartItems in localStorage:", error);
    return {};
  }
});


  const [wishlist, setWishlist] = useState(() => {
  try {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist && savedWishlist !== "undefined" ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error("Invalid wishlist in localStorage:", error);
    return [];
  }
});


  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Functions
  const addToCart = async (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));

    if(token) {
      try {

        const response = await axios.post(backendUrl + 'api/cart/add', {itemId}, {headers:{token}});

        if(response.data.success) {
          toast.success(response.data.message)
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }

  };

  const lessFromCart = async (itemId) => {
  const newQuantity = (cartItems[itemId] || 0) - 1;

  setCartItems((prevCart) => {
    const updatedCart = { ...prevCart };
    if (newQuantity > 0) {
      updatedCart[itemId] = newQuantity;
    } else {
      delete updatedCart[itemId];
    }
    return updatedCart;
  });

  if (token) {
    try {
      await axios.post(
        backendUrl + "api/cart/update",
        { itemId, quantity: newQuantity },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
};



  const removeFromCart = async (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemId];
      return updatedCart;
    });

    if (token) {
    try {
      await axios.post(
        backendUrl + "api/cart/update",
        { itemId, quantity: 0 },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  };

  const clearCart = () => {
    setCartItems({});
  };

  // Wishlist Functions
  const addToWishlist = async (itemId) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.includes(itemId)) {
        return [...prevWishlist, itemId];
      }
      return prevWishlist;
    });
    
    if(token) {
      try {
        
        const response = await axios.post(backendUrl + 'api/wishlist/add', {itemId}, {headers: {token}});

        if(response.data.success) {
          toast.success(response.data.message)
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }

  };

  const removeFromWishlist = async (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id !== itemId));

    if(token) {

      try {
        
        const response = await axios.post(backendUrl + 'api/wishlist/remove', {itemId}, {headers: {token}});

        if(response.data.success) {
          toast.success(response.data.message);
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }

    }

  };

  const isItemInWishlist = (itemId) => {
    return wishlist.includes(itemId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "api/product/list");

      if (response.data.success) {
        setProduts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  // Get user cart data from database
  const getUserCart = async ( token ) => {

    try {
      
      const response = await axios.post(backendUrl + 'api/cart/get', {}, {headers: {token}});
      if(response.data.success) {
        setCartItems(response.data.cartData);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  // Get user wishlist data from database
  const  getUserWishlist = async ( token ) => {

    try {
      
      const response = await axios.post(backendUrl + 'api/wishlist/get', {}, {headers: {token}});

      if(response.data.success) {
        setWishlist(response.data.wishlist)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  useEffect(() => {
    getProductsData();
  }, []);

  // chat gpt said to remove this
  useEffect(() => {
    if(token && localStorage.getItem('token')){
        getUserCart(localStorage.getItem('token'))
        getUserWishlist(localStorage.getItem('token'))
    }
  }, [token]);

  // Define the value object to be passed to the context provider
  const value = {
    products,
    token,
    setToken,
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
    setCartItems,
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

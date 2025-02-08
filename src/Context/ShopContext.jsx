import { createContext, useEffect, useState } from "react";
import { items } from "../Components/ProductsData";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '£';
    const stad_delivery_fee = 100;
    const fast_delivery_fee = 150;

    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [priceRange, setPriceRange] = useState([500, 60000]);

    // Sorting state
    const [sortOption, setSortOption] = useState("Relevant");

    // Load cart items from localStorage (optional improvement)
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    // Save cart to localStorage whenever it changes (optional)
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prevCart) => ({
            ...prevCart,
            [itemId]: (prevCart[itemId] || 0) + 1,
        }));
    };

    // Function to remove an item from the cart (decrement quantity)
    const removeFromCart = (itemId) => {
        setCartItems((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId]; // Remove item if quantity is 0
            }
            return updatedCart;
        });
    };

    // Function to clear the entire cart
    const clearCart = () => {
        setCartItems({});
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
        removeFromCart,
        clearCart,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

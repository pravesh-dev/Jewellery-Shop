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

    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] =  1;
        }
        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
    }, [cartItems])

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
        setSortOption, // Expose function to update sorting
        cartItems,
        addToCart,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

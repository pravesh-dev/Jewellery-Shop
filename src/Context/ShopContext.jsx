import { createContext } from "react";
import { items } from "../Components/ProductsData";

export const ShopContext = createContext();

const ShopContextProvider = ({children}) =>{

    const currency = '£';
    const stad_delivery_fee = 100;
    const fast_delivery_fee = 150;

    const value = {
        items, currency, stad_delivery_fee, fast_delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
import React, { useContext, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import { ShopContext } from "../../Context/ShopContext";

function OrderSummaryMobile() {
  const { cartData, setCartData, items, currency, cartItems } = useContext(ShopContext);
  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = items.find((item) => item.id === parseInt(itemId));
        if (product) {
          tempData.push({
            ...product,
            quantity: cartItems[itemId], // Fetching actual quantity from context
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, items]);
  return (
    <div className="min-h-screen pt-20 px-2">
      <OrderSummary cartData={cartData} currency={currency} />
    </div>
  );
}

export default OrderSummaryMobile;

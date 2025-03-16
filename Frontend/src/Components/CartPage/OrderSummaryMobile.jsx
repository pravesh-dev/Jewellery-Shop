import React, { useContext, useEffect } from "react"; // Importing React hooks and useContext
import OrderSummary from "./OrderSummary"; // Importing OrderSummary component
import { ShopContext } from "../../Context/ShopContext"; // Importing ShopContext for accessing context

// Function component for OrderSummaryMobile
function OrderSummaryMobile() {
  // Destructuring context values
  const { cartData, setCartData, items, currency, cartItems } = useContext(ShopContext);

  // Effect to update cartData based on cartItems and items
  useEffect(() => {
    const tempData = []; // Temporary array to hold updated cart data

    // Looping through cartItems to find corresponding items and update quantity
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = items.find((item) => item.id === parseInt(itemId));
        if (product) {
          // Adding product to tempData with updated quantity from cartItems
          tempData.push({
            ...product,
            quantity: cartItems[itemId], // Fetching actual quantity from context
          });
        }
      }
    }

    // Updating cartData with tempData
    setCartData(tempData);
  }, [cartItems, items]);

  // JSX for rendering OrderSummary component
  return (
    <div className="min-h-screen pt-20 px-2">
      <OrderSummary cartData={cartData} currency={currency} />
    </div>
  );
}

export default OrderSummaryMobile;

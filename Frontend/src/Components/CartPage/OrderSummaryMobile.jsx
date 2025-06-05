import { useContext, useEffect } from "react"; // Importing React hooks and useContext
import OrderSummary from "./OrderSummary"; // Importing OrderSummary component
import { ShopContext } from "../../Context/ShopContext"; // Importing ShopContext for accessing context

// Function component for OrderSummaryMobile
function OrderSummaryMobile() {
  // Destructuring context values
  const { cartData, setCartData, products, currency, cartItems } = useContext(ShopContext);

  // Effect to update cartData based on cartItems and items
  useEffect(() => {
    if (products.length === 0) return;
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products.find((item) => item._id.toString() === itemId.toString());
        if (product) {
          tempData.push({
            ...product,
            quantity: cartItems[itemId],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  // JSX for rendering OrderSummary component
  return (
    <div className="min-h-screen pt-20 px-2">
      <OrderSummary cartData={cartData} currency={currency} />
    </div>
  );
}

export default OrderSummaryMobile;

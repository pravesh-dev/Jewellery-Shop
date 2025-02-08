import React, { useContext, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi2";
import OrderSummary from "./OrderSummary";
import { ShopContext } from "../../Context/ShopContext";

function ShoppingCart() {
  const { items, currency, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

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
    <div className="w-full pt-24 px-2 grid grid-cols-11 lg:pt-32 xl:px-16 xl:grid-cols-12">
      <div className="col-span-7 xl:col-span-8">
        <h1 className="text-primary text-stroke-1 mb-1 font-bellefair text-[1.12rem] lg:text-[2rem]">
          Shopping Cart
        </h1>
        <div className="min-h-[83vh] border-t border-r border-[#D9D9D9] pt-5 lg:pt-10">
          <div className="grid grid-cols-7 mb-5 lg:gap-3 xl:grid-cols-8">
            <div className="col-span-4">
              <h2 className="text-[1rem] text-dark lg:text-[1.12rem] font-lora">
                Product Details
              </h2>
            </div>
            <div className="col-span-3 xl:col-span-4">
              <div className="grid grid-cols-3 gap-2 font-lora xl:px-10">
                <h3 className="text-[1rem] text-dark text-center lg:text-[1.12rem]">Quantity</h3>
                <h3 className="text-[1rem] text-dark text-center lg:text-[1.12rem]">Price</h3>
                <h3 className="text-[1rem] text-dark text-center lg:text-[1.12rem]">Total</h3>
              </div>
            </div>
          </div>

          {/* Display Cart Items */}
          {cartData.map((product) => {
            const totalPrice = product.onSale
              ? (product.price - product.price * (product.discount / 100)) * product.quantity
              : product.price * product.quantity;

            return (
              <div key={product.id} className="product_card1 grid grid-cols-7 lg:gap-3 xl:grid-cols-8">
                <div className="col-span-4 flex items-start gap-2 lg:gap-10">
                  <div className="w-[7.6rem] flex-shrink-0 h-[6.8rem] lg:w-[12rem] lg:h-[10.9rem] rounded-[5px] overflow-hidden">
                    <img src={product.image} className="w-full h-full object-cover" alt="product thumbnail" loading="lazy" />
                  </div>
                  <div className="font-bellefair pt-5 lg:space-y-1">
                    <h1 className="text-[1rem] leading-4 lg:leading-7 lg:text-[1.5rem]">{product.name}</h1>
                    <h3 className="font-Cormorant text-primary text-[0.72rem] italic lg:text-[1.12rem]">In stock</h3>
                    {product.onSale && (
                      <p>
                        <span className="font-lora text-[0.7rem] py-[0.13rem] mr-2 px-2 rounded-[0.23rem] text-accent bg-[#ff0000] lg:text-[1rem]">
                          {product.discount}% Off
                        </span>
                        <span className="font-bellefair text-dark text-[0.68rem] lg:text-[1rem]">Limited Time Deal</span>
                      </p>
                    )}
                    <div className="flex gap-2 lg:gap-5">
                      <button className="text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]">Remove</button>
                      <button className="text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]">Share</button>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 h-[6.8rem] grid content-start pt-5 grid-cols-3 gap-2 xl:px-10 xl:col-span-4">
                  <div className="flex justify-center items-start">
                    <div className="border-2 border-secondary rounded-full flex justify-center items-center text-sm px-2 gap-1 lg:text-[1.12rem] lg:px-4 lg:gap-2 lg:py-1">
                      <HiOutlineMinus onClick={() => removeFromCart(product.id)} />
                      <span>{product.quantity}</span>
                      <BsPlusLg onClick={() => addToCart(product.id)} />
                    </div>
                  </div>
                  <h3 className="text-[1rem] font-bellefair text-center lg:text-[1.12rem]">
                    {product.onSale ? (
                      <div className="flex flex-col -space-y-1">
                        <span>{currency} {product.price - product.price * (product.discount / 100)}</span>
                        <span className="line-through text-gray-600">{currency} {product.price}</span>
                      </div>
                    ) : (
                      <span>{currency} {product.price}</span>
                    )}
                  </h3>
                  <h3 className="font-bellefair text-center text-[1rem] lg:text-[1.12rem]">{currency} {totalPrice}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-4">
        <h1 className="text-primary text-stroke-1 font-bellefair mb-1 pl-5 text-[1.12rem] lg:text-[2rem] lg:pl-10">Order Summary</h1>
        <OrderSummary cartData={cartData} currency={currency} />
      </div>
    </div>
  );
}

export default ShoppingCart;

import React, { useContext, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi2";
import OrderSummary from "./OrderSummary";
import { ShopContext } from "../../Context/ShopContext";

function ShoppingCartMobile() {
  const { items, currency, cartItems, addToCart, lessFromCart, removeFromCart } = useContext(ShopContext);
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
    <div className="w-full pt-24 px-2 grid grid-cols-11">
      <div className="col-span-11">
        <h1 className="text-primary text-stroke-1 mb-1 font-bellefair text-[1.12rem]">
          Shopping Cart
        </h1>
        <div className="min-h-[83vh] border-t border-r border-[#D9D9D9] pt-5">
          {cartData.length > 0 ? (
            <div className="grid grid-cols-7 mb-5">
              <div className="col-span-4">
                <h2 className="text-[1rem] text-dark font-lora">
                  Product Details
                </h2>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-2 font-lora">
                  <h3 className="text-[1rem] text-dark text-center">Quantity</h3>
                  <h3 className="text-[1rem] text-dark text-center">Price</h3>
                  <h3 className="text-[1rem] text-dark text-center">Total</h3>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-dark font-lora text-[1.12rem]">
              Your cart is empty. Please add some products to your cart.
            </div>
          )}
          {/* Display Cart Items */}
          {cartData.map((product) => {
            const totalPrice = product.onSale
              ? (product.price - product.price * (product.discount / 100)) * product.quantity
              : product.price * product.quantity;

            return (
              <div key={product.id} className="mb-3 xl:mb-6 grid grid-cols-7">
                <div className="col-span-4 flex items-start gap-2">
                  <div className="w-[7.6rem] flex-shrink-0 h-[6.8rem] rounded-[5px] overflow-hidden">
                    <img src={product.image} className="w-full h-full object-cover" alt="product thumbnail" loading="lazy" />
                  </div>
                  <div className="font-bellefair pt-5">
                    <h1 className="text-[1rem] leading-4">{product.name}</h1>
                    <h3 className="font-Cormorant text-primary text-[0.72rem] italic">In stock</h3>
                    {product.onSale && (
                      <p>
                        <span className="font-lora text-[0.7rem] py-[0.13rem] mr-2 px-2 rounded-[0.23rem] text-accent bg-[#ff0000]">
                          {product.discount}% Off
                        </span>
                        <span className="font-bellefair text-dark text-[0.68rem]">Limited Time Deal</span>
                      </p>
                    )}
                    <div className="flex gap-2">
                      <button className="text-[#A0A0A0] text-[0.75rem]" onClick={() => removeFromCart(product.id)}>Remove</button>
                      <button className="text-[#A0A0A0] text-[0.75rem]">Share</button>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 h-[6.8rem] grid content-start pt-5 grid-cols-3 gap-2">
                  <div className="flex justify-center items-start">
                    <div className="border-2 border-secondary rounded-full flex justify-center items-center text-sm px-2 gap-1">
                      <HiOutlineMinus className="cursor-pointer" onClick={() => lessFromCart(product.id)} />
                      <span>{product.quantity}</span>
                      <BsPlusLg className="cursor-pointer" onClick={() => addToCart(product.id)} />
                    </div>
                  </div>
                  <h3 className="text-[1rem] font-bellefair text-center">
                    {product.onSale ? (
                      <div className="flex flex-col -space-y-1">
                        <span>{currency} {product.price - product.price * (product.discount / 100)}</span>
                        <span className="line-through text-gray-600">{currency} {product.price}</span>
                      </div>
                    ) : (
                      <span>{currency} {product.price}</span>
                    )}
                  </h3>
                  <h3 className="font-bellefair text-center text-[1rem]">{currency} {totalPrice}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartMobile;

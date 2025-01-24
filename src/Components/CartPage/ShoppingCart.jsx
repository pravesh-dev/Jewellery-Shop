import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi2";
import OrderSummary from "./OrderSummary";

function ShoppingCart({ items }) {
  const [product, setProduct] = useState(items[0]);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const totalPrice = product.onSale
    ? (product.price - product.price * (product.discount / 100)) * count
    : product.price * count;

  return (
    <div className="w-full min-h-screen pt-20 px-2 grid grid-cols-11">
      <div className="col-span-7">
        <h1 className="text-primary text-stroke-1 font-bellefair text-[2rem]">
          Shopping Cart
        </h1>
        <div className="">
          <div className="bg-red-300 grid grid-cols-7">
            <div className="col-span-4 space-y-6 lg:space-y-10 border border-primary">
              <h2 className="text-[0.75rem] text-dark lg:text-[1.12rem] font-lora">
                Product Details
              </h2>
              <div className="flex items-start gap-2 lg:gap-10">
                <div className="w-[7.6rem] flex-shrink-0 h-[6.8rem] lg:w-[12rem] lg:h-[10.9rem] rounded-[5px] overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                    alt="product thumbnail"
                    loading="lazy"
                  />
                </div>
                <div className="font-bellefair pt-5 space-y-2 lg:space-y-6 lg:pt-10">
                  <h1 className="text-[1rem] leading-4 lg:leading-7 lg:text-[1.5rem]">
                    {product.name}
                  </h1>
                  <h3 className="font-Cormorant text-primary text-[0.72rem] italic lg:text-[1.12rem]">
                    In stoke
                  </h3>
                  {product.onSale && (
                    <p>
                      <span className="font-lora text-[0.7rem] py-[0.13rem] px-3 rounded-[0.23rem] text-accent bg-[#ff0000] lg:text-[1rem]">
                        {product.discount}% Off
                      </span>
                      <span className="font-bellefair text-dark">
                        Limited Time Deal
                      </span>
                    </p>
                  )}
                  <div className="flex gap-2 lg:gap-5">
                    <button className="text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]">
                      Remove
                    </button>
                    <button className="text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 space-y-6 lg:space-y-10 border border-primary">
              <div className="grid grid-cols-3 gap-2 font-lora">
                <h3 className="text-[0.7rem] text-dark text-center lg:text-[1.12rem]">
                  Quantity
                </h3>
                <h3 className="text-[0.7rem] text-dark text-center lg:text-[1.12rem]">
                  Price
                </h3>
                <h3 className="text-[0.7rem] text-dark text-center lg:text-[1.12rem]">
                  Total
                </h3>
              </div>
              <div className="h-[6.8rem] grid content-start pt-5 grid-cols-3 gap-2 lg:pt-10">
                <div className="flex justify-center items-start">
                  <div className="border-2 border-secondary rounded-full flex justify-center items-center text-sm px-3 gap-2">
                    <HiOutlineMinus onClick={handleDecrement} />
                    <span>{count}</span>
                    <BsPlusLg onClick={handleIncrement} />
                  </div>
                </div>
                <h3 className="text-[1rem] font-bellefair text-center lg:text-[1.12rem]">
                  {product.onSale ? (
                    <div className="flex flex-col -space-y-1">
                      <span>
                        ${" "}
                        {product.price -
                          product.price * (product.discount / 100)}
                      </span>
                      <span className="line-through text-gray-600">
                        $ {product.price}
                      </span>
                    </div>
                  ) : (
                    <span>$ {product.price}</span>
                  )}
                </h3>
                <h3 className="font-bellefair text-center text-[1rem] lg:text-[1.12rem]">
                  $ {totalPrice}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <h1 className="text-primary text-stroke-1 font-bellefair text-[2rem]">Order Summary</h1>
        <OrderSummary product={product} count={count} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default ShoppingCart;

import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

function OrderSummary({ product, count, totalPrice }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Standard Delivery - $ 100.00  "
  );

  const options = [
    "Standard Delivery - $ 100.00  ",
    "Fast Delivery - $ 300.00",
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".relative")) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const shippingCost = selectedOption.split("-")[1].trim().split("$")[1].trim();
  const totalCost = parseFloat(totalPrice) + parseFloat(shippingCost);

  return (
    <div className="font-lora border-t border-[#D9D9D9]">
      <div>
        <span>Items {count}</span>
        <h2>$ {totalPrice}</h2>
      </div>
      <h2>Shipping Charges</h2>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-300 text-black text-lg px-2 py-1 rounded-sm flex items-center justify-between gap-3 font-bellefair"
        >
          {selectedOption}{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </button>
        {isOpen && (
          <div className="w-max absolute top-10 z-20 bg-white text-dark shadow-md rounded-md">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className="px-7 py-1 hover:bg-gray-200 font-bellefair"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <h2>Promo Code</h2>
      <input type="text" className="font-bellefair" placeholder="Enter your code" />
      <button className="uppercase">APPLY</button>
      <div>
        <span>Total Cost</span>
        <h2>$ {totalCost.toFixed(2)}</h2>
      </div>
      <button className="uppercase">Checkout</button>
    </div>
  );
}

export default OrderSummary;

import { useState, useEffect, useContext } from "react"; // Importing React hooks and useContext
import { IoIosArrowDown } from "react-icons/io"; // Importing IoIosArrowDown icon for dropdown
import { ShopContext } from "../../Context/ShopContext"; // Importing ShopContext for accessing context
import { useNavigate } from "react-router-dom"; // Importing Link and useNavigate for routing

// Function component for OrderSummary
function OrderSummary({ cartData, currency }) {
  // Destructuring context values
  const { stad_delivery_fee, fast_delivery_fee, setCheckout } = useContext(ShopContext);
  // State for dropdown toggle and selected option
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    `Standard Delivery - ${currency} ${stad_delivery_fee}.00  `
  );

  // Options for delivery dropdown
  const options = [
    `Standard Delivery - ${currency} ${stad_delivery_fee}.00  `,
    `Fast Delivery - ${currency} ${fast_delivery_fee}.00`,
  ];

  // Effect for handling outside click on dropdown
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

  // Function to calculate total price of items in cart
  const calculateTotalPrice = () => {
    return cartData.reduce((acc, item) => {
      const price = item.onSale ? item.price - item.price * (item.discount / 100) : item.price;
      return acc + price * item.quantity;
    }, 0);
  };

  // Calculating total price, shipping cost, and total cost
  const totalPrice = calculateTotalPrice();
  const shippingCost = selectedOption.split("-")[1].trim().split(currency)[1].trim();
  const totalCost = parseFloat(totalPrice) + parseFloat(shippingCost);
  // Using useNavigate for navigation
  const Navigate = useNavigate();

  // Function to handle checkout
  const handleCheckout = () => {
    setCheckout({
      totalPrice: totalPrice.toFixed(2),
      shippingCost: shippingCost,
      totalCost: totalCost.toFixed(2),
      deliveryOption: selectedOption.split("-")[0].trim(),
    });
    setTimeout(() => {
      Navigate('/place-order')
    }, 600);
  };

  // JSX for OrderSummary component
  return (
    <div className="w-full font-lora md:border-t border-[#D9D9D9] pt-5 md:pl-5 lg:pl-10 lg:pt-10">
      <div className="flex justify-between text-[1rem] text-stroke-xs mb-6 lg:text-[1.12rem] lg:mb-8">
        <span className="">Items {cartData.length}</span>
        <h2 className="">{currency} {totalPrice.toFixed(2)}</h2>
      </div>
      <h2 className="text-[1rem] text-stroke-xs mb-3 lg:text-[1.12rem] lg:mb-8">Shipping Charges</h2>
      <div className="relative w-full mb-6 lg:mb-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-black bg-white text-[1rem] px-5 py-2 rounded-sm flex items-center justify-between gap-3 font-bellefair lg:text-[1.12rem]"
        >
          {selectedOption}{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </button>
        {isOpen && (
          <div className="w-full absolute top-10 z-20 bg-white text-dark shadow-md rounded-sm">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className="px-7 py-1 hover:bg-gray-200 font-bellefair lg:text-[1.12rem]"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <h2 className="text-[1rem] text-stroke-xs mb-3 lg:text-[1.12rem] lg:mb-8">Promo Code</h2>
      <input
        type="text"
        className="font-bellefair bg-white w-full px-3 text-dark placeholder:text-dark py-2 border-none outline-none mb-6 lg:text-[1.12rem] lg:mb-10 lg:pl-7"
        placeholder="Enter your code"
      />
      <button className="uppercase font-bellefair text-[1rem] tracking-wider rounded-[0.3rem] px-4 pb-1 pt-2 text-accent bg-secondary mb-6 lg:text-[1.12rem] lg:mb-10">APPLY</button>
      <div className="flex justify-between text-[1rem] text-stroke-xs mb-6 lg:text-[1.12rem]">
        <span>Total Cost</span>
        <h2>{currency} {totalCost.toFixed(2)}</h2>
      </div>
      <button onClick={handleCheckout} className="uppercase w-full block text-center text-[1.2rem] font-bellefair tracking-wider rounded-[0.3rem] pb-1 pt-2 text-accent text-stroke-xs bg-secondary duration-300 hover:bg-[#B0890A] mb-6 lg:pb-2 lg:pt-3 lg:text-[1.5rem]">Checkout</button>
    </div>
  );
}

export default OrderSummary;

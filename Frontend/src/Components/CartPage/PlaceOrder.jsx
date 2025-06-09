import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import stripe from "../../Assets/stripe.png";
import razorpay from "../../Assets/razorpay.png";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const {
    checkout,
    currency,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    products,
  } = useContext(ShopContext);
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // Redirect to cart page if checkout data is missing
  useEffect(() => {
    if (!checkout.totalCost) {
      navigate("/user-cart");
    }
  }, [checkout, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        if (cartItems[items] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItems[items];
            orderItems.push(itemInfo);
          }
        }
      }

      let orderData = {
        items: orderItems,
        address: formData,
        amount: checkout.totalCost,
      };

      switch (method) {
        // API calls for COD
        case "cod":
          const response = await axios.post(backendUrl + 'api/order/place', orderData, {headers: {token}});

          if(response.data.success){
            toast.success(response.data.message);
            setCartItems({});
            navigate('/orders')
          }else{
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full min-h-screen pt-24 px-2 md:flex md:justify-between lg:gap-2 lg:pt-32 lg:px-10 xl:px-32"
    >
      {/* Delivery Form */}
      <div className="mb-10 md:w-80 lg:w-[30rem]">
        <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem]">
          Delivery information —
        </h2>
        <div className="space-y-2 font-bellefair lg:space-y-5">
          <div className="flex w-full space-x-2 lg:space-x-5">
            <input
              className="w-1/2 h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
              value={formData.firstName}
              onChange={handleInputChange}
              name="firstName"
              type="text"
              placeholder="First name"
              required
              autoComplete="off"
            />
            <input
              className="w-1/2 h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
              value={formData.lastName}
              onChange={handleInputChange}
              name="lastName"
              type="text"
              placeholder="Last name"
              required
              autoComplete="off"
            />
          </div>
          <input
            className="w-full h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Email address"
            required
            autoComplete="off"
          />
          <input
            className="w-full h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
            value={formData.street}
            onChange={handleInputChange}
            name="street"
            type="text"
            placeholder="Street"
            required
            autoComplete="off"
          />
          <div className="flex w-full space-x-2 lg:space-x-5">
            <input
              className="w-1/2 h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
              value={formData.city}
              onChange={handleInputChange}
              name="city"
              type="text"
              placeholder="City"
              required
              autoComplete="off"
            />
            <input
              className="w-1/2 h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
              value={formData.state}
              onChange={handleInputChange}
              name="state"
              type="text"
              placeholder="State"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex w-full space-x-2 lg:space-x-5">
            <input
              className="w-1/2 h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
              value={formData.zipcode}
              onChange={handleInputChange}
              name="zipcode"
              type="text"
              placeholder="Zipcode"
              required
              autoComplete="off"
            />
            <input
              className="w-1/2 h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
              value={formData.country}
              onChange={handleInputChange}
              name="country"
              type="text"
              placeholder="Country"
              required
              autoComplete="off"
            />
          </div>
          <input
            className="w-full h-10 border border-black/20 outline-none text-[0.8rem] pl-2"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            type="number"
            placeholder="Phone"
            required
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-col md:w-96 lg:w-[30rem] md:pt-16">
        {/* Cart Totals */}
        <div>
          <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem]">
            Cart totals —
          </h2>
          <div className="flex justify-between items-center text-[0.8rem] font-mulish py-1 border-b">
            <h3>Subtotal</h3>
            <p>
              {checkout.totalPrice
                ? `${currency} ${checkout.totalPrice}`
                : "N/A"}
            </p>
          </div>
          <div className="flex justify-between items-center text-[0.8rem] font-mulish py-1 border-b">
            <h3>Shipping Fee</h3>
            <p>
              {checkout.shippingCost
                ? `${currency} ${checkout.shippingCost}`
                : "N/A"}
            </p>
          </div>
          <div className="flex justify-between items-center text-[0.8rem] font-mulish font-semibold py-1">
            <h3>Total</h3>
            <p>
              {checkout.totalCost ? `${currency} ${checkout.totalCost}` : "N/A"}
            </p>
          </div>
        </div>

        {/* Payment Method */}
        <h2 className="text-primary uppercase text-stroke-1 mb-4 mt-5 font-bellefair text-[0.75rem] tracking-wider">
          Payment method —
        </h2>
        <div className="flex flex-col gap-2 items-start mb-5 sm:flex-row sm:gap-4">
          <div
            className="h-7 px-3 flex gap-4 items-center border"
            onClick={() => {
              setMethod("stripe");
            }}
          >
            <p
              className={`w-3 h-3 rounded-full border flex-shrink-0 ${
                method === "stripe" ? "bg-green-500" : ""
              }`}
            ></p>
            <img className="w-12" src={stripe} alt="stripe logo" />
          </div>
          <div
            className="h-7 px-3 flex gap-4 items-center border"
            onClick={() => {
              setMethod("razorpay");
            }}
          >
            <p
              className={`w-3 h-3 rounded-full border flex-shrink-0 ${
                method === "razorpay" ? "bg-green-500" : ""
              }`}
            ></p>
            <img className="w-12" src={razorpay} alt="razorpay logo" />
          </div>
          <div
            className="h-7 px-3 flex gap-4 items-center border"
            onClick={() => {
              setMethod("cod");
            }}
          >
            <p
              className={`w-3 h-3 rounded-full border flex-shrink-0 ${
                method === "cod" ? "bg-green-500" : ""
              }`}
            ></p>
            <p className="uppercase text-[0.6rem] font-mulish font-semibold">
              Cash on Delivery
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="uppercase font-mulish text-[0.8rem] px-4 py-2 bg-secondary text-accent self-end mb-10"
        >
          place order
        </button>
      </div>
    </form>
  );
}

export default PlaceOrder;

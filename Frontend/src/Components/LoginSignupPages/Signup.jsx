// Import necessary libraries and assets
import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import sideImage from "../../Assets/loginSignupPage/login-side-image.svg";
import name from "../../Assets/loginSignupPage/name.svg";
import user from "../../Assets/loginSignupPage/user.svg";
import call from "../../Assets/loginSignupPage/call.svg";
import lock from "../../Assets/loginSignupPage/lock.svg";
import { Link } from "react-router-dom";

// Define the Signup component
function Signup() {
  // Initialize state for form data and response message
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setResponseMessage("Passwords do not match.");
      setTimeout(() => setResponseMessage(""), 5000);
      return;
    }

    try {
      // Send signup request
      const response = await axios.post("https://jewellery.hexadefend.com/Backend/auth/signup.php", formData);
      setResponseMessage(response.data.message || "Signup successful!");
    } catch (error) {
      setResponseMessage("An error occurred during signup.");
      console.error("Signup error:", error);
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
  };

  // Render the Signup component
  return (
    <div className="w-full h-full pt-10 absolute top-0 left-0 font-mulish flex justify-center md:gap-10 lg:gap-20 xl:px-28 xl:justify-between">
      <form
        className="w-80 px-2 h-full flex flex-col justify-center lg:w-96 xl:ml-14 xl:w-auto"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-between px-3 mb-10 lg:mb-14 xl:justify-start xl:gap-16">
          <Link
            to="/login"
            className="text-gray-400 text-2xl border-b-2 border-gray-300 px-2 pb-1 lg:text-4xl lg:px-4 xl:text-[2.1rem] text-stroke-1 xl:pb-3 xl:px-6 xl:border-b-[3.5px]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-[#62DC7C] text-2xl border-b-2 border-[#62DC7C] px-2 pb-1 lg:text-4xl lg:px-4 xl:text-[2.1rem] text-stroke-1 xl:pb-3 xl:px-6 xl:border-b-[3.5px]"
          >
            Sign up
          </Link>
        </div>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-sm text-red-500">{responseMessage}</p>
        )}

        {/* Input Fields */}
        <div className="space-y-8 lg:space-y-12 xl:space-y-9">
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={name}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="name icon"
            />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={user}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="user icon"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={call}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="phone icon"
            />
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>

          {/* Password */}
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={lock}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="lock icon"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={lock}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="lock icon"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Re-Enter Password"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-[#009400] text-accent text-lg py-2 rounded-md lg:w-auto lg:px-10 lg:rounded-full xl:mt-12 xl:p-0 xl:w-[9.8rem] xl:h-[3.3rem] xl:text-[1.5rem]"
        >
          Signup
        </button>
      </form>
      <div className="hidden md:flex justify-center items-center">
        <img className="w-80 lg:w-[27rem] xl:w-[32rem]" src={sideImage} alt="image" />
      </div>
    </div>
  );
}

// Export the Signup component
export default Signup;

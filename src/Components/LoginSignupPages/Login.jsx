import React, { useState } from "react";
import axios from "axios";
import sideImage from "../../Assets/loginSignupPage/login-side-image.svg";
import user from "../../Assets/loginSignupPage/user.svg";
import lock from "../../Assets/loginSignupPage/lock.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login.php', formData);
      setResponseMessage(response.data.message || 'Login successful!');
      navigate('/')
    } catch (error) {
      setResponseMessage('An error occurred during login.');
      console.error('Login error:', error);
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      setResponseMessage('');
    }, 5000);
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 font-mulish flex justify-center md:gap-10 lg:gap-20 xl:px-28 xl:justify-between">
      <form
        className="w-80 px-2 h-full flex flex-col justify-center lg:w-96 xl:ml-14"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-between px-3 mb-10 lg:mb-14">
          <Link
            to="/login"
            className="text-[#62DC7C] text-2xl border-b-2 border-[#62DC7C] px-2 pb-1 lg:text-4xl lg:px-4"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-400 text-2xl border-b-2 border-gray-300 px-2 pb-1 lg:text-4xl lg:px-4"
          >
            Sign up
          </Link>
        </div>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-sm text-red-500">{responseMessage}</p>
        )}

        {/* Input Fields */}
        <div className="space-y-8 lg:space-y-12">
          {/* Email or Phone */}
          <div className="relative">
            <img
              src={user}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2"
              alt="user icon"
            />
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              placeholder="Email or phone number"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <img
              src={lock}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2"
              alt="user icon"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16"
            />
          </div>
        </div>

        <div className="lg:flex justify-between items-center">
          {/* Forgot Password */}
          <a
            href="#"
            className="text-[#62DC7C] mt-7 text-sm hover:underline hover:text-green-600"
          >
            Forgot your password?
          </a>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#009400] text-accent text-lg py-2 rounded-md lg:w-auto lg:px-10 lg:rounded-full"
          >
            Login
          </button>
        </div>
      </form>
      <div className="hidden md:flex justify-center items-center">
        <img className="w-80 lg:w-[27rem]" src={sideImage} alt="image" />
      </div>
    </div>
  );
}

export default Login;

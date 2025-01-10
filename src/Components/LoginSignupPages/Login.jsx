import React from "react";
import sideImage from "../../Assets/login-side-image.svg";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="w-[350px] p-6 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex justify-between mb-8">
          <button className="text-green-600 text-2xl font-bold border-b-2 border-green-500">
            Login
          </button>
          <button className="text-gray-400 text-2xl font-bold border-b-2 border-gray-300">
            Sign up
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          {/* Email or Phone */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full pl-10 py-3 rounded-full border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-500 bg-green-100"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 py-3 rounded-full border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-500 bg-green-100"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="mt-4">
          <a
            href="#"
            className="text-green-500 text-sm hover:underline hover:text-green-600"
          >
            Forgot your password?
          </a>
        </div>

        {/* Login Button */}
        <div className="mt-6">
          <button className="w-full bg-green-600 text-white text-lg py-3 rounded-full hover:bg-green-700 transition duration-200">
            Login
          </button>
        </div>
      </div>
      <div className="hidden"></div>
    </div>
  );
}

export default Login;

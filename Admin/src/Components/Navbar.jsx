import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-4 lg:py-5">
      {/* <p className="flex items-center"> */}
      {/* <img className="w-14 lg:w-20" src={logo} alt="logo image" /> */}
      <h1 className="mulish uppercase text-xl lg:text-2xl">joyería</h1>
      {/* </p> */}
      <button
        className={`px-5 py-2 rounded-full bg-gray-600 hover:bg-gray-800 cursor-pointer duration-300 text-white text-center tracking-[1px] text-xs sm:text-sm sm:px-7`}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

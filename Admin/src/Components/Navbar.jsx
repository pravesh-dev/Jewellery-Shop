import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-4">
      <img className="w-16 lg:w-20" src={logo} alt="logo image" />
      <button
        className={`px-5 py-2 rounded-full bg-gray-600 duration-300 text-white text-center tracking-[1px] text-xs sm:text-sm sm:px-7`}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

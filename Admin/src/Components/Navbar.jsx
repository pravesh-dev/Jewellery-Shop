import React from "react";

const Navbar = ({setToken}) => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-4 lg:py-5">
      <h1 className="mulish uppercase text-xl lg:text-2xl">joyería</h1>
      <button
      onClick={()=>setToken('')}
        className={`px-5 py-2 rounded-full bg-gray-600 hover:bg-gray-800 cursor-pointer duration-300 text-white text-center tracking-[1px] text-xs sm:text-sm sm:px-7`}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

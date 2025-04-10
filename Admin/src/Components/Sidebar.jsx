import React from "react";
import { NavLink } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsCalendarCheck } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-1">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-sm text-gray-900 mulish">
        <NavLink
          className="flex items-center gap-3 duration-300 border border-r-0 border-gray-300 px-3 py-2 "
          to="/add"
        >
          <IoAddCircleOutline className="text-xl" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 duration-300 border border-r-0 border-gray-300 px-3 py-2 "
          to="/list"
        >
          <BsCalendarCheck className="text-xl" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 duration-300 border border-r-0 border-gray-300 px-3 py-2 "
          to="/order"
        >
          <BsCalendarCheck className="text-xl" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

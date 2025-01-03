import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "/logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  return (
    <header className="w-full flex justify-between items-center py-5 px-1 md:px-3 lg:px-20 fixed top-0 left-0 backdrop-blur-sm z-[99] text-dark">
      <div className="flex items-center">
        <img alt="Website Logo" className="w-14 md:w-10 lg:w-12" src={Logo} />
        <div className="flex flex-col leading-4">
          <span className="text-[1rem] text-primary md:text-xl lg:text-2xl uppercase font-bellefair">
            Hexa defend
          </span>
          <span className="text-[0.65rem] md:text-[0.55rem] lg:text-[0.55rem] text-dark capitalize font-mulish">
            Top Quality is Our Priority
          </span>
        </div>
      </div>
      <nav
        className={`flex flex-col text-white md:text-black md:flex-row bg-neutral-900 md:bg-transparent w-80 py-20 gap-5 items-center fixed top-0 h-screen md:static md:w-auto md:gap-7 lg:gap-10 xl:gap-16 md:text-sm lg:text-base md:h-auto md:py-0 ${
          isMenuOpen ? "left-0" : "-left-full"
        } duration-150 font-poppins z-[99]`}
      >
        <Link
          className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
            location.pathname === "/"
              ? "text-secondary"
              : "hover:text-secondary"
          } tracking-[1px] border-b-2 ${
            location.pathname === "/"
              ? "border-secondary"
              : "border-transparent"
          } md:w-auto md:py-0 md:bg-transparent md:border-none`}
          to="/"
        >
          HOME
        </Link>
        <Link
          className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
            location.pathname === "/about"
              ? "text-secondary"
              : "hover:text-secondary"
          } tracking-[1px] border-b-2 ${
            location.pathname === "/about"
              ? "border-secondary"
              : "border-transparent"
          } md:w-auto md:py-0 md:bg-transparent md:border-none`}
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
            location.pathname === "/booking"
              ? "text-secondary"
              : "hover:text-secondary"
          } tracking-[1px] border-b-2 ${
            location.pathname === "/booking"
              ? "border-secondary"
              : "border-transparent"
          } md:w-auto md:py-0 md:bg-transparent md:border-none`}
          to="/booking"
        >
          SERVICE
        </Link>
        <Link
          className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
            location.pathname === "/contact"
              ? "text-secondary"
              : "hover:text-secondary"
          } tracking-[1px] border-b-2 ${
            location.pathname === "/contact"
              ? "border-secondary"
              : "border-transparent"
          } md:w-auto md:py-0 md:bg-transparent md:border-none`}
          to="/contact"
        >
          CONTACT US
        </Link>
        <div className="flex gap-5 absolute top-4 left-2 md:static md:gap-2">
          <button className="text-xl bg-[#c095691b] py-2 px-4 text-accent md:text-dark md:bg-transparent md:p-0">
            <FiHeart />
          </button>
          <button className="text-xl bg-[#c095691b] py-2 px-4 text-accent md:text-dark md:bg-transparent md:p-0">
            <AiOutlineSearch />
          </button>
          <button className="text-xl bg-[#c095691b] py-2 px-4 text-accent md:text-dark md:bg-transparent md:p-0">
            <GiShoppingCart />
          </button>
        </div>
        <Link
          className={`w-full py-3 bg-accent/20 text-accent text-center nav_items tracking-[1px] md:text-dark md:w-auto md:py-0 md:bg-transparent`}
          to="/signup"
        >
          Signup
        </Link>
        <Link
          className={`w-full py-3 bg-secondary text-accent text-center nav_items tracking-[1px] md:w-auto md:py-1 md:px-3 md:rounded-full`}
          to="/login"
        >
          Login
        </Link>
        <button
          className="absolute top-3 right-3 text-lg w-10 h-10 rounded-md bg-red-600 text-accent md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          X
        </button>
      </nav>
      <button
        className="text-4xl px-3 py-1 rounded-sm text-dark md:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <HiOutlineMenuAlt3 />
      </button>
    </header>
  );
}

export default Header;

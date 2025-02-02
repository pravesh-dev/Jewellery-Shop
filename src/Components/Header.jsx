import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.svg";
import { useAuth } from "../Helper/Context/AuthContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerPosition, setHeaderPosition] = useState("top-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const { user, logout } = useAuth();

  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHeaderPosition("top-0");
        setIsScrollingUp(true);
      } else {
        // Scrolling down
        setHeaderPosition("-top-full");
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);

      // Hide header after delay when scrolling stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!isScrollingUp) {
          setHeaderPosition("-top-full");
        }
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isScrollingUp]);

  return (
    <header
      className={`w-full flex justify-between items-center py-2 px-1 md:px-3 md:py-4 lg:px-6 fixed left-0 bg-accent border-b border-black/10 z-[99] text-dark duration-1000 ${headerPosition}`}
    >
      <div className="flex items-center lg:w-[20%]">
        <img
          alt="Website Logo"
          loading="lazy"
          className="w-14 md:w-10 lg:w-16"
          src={Logo}
        />
        <div className="flex flex-col leading-4 md:leading-3">
          <span className="text-[1rem] text-primary md:text-[0.9rem] lg:text-base uppercase font-bellefair">
            Hexa defend
          </span>
          <span className="text-[0.65rem] md:text-[0.55rem] lg:text-[0.65rem] text-dark capitalize font-mulish">
            Top Quality is Our Priority
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col font-Cormorant text-white md:text-black md:flex-row bg-neutral-900 md:bg-transparent w-80 py-20 items-center fixed top-0 h-screen md:static gap-3 md:gap-10 md:w-[75%] md:justify-between lg:w-[70%] xl:w-[65%] md:text-sm lg:text-base md:h-auto md:py-0 ${
          isMenuOpen ? "left-0" : "-left-full"
        } duration-150 font-poppins z-[99]`}
      >
        <nav className="flex flex-col gap-3 w-full md:flex-row items-center md:gap-5 md:w-auto lg:gap-6 xl:gap-10">
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
              location.pathname === "/"
                ? "text-secondary md:text-primary"
                : "hover:text-secondary md:hover:text-primary"
            } tracking-[1px] border-b-2 ${
              location.pathname === "/"
                ? "border-secondary md:border-primary"
                : "border-transparent"
            } md:w-auto md:py-0 md:bg-transparent md:text-xs lg:text-base lg:leading-8`}
            to="/"
          >
            HOME
          </Link>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
              location.pathname.startsWith("/shop")
                ? "text-secondary md:text-primary"
                : "hover:text-secondary md:hover:text-primary"
            } tracking-[1px] border-b-2 ${
              location.pathname.startsWith("/shop")
                ? "border-secondary md:border-primary"
                : "border-transparent"
            } md:w-auto md:py-0 md:bg-transparent md:text-xs lg:text-base lg:leading-8`}
            to="/shop"
          >
            SHOP
          </Link>

          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
              location.pathname === "/blog"
                ? "text-secondary md:text-primary"
                : "hover:text-secondary md:hover:text-primary"
            } tracking-[1px] border-b-2 ${
              location.pathname === "/blog"
                ? "border-secondary md:border-primary"
                : "border-transparent"
            } md:w-auto md:py-0 md:bg-transparent md:text-xs lg:text-base lg:leading-8`}
            to="/blog"
          >
            BLOG
          </Link>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
              location.pathname === "/about"
                ? "text-secondary md:text-primary"
                : "hover:text-secondary md:hover:text-primary"
            } tracking-[1px] border-b-2 ${
              location.pathname === "/about"
                ? "border-secondary md:border-primary"
                : "border-transparent"
            } md:w-auto md:py-0 md:bg-transparent md:text-xs lg:text-base lg:leading-8`}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${
              location.pathname === "/contact"
                ? "text-secondary md:text-primary"
                : "hover:text-secondary md:hover:text-primary"
            } tracking-[1px] border-b-2 ${
              location.pathname === "/contact"
                ? "border-secondary md:border-primary"
                : "border-transparent"
            } md:w-auto md:py-0 md:bg-transparent md:text-xs lg:text-base lg:leading-8 flex-shrink-0`}
            to="/contact"
          >
            CONTACT US
          </Link>
        </nav>
        <div className="flex flex-col gap-3 w-full md:flex-row items-center md:gap-5 md:w-auto lg:gap-3 xl:gap-7">
          <div className="flex gap-5 absolute top-4 left-2 md:static md:gap-2 lg:mr-3 xl:gap-5 xl:mr-5">
            <button className="text-xl bg-[#c095691b] py-2 px-4 text-accent md:text-dark md:bg-transparent md:p-0 md:text-base lg:text-xl">
              <AiOutlineSearch />
            </button>
            <Link
              to="/wishlist"
              className={`text-xl bg-[#c095691b] py-2 px-4 ${
                location.pathname === "/wishlist"
                  ? "text-red-600"
                  : "text-accent md:text-dark"
              } md:bg-transparent md:p-0 md:text-base lg:text-xl`}
            >
              <FiHeart />
            </Link>
            <Link
              to="/user-cart"
              className={`text-xl bg-[#c095691b] py-2 px-4 ${
                location.pathname === "/user-cart"
                  ? "text-primary"
                  : "text-accent md:text-dark"
              } md:bg-transparent md:p-0 md:text-base lg:text-xl`}
            >
              <GiShoppingCart />
            </Link>
          </div>
          {
            user ? (
              <span>Welcome, {user.full_name}</span> ) : null }
              <button
            className={`w-full py-3 bg-red-600 text-accent text-center nav_items tracking-[1px] md:w-auto md:py-0 lg:text-base`}
            onClick={logout}
          >
            Logout
          </button>
              <Link
            className={`w-full py-3 bg-accent/20 text-accent text-center nav_items tracking-[1px] md:text-dark md:w-auto md:py-0 md:bg-transparent lg:text-base`}
            to="/signup"
          >
            Signup
          </Link>
          <Link
            className={`w-full py-3 bg-secondary hover:bg-[#B0890A] duration-300 text-accent text-center nav_items tracking-[1px] md:w-auto md:py-1 md:px-3 md:rounded-full lg:text-base lg:px-5`}
            to="/login"
          >
            Login
          </Link>
        </div>
        <button
          className="absolute top-3 right-3 text-lg w-10 h-10 rounded-md bg-red-600 text-accent md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          X
        </button>
      </div>
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

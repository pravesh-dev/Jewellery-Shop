import React, { useState, useEffect, useContext } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Import menu icon
import { FiHeart } from "react-icons/fi"; // Import heart icon for wishlist
import { AiOutlineSearch } from "react-icons/ai"; // Import search icon
import { GiShoppingCart } from "react-icons/gi"; // Import shopping cart icon
import { SlUser } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link, useLocation, and useNavigate from react-router-dom
import Logo from "/logo.svg"; // Import logo image
import { ShopContext } from "../Context/ShopContext";

function Header() {
  const { token, setToken, setCartItems, clearWishlist } = useContext(ShopContext); 

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [headerPosition, setHeaderPosition] = useState("top-0"); // State to manage header position
  const [lastScrollY, setLastScrollY] = useState(0); // State to keep track of last scroll position
  const [isScrollingUp, setIsScrollingUp] = useState(false); // State to determine scroll direction
  const navigate = useNavigate(); // Use navigate hook for navigation
  const [isprofile, setIsProfile] = useState(false);

  const location = useLocation(); // Use location hook to get current location

  useEffect(() => {
    // Close menu and popup on location change
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsProfile(false)
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


  // Function to handle logout
  const handleLogOut = async () => {
    navigate('/login');
    setToken('');
    localStorage.removeItem('token');
    setCartItems({})
    clearWishlist();
  }

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
          <div className="flex gap-5 absolute top-4 left-2 md:relative md:top-0 md:left-0 md:gap-2 lg:mr-3 xl:gap-5 xl:mr-5">
            <button className="text-xl bg-[#c095691b] py-2 px-3 text-accent md:text-dark md:bg-transparent md:p-0 md:text-base lg:text-xl">
              <AiOutlineSearch />
            </button>
            <Link
              to="/wishlist"
              className={`text-xl bg-[#c095691b] py-2 px-3 ${
                location.pathname === "/wishlist"
                  ? "text-red-600"
                  : "text-accent md:text-dark"
              } md:bg-transparent md:p-0 md:text-base lg:text-xl`}
            >
              <FiHeart />
            </Link>
            <Link
              to="/user-cart"
              className={`text-xl bg-[#c095691b] py-2 px-3 ${
                location.pathname === "/user-cart"
                  ? "text-primary"
                  : "text-accent md:text-dark"
              } md:bg-transparent md:p-0 md:text-base lg:text-xl`}
            >
              <GiShoppingCart />
            </Link>
            {
              token && <>
              <button
              className={`text-xl bg-[#c095691b] py-2 px-3 text-accent md:text-dark md:bg-transparent md:p-0 md:text-sm lg:text-base`}
              onClick={()=>{setIsProfile(!isprofile)}}
            >
              <SlUser />
            </button>
            <div className={`py-2 bg-[#0e0e0ee1] text-accent rounded-md text-sm font-mulish absolute -right-6 top-11 md:top-6 md:-right-5 md:text-xs md:bg-[#ebebeb] md:text-black ${isprofile ? 'flex' : 'hidden'} gap-2 flex-col md:gap-1 md:py-1 overflow-hidden`}>
              <Link className="w-full px-3 py-1 md:hover:bg-[#d2d2d2]">My Profile</Link>
              <p onClick={()=> navigate('/orders')} className="w-full px-3 py-1 md:hover:bg-[#d2d2d2]">Orders</p>
            </div>
              </>
            }
          </div>
          {
            token ? (
              <>
              {/* <span>{data.user.full_name}</span> */}
              <button
            className={`w-full py-3 bg-red-600 duration-300 text-accent text-center nav_items tracking-[1px] md:w-auto md:py-1 md:px-3 md:rounded-full lg:text-base lg:px-5`}
            onClick={handleLogOut}
            >
            Logout
          </button>
            </>
            ) : (
          <>
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
          </>
            )
          }
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

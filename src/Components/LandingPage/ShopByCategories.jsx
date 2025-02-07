// Import necessary libraries and assets
import React, { useContext, useEffect, useState } from "react";
import buttonUnderline from '../../Assets/LandingPage/Shopby/button-underline.svg'
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

// Define the ShopByCategories component
function ShopByCategories() {
const { items, currency } = useContext(ShopContext);

  // Initialize state for active tab, view all and navigation
  const [activeTab, setActiveTab] = useState("all");
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // UseEffect hook to filter items based on active tab
  useEffect(() => {
    const filteredItems = items.filter(
      (item) => activeTab === "all" || item.type === activeTab
    );
    setViewAll(filteredItems.length > 8);
  }, [activeTab]);

  // Function to render items based on type
  const renderItems = (type) => {
    const filteredItems = items.filter(
      (item) => type === "all" || item.subCategory.toLowerCase() === type.toLowerCase()
    );
    const displayedItems = !viewAll
      ? filteredItems
      : filteredItems.slice(0, 8);

    return displayedItems.map((item, index) => (
      <div
        key={index}
        className="product-card w-36 flex flex-col sm:w-64 lg:w-72 xl:w-[19.1rem] cursor-pointer"
        onClick={() => navigate(`/shop/${item.subCategory}/${item.name}/${item.id}`)}
      >
        <div className="w-full h-36 overflow-hidden sm:h-64 lg:h-72 xl:h-[14rem] relative lg:rounded-md">
            <img
              loading="lazy"
              src={item.image}
              className="w-full h-full object-cover"
              alt={item.name}
            />
            {
              item.onSale && (
                <span className="font-mulish bg-primary text-white absolute bottom-2 left-2 rounded-full px-2 text-xs sm:text-base sm:px-4 lg:left-4 lg:bottom-4">sale</span>
              )
            }
        </div>
        <h2 className="text-black text-[0.7rem] mt-1 sm:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.12rem]">
          {item.name}
        </h2>
        <h3 className="text-black text-[0.8rem] sm:text-[1.3rem] lg:text-[1.6rem] text-stroke-black xl:text-[1.12rem]">
          {item.onSale ? (
            <>
              <span className="text-black/50 line-through mr-1 text-[0.7rem] sm:text-[1.1rem] sm:mr-3 lg:text-[1.4rem] text-stroke-0 xl:text-[1.12rem]">{currency} {item.price}</span>
              <span>From {currency} {(item.price - (item.price * (item.discount / 100)))}</span>
            </>
          ) : (
            <span>{currency} {item.price}</span>
          )}
        </h3>
      </div>
    ));
  };

  // JSX for the ShopByCategories component
  return (
    <div
      className="w-full flex flex-col items-center gap-4 relative mt-5 lg:mt-10"
    >
      <div className="flex items-center lg:mb-7">
        {["all", "necklace", "ring", "earring", "statue", "chain"].map((tab) => (
          <button
            key={tab}
            className={`tab_buttons text-[0.6rem] px-[0.4rem] py-1 tracking-wider uppercase rounded-md ${
              activeTab === tab
                ? "bg-secondary text-accent"
                : "text-dark"
            } sm:text-sm sm:px-4 lg:text-[1.12rem] lg:px-6 lg:rounded-[1.9rem] lg:py-2 xl:py-3 cursor_pointer`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 lg:gap-10 xl:gap-12 xl:justify-start">
        {renderItems(activeTab)}
      </div>
      <Link to='/shop'
        className={`text-accent bg-secondary hover:bg-[#B0890A] font-bellefair px-5 py-1 text-sm rounded-full ${
          viewAll ? "block" : "hidden"
        } lg:text-lg lg:px-7 lg:py-2`}
      >
        View More <img src={buttonUnderline} className="w-14 -mt-1 mx-auto lg:w-20 lg:-mt-2" loading="lazy" alt="underline" />
      </Link>
    </div>
  );
}

// Export the ShopByCategories component
export default ShopByCategories;

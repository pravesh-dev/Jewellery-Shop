import React, { useEffect, useState } from "react";
import { items } from "./ShopByCategoriesData";
import buttonUnderline from '../../Assets/LandingPage/Shopby/button-underline.svg'
import { Link } from "react-router-dom";

function ShopByCategories() {

  const [activeTab, setActiveTab] = useState("all");
  const [viewAll, setViewAll] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => activeTab === "all" || item.type === activeTab
    );
    setViewAll(filteredItems.length > 6);
  }, [activeTab]);

  const renderItems = (type) => {
    const filteredItems = items.filter(
      (item) => type === "all" || item.type === type
    );
    const displayedItems = !viewAll
      ? filteredItems
      : filteredItems.slice(0, 6);

    return displayedItems.map((item, index) => (
      <div
        key={index}
        className="w-36 flex flex-col sm:w-64 lg:w-72 xl:w-[21.65rem]"
      >
        <div className="w-full h-36 overflow-hidden sm:h-64 lg:h-72 xl:h-[21.65rem] relative">
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
        <h2 className="text-black text-[0.7rem] mt-1 sm:text-[1.2rem] lg:text-[1.4rem]">
          {item.name}
        </h2>
        <h3 className="text-black text-[0.8rem] flex items-center gap-2 sm:text-[1.3rem] lg:text-[1.6rem] lg:gap-6">
          {item.onSale ? (
            <>
              <span className="text-black/50 line-through text-[0.6rem] sm:text-[1.1rem] lg:text-[1.4rem]">$ {item.price}</span>
              <span>$ {(item.price - (item.price * (item.discount / 100)))}</span>
            </>
          ) : (
            <span>$ {item.price}</span>
          )}
        </h3>
      </div>
    ));
  };

  return (
    <div
      className="w-full flex flex-col items-center gap-4 relative mt-5 lg:mt-10"
    >
      <div className="flex items-center lg:mb-7">
        {["all", "necklace", "ring", "earrings", "statue", "chain"].map((tab) => (
          <button
            key={tab}
            className={`tab_buttons text-xs px-[0.6rem] py-1 tracking-wider capitalize rounded-full ${
              activeTab === tab
                ? "bg-secondary text-accent"
                : "text-dark"
            } sm:text-lg sm:px-6 lg:text-2xl lg:px-8 cursor_pointer`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 lg:gap-10 xl:w-[70rem] xl:gap-10 xl:justify-start">
        {renderItems(activeTab)}
      </div>
      <Link to='/shop'
        className={`text-accent bg-secondary font-bellefair px-5 py-1 text-sm rounded-full ${
          viewAll ? "block" : "hidden"
        } lg:text-lg lg:px-7 lg:py-2`}
      >
        View More <img src={buttonUnderline} className="w-14 -mt-1 mx-auto lg:w-20 lg:-mt-2" loading="lazy" alt="underline" />
      </Link>
    </div>
  );
}

export default ShopByCategories;

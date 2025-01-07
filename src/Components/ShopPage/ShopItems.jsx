import React, { useEffect, useState } from "react";
import { items } from "../ShopByCategoriesData";
import buttonUnderline from '../../Assets/LandingPage/Shopby/button-underline.svg'
import { Link } from "react-router-dom";

function ShopItems() {

  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => true // Always true to show all items
    );
    setViewAll(filteredItems.length > 6);
  }, []);

  const renderItems = () => {
    const displayedItems = !viewAll
      ? items
      : items.slice(0, 6);

    return displayedItems.map((item, index) => (
      <div
        key={index}
        className="w-36 flex flex-col sm:w-64 md:w-60 xl:w-[20vw]"
      >
        <div className="w-full h-36 overflow-hidden sm:h-64 md:h-60 xl:h-[20vw] relative">
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
        <h2 className="text-black text-[0.7rem] mt-1 sm:text-[1.2rem] xl:text-[1.4rem]">
          {item.name}
        </h2>
        <h3 className="text-black text-[0.8rem] flex items-center gap-2 sm:text-[1.3rem] xl:text-[1.6rem] lg:gap-6">
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
      <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 md:gap-3 lg:justify-between xl:gap-y-10">
        {renderItems()}
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

export default ShopItems;

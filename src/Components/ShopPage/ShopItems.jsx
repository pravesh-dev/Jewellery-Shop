import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

function ShopItems() {
  const { items = [], category, subCategory, priceRange, currency, sortOption } = useContext(ShopContext);
  const navigate = useNavigate();

  // Ensure items is an array
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No products available.</p>;
  }

  // Filter items based on category, subCategory, and price range
  let filteredItems = items.filter(item => {
    return (
      (!category || item.category?.toLowerCase() === category.toLowerCase()) &&
      (!subCategory || item.subCategory?.toLowerCase() === subCategory.toLowerCase()) &&
      (item.price >= priceRange[0] && item.price <= priceRange[1])
    );
  });

  // Calculate discounted price for sorting purposes
  const getDiscountedPrice = (item) => {
    if (item.onSale) {
      return item.price - item.price * (item.discount / 100);
    }
    return item.price;
  };

  // Sort items based on the selected sort option (Low to High or High to Low)
  filteredItems = useMemo(() => {
    if (sortOption === "Low to High") {
      return [...filteredItems].sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));
    } else if (sortOption === "High to Low") {
      return [...filteredItems].sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));
    }
    return filteredItems;
  }, [filteredItems, sortOption]);

  return (
    <div className="w-full flex flex-col items-center gap-4 relative mt-5 lg:mt-10 lg:w-auto">
      {filteredItems.length > 0 ? (
        <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 md:gap-3 lg:justify-start xl:gap-10 xl:gap-y-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="product-card w-36 flex flex-col sm:w-64 md:w-60 xl:w-[20vw] cursor-pointer"
              onClick={() => navigate(`/shop/${item.type}/${item.name}/${item.id}`)}
            >
              <div className="w-full h-36 overflow-hidden sm:h-64 md:h-60 xl:h-[15vw] lg:rounded-[5px] relative">
                <img
                  loading="lazy"
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
                {item.onSale && (
                  <span className="font-mulish bg-primary text-white absolute bottom-2 left-2 rounded-full px-2 text-xs sm:text-base sm:px-4 lg:left-4 lg:bottom-4">
                    Sale
                  </span>
                )}
              </div>
              <h2 className="text-black text-[0.7rem] mt-1 sm:text-[1.2rem] lg:text-[1.12rem]">
                {item.name}
              </h2>
              <h3 className="text-black text-[0.8rem] flex items-center gap-2 sm:text-[1.3rem] lg:text-[1.12rem] lg:gap-4 text-stroke-xs">
                {item.onSale ? (
                  <>
                    <span className="text-black/50 line-through text-[0.6rem] sm:text-[1.1rem] lg:text-[1.12rem] text-stroke-0">
                      {currency} {item.price}
                    </span>
                    <span>
                      From {currency} {getDiscountedPrice(item).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span>{currency} {item.price}</span>
                )}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products found for the selected filters.</p>
      )}
    </div>
  );
}

export default ShopItems;

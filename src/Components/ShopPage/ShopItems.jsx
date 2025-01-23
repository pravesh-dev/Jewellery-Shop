import React, { useState } from "react";
import { items } from "../ProductsData";
import buttonUnderline from '../../Assets/LandingPage/Shopby/button-underline.svg';
import { useNavigate } from 'react-router-dom';

function ShopItems() {
  const navigate = useNavigate();
  const itemsPerPage = 6; // Number of items per page
  const totalPages = Math.ceil(items.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handlers for Previous and Next buttons
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handler for direct page navigation
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 relative mt-5 lg:mt-10 lg:w-auto">
      <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 md:gap-3 lg:justify-start xl:gap-10 xl:gap-y-10">
        {currentItems.map((item, index) => (
          <div
            key={index}
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
                  sale
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
                    $ {item.price}
                  </span>
                  <span>
                    From $ {(item.price - item.price * (item.discount / 100)).toFixed(2)}
                  </span>
                </>
              ) : (
                <span>$ {item.price}</span>
              )}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-5 lg:mt-14">
        <button
          onClick={handlePrevious}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 text-accent"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`text-xl mx-1 ${
                currentPage === index + 1
                  ? "text-secondary"
                  : "text-dark"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary text-accent"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ShopItems;

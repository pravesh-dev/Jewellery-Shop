import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ShopContext } from "../../Context/ShopContext";

function SortBy() {
  const { sortOption, setSortOption } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Relevant", "Low to High", "High to Low"];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.relative')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-4 font-bellefair md:self-end lg:w-full justify-end xl:pr-5">
      <h2 className="text-xl">Sort by</h2>
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center gap-3">
          {sortOption} <IoIosArrowDown />
        </button>
        {isOpen && (
          <div className="w-full absolute top-10 z-20 bg-white text-dark shadow-md rounded-md">
            {options.map((option) => (
              <div key={option} onClick={() => { setSortOption(option); setIsOpen(false); }} className="px-7 py-1 hover:bg-gray-200 cursor-pointer">
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SortBy;

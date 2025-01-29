import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SortBy() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popularity");

  const options = ["Popularity", "Price", "Rating"];

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
        {selectedOption} <span><IoIosArrowDown /></span>
      </button>
      {isOpen && (
          <div className="w-full absolute top-10 z-20 bg-white text-dark shadow-md rounded-md">
          {options.map((option) => (
            <div key={option} onClick={() => { setSelectedOption(option); setIsOpen(false); }} className="px-7 py-1 hover:bg-gray-200 cursor-pointer">
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

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SortBy() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popularity");

  const options = ["Popularity", "Price", "Rating"];

  return (
    <div className="flex items-center gap-4 relative font-bellefair">
      <h2 className="text-lg">Sort by</h2>
      <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-secondary text-accent text-xs px-3 py-1 rounded-full flex items-center gap-3">
        {selectedOption} <span><IoIosArrowDown /></span>
      </button>
      {isOpen && (
          <div className="absolute top-5 z-20 bg-white text-dark shadow-md rounded-md">
          {options.map((option) => (
            <div key={option} onClick={() => { setSelectedOption(option); setIsOpen(false); }} className="px-4 py-1 hover:bg-gray-200">
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

import React, { useState, useContext } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";
import PriceRangeSelector from './PriceRangeSelector';
import { ShopContext } from '../../Context/ShopContext';

function FilterSection() {
  const { category, setCategory, subCategory, setSubCategory } = useContext(ShopContext);
  
  const [isOpen, setIsOpen] = useState({
    category: true,
    subCategory: false,
    price: true,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(category === selectedCategory ? null : selectedCategory);
  };

  const handleSubCategoryChange = (selectedSubCategory) => {
    setSubCategory(subCategory === selectedSubCategory ? null : selectedSubCategory);
  };

  return (
    <div className='w-60 border border-dark p-3 rounded-md font-bellefair mb-4 md:mb-0 md:rounded-[2rem] md:py-6 lg:w-[15.3rem] lg:px-[1.5rem]'>
      <h1 className='text-xl md:text-2xl md:mb-4 lg:text-[1.5rem] lg:mb-9 lg:text-stroke-xs'>Filter Products</h1>

      {/* Category Section */}
      <div className='w-52 mb-4'>
        <button
          onClick={() => toggleSection('category')}
          className="w-full my-4 bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3 lg:py-0 lg:px-5 lg:w-[11.8rem] lg:h-[2.25rem] lg:text-[1.12rem]"
        >
          Category <span>{isOpen.category ? <IoIosArrowDown /> : <GoChevronRight />}</span>
        </button>
        {isOpen.category && (
          <ul className='px-7 md:flex flex-col gap-1'>
            {["Women", "Men", "Accessories"].map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className='cursor-pointer flex items-center gap-4 text-sm'
              >
                {category === cat ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />}
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Subcategory Section */}
      <div className='w-52 mb-4'>
        <button
          onClick={() => toggleSection('subCategory')}
          className="w-full my-4 bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3 lg:py-0 lg:px-5 lg:w-[11.8rem] lg:h-[2.25rem] lg:text-[1.12rem]"
        >
          Products <span>{isOpen.subCategory ? <IoIosArrowDown /> : <GoChevronRight />}</span>
        </button>
        {isOpen.subCategory && (
          <ul className='px-7 md:flex flex-col gap-1'>
            {["Necklace", "Ring", "Chain", "Bracelet", "Earring", "Statue"].map((sub) => (
              <li
                key={sub}
                onClick={() => handleSubCategoryChange(sub)}
                className='cursor-pointer flex items-center gap-4 text-sm'
              >
                {subCategory === sub ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />}
                {sub}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Divider */}
      <span className='w-full h-[3px] block mb-4 bg-dark/30 rounded-full lg:h-[2px]'></span>

      {/* Price Range Section */}
      <div className='w-52'>
        <button
          onClick={() => toggleSection('price')}
          className="w-full bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3 lg:py-0 lg:px-5 lg:w-[11.8rem] lg:h-[2.25rem] lg:text-[1.12rem]"
        >
          Price <span>{isOpen.price ? <IoIosArrowDown /> : <GoChevronRight />}</span>
        </button>
        {isOpen.price && <PriceRangeSelector />}
      </div>
    </div>
  );
}

export default FilterSection;

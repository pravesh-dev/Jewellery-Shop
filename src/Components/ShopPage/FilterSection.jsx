import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";
import PriceRangeSelector from './PriceRangeSelector';

function FilterSection() {
  const [isOpen, setIsOpen] = useState({
    category: true,
    subCategory: false,
    price: true,
  });

  const [checkedItems, setCheckedItems] = useState({
    womenJewellery: {
      necklace: false,
      ring: false,
      bracelet: false,
    },
    menJewellery: {
      necklace: false,
      ring: false,
      bracelet: false,
    },
    accessories: {
      necklace: false,
      ring: false,
      bracelet: false,
    },
  });

  const toggleSection = (section) => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const toggleCheck = (section, item) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [item]: !prevState[section][item],
      },
    }));
  };

  return (
    <div className='w-60 border border-dark p-3 rounded-md font-bellefair mb-4 md:mb-0 md:rounded-[2rem] md:py-6 lg:w-[15.3rem] lg:px-[1.5rem]'>
      <h1 className='text-xl md:text-2xl md:mb-4 lg:text-[1.5rem] lg:mb-9 lg:text-stroke-xs'>Filter Products</h1>
      <div className='w-52 mb-4'>
      <button onClick={() => toggleSection('category')} className="w-full my-4 bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3 lg:py-0 lg:px-5 lg:w-[11.8rem] lg:h-[2.25rem] lg:text-[1.12rem]">
        Category <span>{isOpen.category ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
      {isOpen.category && (
            <ul className='px-7 md:flex flex-col gap-1'>
              <li onClick={() => toggleCheck('womenJewellery', 'necklace')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.womenJewellery.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Women
              </li>
              <li onClick={() => toggleCheck('womenJewellery', 'ring')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.womenJewellery.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Man
              </li>
              <li onClick={() => toggleCheck('womenJewellery', 'bracelet')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.womenJewellery.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Accessories
              </li>
            </ul>
      )}
      <button onClick={() => toggleSection('subCategory')} className="w-full my-4 bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3 lg:py-0 lg:px-5 lg:w-[11.8rem] lg:h-[2.25rem] lg:text-[1.12rem]">
        Products <span>{isOpen.subCategory ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
          {isOpen.subCategory && (
            <ul className='px-7 md:flex flex-col gap-1'>
              <li onClick={() => toggleCheck('accessories', 'necklace')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.accessories.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Necklace
              </li>
              <li onClick={() => toggleCheck('accessories', 'ring')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.accessories.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Ring
              </li>
              <li onClick={() => toggleCheck('accessories', 'bracelet')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.accessories.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Bracelet
              </li>
              <li onClick={() => toggleCheck('accessories', 'bracelet')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.accessories.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Statue
              </li>
            </ul>
          )}
      </div>
      <span className='w-full h-[3px] block mb-4 bg-dark/30 rounded-full lg:h-[2px]'></span>
      <div className='w-52'>
      <button onClick={() => toggleSection('price')} className="w-full bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3 lg:py-0 lg:px-5 lg:w-[11.8rem] lg:h-[2.25rem] lg:text-[1.12rem]">
        Price <span>{isOpen.price ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
      {isOpen.price && (
        <PriceRangeSelector />
      )}
      </div>
    </div>
  )
}

export default FilterSection

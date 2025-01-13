import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";
import PriceRangeSelector from './PriceRangeSelector';

function FilterSection() {
  const [isOpen, setIsOpen] = useState({
    womenJewellery: false,
    menJewellery: false,
    accessories: false,
    category: true,
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
    <div className='w-60 border border-dark p-3 rounded-md font-bellefair mb-4 md:mb-0 md:rounded-[2rem] md:py-6 xl:w-[17rem] xl:px-8'>
      <h1 className='text-xl md:text-2xl md:mb-4'>Filter Products</h1>
      <div className='w-52 mb-4'>
      <button onClick={() => toggleSection('category')} className="w-full bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3">
        Category <span>{isOpen.category ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
      {isOpen.category && (
        <div className='md:flex flex-col gap-1'>
          <button onClick={() => toggleSection('womenJewellery')} className="w-full text-dark text-base px-7 py-1 rounded-full flex items-center justify-between gap-3 md:mt-2">
            Women Jewellery <span>{isOpen.womenJewellery ? <IoIosArrowDown /> : <GoChevronRight />}</span>
          </button>
          {isOpen.womenJewellery && (
            <ul className='px-7 md:flex flex-col gap-1'>
              <li onClick={() => toggleCheck('womenJewellery', 'necklace')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.womenJewellery.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Necklace
              </li>
              <li onClick={() => toggleCheck('womenJewellery', 'ring')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.womenJewellery.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Ring
              </li>
              <li onClick={() => toggleCheck('womenJewellery', 'bracelet')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.womenJewellery.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Bracelet
              </li>
            </ul>
          )}
          <button onClick={() => toggleSection('menJewellery')} className="w-full text-dark text-base px-7 py-1 rounded-full flex items-center justify-between gap-3 md:mt-2">
            Men Jewellery <span>{isOpen.menJewellery ? <IoIosArrowDown /> : <GoChevronRight />}</span>
          </button>
          {isOpen.menJewellery && (
            <ul className='px-7 md:flex flex-col gap-1'>
              <li onClick={() => toggleCheck('menJewellery', 'necklace')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.menJewellery.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Necklace
              </li>
              <li onClick={() => toggleCheck('menJewellery', 'ring')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.menJewellery.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Ring
              </li>
              <li onClick={() => toggleCheck('menJewellery', 'bracelet')} className='cursor-pointer flex items-center gap-4 text-sm'> 
                {checkedItems.menJewellery.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-dark' />} 
                Bracelet
              </li>
            </ul>
          )}
          <button onClick={() => toggleSection('accessories')} className="w-full text-dark text-base px-7 py-1 rounded-full flex items-center justify-between gap-3 md:mt-2">
           Accessories <span>{isOpen.accessories ? <IoIosArrowDown /> : <GoChevronRight />}</span>
          </button>
          {isOpen.accessories && (
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
            </ul>
          )}
        </div>
      )}
      </div>
      <span className='w-full h-[3px] block mb-4 bg-dark/30 rounded-full'></span>
      <div className='w-52'>
      <button onClick={() => toggleSection('price')} className="w-full bg-[#CFAB55CC] text-accent text-lg px-7 py-1 rounded-full flex items-center justify-between gap-3">
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

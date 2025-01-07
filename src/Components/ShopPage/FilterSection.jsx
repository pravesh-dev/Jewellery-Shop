import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";

function FilterSection() {
  const [isOpen, setIsOpen] = useState({
    womenJewellery: false,
    menJewellery: false,
    accessories: false,
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
    <div className='w-full border-2 border-black p-3 rounded-md font-bellefair'>
      <h1 className='text-lg'>Filter Products</h1>
      <div className='w-40'>
      <button className="w-full bg-[#CFAB55CC] text-accent text-lg px-3 py-1 rounded-full flex items-center justify-between gap-3">
        Category <span><IoIosArrowDown /></span>
      </button>
      <button onClick={() => toggleSection('womenJewellery')} className="w-full text-dark text-base px-3 py-1 rounded-full flex items-center justify-between gap-3">
        Women Jewellery <span>{isOpen.womenJewellery ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
      {isOpen.womenJewellery && (
        <ul className='px-3'>
          <li onClick={() => toggleCheck('womenJewellery', 'necklace')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.womenJewellery.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Necklace
          </li>
          <li onClick={() => toggleCheck('womenJewellery', 'ring')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.womenJewellery.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Ring
          </li>
          <li onClick={() => toggleCheck('womenJewellery', 'bracelet')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.womenJewellery.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Bracelet
          </li>
        </ul>
      )}
      <button onClick={() => toggleSection('menJewellery')} className="w-full text-dark text-base px-3 py-1 rounded-full flex items-center justify-between gap-3">
        Men Jewellery <span>{isOpen.menJewellery ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
      {isOpen.menJewellery && (
        <ul className='px-3'>
          <li onClick={() => toggleCheck('menJewellery', 'necklace')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.menJewellery.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Necklace
          </li>
          <li onClick={() => toggleCheck('menJewellery', 'ring')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.menJewellery.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Ring
          </li>
          <li onClick={() => toggleCheck('menJewellery', 'bracelet')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.menJewellery.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Bracelet
          </li>
        </ul>
      )}
      <button onClick={() => toggleSection('accessories')} className="w-full text-dark text-base px-3 py-1 rounded-full flex items-center justify-between gap-3">
       Accessories <span>{isOpen.accessories ? <IoIosArrowDown /> : <GoChevronRight />}</span>
      </button>
      {isOpen.accessories && (
        <ul className='px-3'>
          <li onClick={() => toggleCheck('accessories', 'necklace')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.accessories.necklace ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Necklace
          </li>
          <li onClick={() => toggleCheck('accessories', 'ring')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.accessories.ring ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Ring
          </li>
          <li onClick={() => toggleCheck('accessories', 'bracelet')} className='flex items-center gap-4 text-sm'> 
            {checkedItems.accessories.bracelet ? <ImCheckboxChecked className='text-primary' /> : <ImCheckboxUnchecked className='text-primary' />} 
            Bracelet
          </li>
        </ul>
      )}
      </div>
    </div>
  )
}

export default FilterSection

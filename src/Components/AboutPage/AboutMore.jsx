import React from 'react'
import img1 from '../../Assets/AboutPage/about1.jpg'
import img2 from '../../Assets/AboutPage/about2.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function AboutMore() {
  return (
    <div className='py-10 px-2'>
      <div className='w-full h-72 rounded-sm lg:h-80 lg:rounded-md xl:px-16 mx-auto'>
        <img src={img1} className='w-full h-full object-cover rounded-sm lg:rounded-md object-[0%_40%]' alt="background image related to about us" />
      </div>
      <div>
        <div className=''>
            <h2 className='font-lora relative'>
            <RiDoubleQuotesL className='text-sm absolute top-0 left-0' />
            <RiDoubleQuotesR className='text-sm absolute bottom-0 right-0' />
                Venenatis sagittis neque non lectus mi tortor neque proin massa. Et eu dictum orci. </h2>
            <h3 className='font-bellefair'>Pravesh Saini, Jeweller</h3>
        </div>
        <div>
            <img src={img2} className='w-full h-full object-cover' alt="image" />
        </div>
      </div>
    </div>
  )
}

export default AboutMore

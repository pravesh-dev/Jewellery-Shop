import React from 'react'
import img1 from '../../Assets/AboutPage/about1.jpg'
import img2 from '../../Assets/AboutPage/about2.jpg'

function AboutMore() {
  return (
    <div className='py-10 px-2'>
      <div className='w-full h-72 rounded-sm lg:h-80 lg:rounded-md xl:px-16 mx-auto'>
        <img src={img1} className='w-full h-full object-cover rounded-sm lg:rounded-md object-[0%_40%]' alt="background image related to about us" />
      </div>
    </div>
  )
}

export default AboutMore

import React from 'react'
import contactBg from '../../Assets/contact-bg.jpg';
function BgImage() {
  return (
    <div className='px-2 py-10 md:px-10 lg:px-20 xl:py-20 xl:w-[70rem] xl:px-0 xl:mx-auto'>
      <div className="w-full h-64 rounded-sm lg:h-80 lg:rounded-md mx-auto">
        <img
          src={contactBg}
          className="w-full h-full object-cover rounded-sm lg:rounded-md object-[0%_40%]"
          loading="lazy"
          alt="background image related to about us"
        />
      </div>
    </div>
  )
}

export default BgImage

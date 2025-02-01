import React from 'react'

// Function to render the background component
function Background() {
  return (
    <div className='w-full h-full relative overflow-hidden'>
      {/* Large circle background for medium and extra large screens */}
      <div className='md:w-[70rem] md:h-[70rem] rounded-full bg-[#C8F4BF] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 xl:w-[80rem] xl:h-[70rem]'></div>
      {/* Medium circle background for medium and extra large screens */}
      <div className='md:w-[60rem] md:h-[60rem] rounded-full bg-[#8FE6A0] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 xl:w-[70rem] xl:h-[60rem]'></div>
      {/* Small circle background for medium and extra large screens */}
      <div className='md:w-[50rem] md:h-[50rem] rounded-full bg-[#62DC7C] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 xl:w-[60rem] xl:h-[50rem]'></div>
    </div>
  )
}

// Exporting the Background component
export default Background

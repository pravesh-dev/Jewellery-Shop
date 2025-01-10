import React from 'react'

function Background() {
  return (
    <div className='w-full h-full relative overflow-hidden'>
      <div className='md:w-[70rem] md:h-[70rem] rounded-full bg-[#C8F4BF] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2'></div>
      <div className='md:w-[60rem] md:h-[60rem] rounded-full bg-[#8FE6A0] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2'></div>
      <div className='md:w-[50rem] md:h-[50rem] rounded-full bg-[#62DC7C] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2'></div>
    </div>
  )
}

export default Background

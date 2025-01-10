import React from 'react'

function Background() {
  return (
    <div className='w-full h-full relative overflow-hidden'>
      <div className='sm:w-[70rem] sm:h-[70rem] rounded-full bg-[#C8F4BF] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2'></div>
      <div className='sm:w-[60rem] sm:h-[60rem] rounded-full bg-[#8FE6A0] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2'></div>
      <div className='sm:w-[50rem] sm:h-[50rem] rounded-full bg-[#62DC7C] absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2'></div>
    </div>
  )
}

export default Background

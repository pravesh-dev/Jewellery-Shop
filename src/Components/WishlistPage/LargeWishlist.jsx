import React from 'react'

function LargeWishlist({items}) {
  return (
    <div>
      <div className=''>
        <div className=''>
            <h2 className='text-[1.12rem] font-lora'>Product Details</h2>
            <div className='flex items-center gap-2'>
                <div className='w-[12rem] h-[10.9rem] rounded-[5px] overflow-hidden'>
                    <img src={items[0].image} className='w-full h-full object-cover' alt="product thumbnail" loading='lazy' />
                </div>
                <div className='font-bellefair'>
                    <h1 className='text-[1.5rem]'>{items[0].name}</h1>
                    <div>
                        <button className='text-[#A0A0A0] text-[1.12rem]'>Remove</button>
                        <button className='text-[#A0A0A0] text-[1.12rem]'>Share</button>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LargeWishlist

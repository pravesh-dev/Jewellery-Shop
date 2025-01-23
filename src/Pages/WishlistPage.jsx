import React from 'react'
import MobileWishlist from '../Components/WishlistPage/MobileWishlist'
import { items } from '../Components/ProductsData';

function WishlistPage() {
  return (
    <div className='w-full pt-24 pb-4 px-2 flex flex-col'>
      <h1 className='text-primary text-[1.5rem] text-stroke-1 font-bellefair'>Wishlist</h1>
      <span className='w-full h-[1px] bg-[#D9D9D9] my-1'></span>
      <div>
        <MobileWishlist items={items} />
      </div>
    </div>
  )
}

export default WishlistPage

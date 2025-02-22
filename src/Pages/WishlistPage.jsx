import React from 'react' // Import React for component creation
import MobileWishlist from '../Components/WishlistPage/MobileWishlist' // Import MobileWishlist component
import LargeWishlist from '../Components/WishlistPage/LargeWishlist'; // Import LargeWishlist component

// Function component for WishlistPage
function WishlistPage() {
  return (
    <div className='w-full pt-24 pb-4 px-2 flex flex-col lg:pt-32 xl:px-16'>
      <h1 className='text-primary text-[1.5rem] text-stroke-1 font-bellefair xl:text-[2rem]'>Wishlist</h1>
      <span className='w-full h-[1px] bg-[#D9D9D9] my-1 lg:my-2'></span>
      <div className='sm:hidden'>
        <MobileWishlist />
      </div>
      <div className='hidden sm:block'>
        <LargeWishlist />
      </div>
    </div>
  )
}

export default WishlistPage // Export the WishlistPage component

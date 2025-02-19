import React from 'react' // Import React for component creation
import ShoppingCart from '../Components/CartPage/ShoppingCart'; // Import ShoppingCart component
import ShoppingCartMobile from '../Components/CartPage/ShoppingCartMobile';

// Function component for UserCartPage
function UserCartPage() {
  return (
    <div>
      <div className='md:hidden'>
        <ShoppingCartMobile />
      </div>
      <div className='hidden md:block'>
      <ShoppingCart />
      </div>
    </div>
  )
}

export default UserCartPage // Export the UserCartPage component

import React from 'react' // Import React for component creation
import ShoppingCart from '../Components/CartPage/ShoppingCart'; // Import ShoppingCart component

// Function component for UserCartPage
function UserCartPage() {
  return (
    <div>
      <div className='hidden md:block'> // Conditional rendering for different screen sizes
      <ShoppingCart /> // Render ShoppingCart component
      </div>
    </div>
  )
}

export default UserCartPage // Export the UserCartPage component

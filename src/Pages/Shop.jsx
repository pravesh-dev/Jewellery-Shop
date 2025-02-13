import React from 'react' // Import React for component creation
import Hero from '../Components/ShopPage/Hero' // Import Hero component from ShopPage
import ShopSection from '../Components/ShopPage/ShopSection' // Import ShopSection component from ShopPage

// Function component for Shop page
function Shop() {
  return (
    <> // Fragment to wrap components without adding extra DOM nodes
    <Hero /> // Render Hero component
    <ShopSection /> // Render ShopSection component
    </>
  )
}

export default Shop // Export the Shop component

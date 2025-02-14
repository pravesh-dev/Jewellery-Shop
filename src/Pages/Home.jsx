import React from 'react' // Import React for component creation
import Hero from '../Components/LandingPage/Hero' // Import Hero component from LandingPage
import FeedBack from '../Components/LandingPage/Feedback' // Import Feedback component from LandingPage
import Featured from '../Components/LandingPage/Featured' // Import Featured component from LandingPage
import ShopBy from '../Components/LandingPage/ShopBy' // Import ShopBy component from LandingPage

// Function component for Home page
function Home() {
  return (
    <> // Fragment to wrap components without adding extra DOM nodes
    <Hero /> // Render Hero component
    <Featured /> // Render Featured component
    <ShopBy /> // Render ShopBy component
    <FeedBack /> // Render Feedback component
    </>
  )
}

export default Home // Export the Home component

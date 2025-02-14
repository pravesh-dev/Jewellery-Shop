import React from 'react' // Import React for component creation
import Hero from '../Components/BlogPage/Hero' // Import Hero component from BlogPage
import Blogs from '../Components/BlogPage/Blogs' // Import Blogs component from BlogPage

// Function component for BlogLandingPage
function BlogLandingPage() {
  return (
    <div> // Container div for the page content
      <Hero /> // Render Hero component
      <Blogs /> // Render Blogs component
    </div>
  )
}

export default BlogLandingPage // Export the BlogLandingPage component

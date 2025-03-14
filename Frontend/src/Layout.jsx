import React from 'react' // Import React for component creation
import { Outlet } from 'react-router-dom' // Import Outlet for nested routes
import Header from './Components/Header' // Import Header component
import Footer from './Components/Footer' // Import Footer component

// Function component for the Layout
function Layout() {
  return (
    <main className='max-w-[1520px] mx-auto bg-[#FFFFF0]'>
        <Header/>
        <Outlet/>
        <Footer />
    </main>
  )
}

export default Layout // Export the Layout component

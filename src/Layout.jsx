import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function Layout() {
  return (
    <main>
        {/* <Header/> */}
        <Outlet/>
        <Footer />
    </main>
  )
}

export default Layout

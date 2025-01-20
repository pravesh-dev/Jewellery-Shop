import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function Layout() {
  return (
    <main className='max-w-[1520px] mx-auto bg-[#FFFFF0]'>
        <Header/>
        <Outlet/>
        <Footer />
    </main>
  )
}

export default Layout

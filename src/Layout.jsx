import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout

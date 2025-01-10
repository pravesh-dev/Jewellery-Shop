import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import NoPage from './Pages/NoPage'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ProductPage from './Pages/ProductPage'
import ScrollToTop from './Components/ScrollToTop'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/shop/:type/:name/:id' element={<ProductPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
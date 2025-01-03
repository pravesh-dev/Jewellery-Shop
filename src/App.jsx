import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import NoPage from './Pages/NoPage'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
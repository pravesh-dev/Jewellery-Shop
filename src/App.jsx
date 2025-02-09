import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import NoPage from './Pages/NoPage'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ProductPage from './Pages/ProductPage'
import ScrollToTop from './Components/ScrollToTop'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import BlogLandingPage from './Pages/BlogLandingPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import WishlistPage from './Pages/WishlistPage'
import UserCartPage from './Pages/UserCartPage'
import axios from 'axios'; // Import axios for HTTP requests
import { AuthContext } from './Context/AuthContext'

function App() {
  const { login } = useContext(AuthContext);
  useEffect(() => {
    const verifyCredentials = async () => {
      try {
        const response = await axios.post('https://jewellery.hexadefend.com/Backend/auth/verify.php', { withCredentials: true });
        login(response.data);
        console.log('from verify app' ,response.data);
      } catch (error) {
        console.error('Error verifying credentials:', error);
      }
    };

    verifyCredentials();
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/shop/:type/:name/:id' element={<ProductPage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogLandingPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/user-cart' element={<UserCartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
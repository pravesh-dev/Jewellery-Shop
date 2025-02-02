import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Helper/Context/AuthContext';  // Import the AuthProvider
import Layout from './Layout';
import NoPage from './Pages/NoPage';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductPage from './Pages/ProductPage';
import ScrollToTop from './Components/ScrollToTop';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import BlogLandingPage from './Pages/BlogLandingPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import WishlistPage from './Pages/WishlistPage';
import UserCartPage from './Pages/UserCartPage';

function App() {
  return (
    <AuthProvider>  {/* Wrap the app with the AuthProvider */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:type/:name/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogLandingPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/user-cart" element={<UserCartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

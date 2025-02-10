import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductPage from "./Pages/ProductPage";
import ScrollToTop from "./Components/ScrollToTop";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import BlogLandingPage from "./Pages/BlogLandingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import WishlistPage from "./Pages/WishlistPage";
import UserCartPage from "./Pages/UserCartPage";
import axios from "axios"; 
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false); // Prevent infinite loop

  useEffect(() => {
    if (isVerified) return; // Prevent re-running if already verified

    const verifyCredentials = async () => {
      try {
        const response = await axios.post(
          "https://jewellery.hexadefend.com/Backend/auth/verify.php",
          { withCredentials: true }
        );
        if (response.data.status === "success") {
          login(response.data);
          setIsVerified(true); // Mark as verified to prevent infinite calls
          navigate('/');
          console.log("Success verify app", response.data);
        } else {
          console.error("Error verifying credentials:", response.data);
        }
      } catch (error) {
        console.error("Error verifying credentials:", error);
      }
    };

    verifyCredentials();
  }, [isVerified]); // Only runs once when `isVerified` is false

  return (
    <>
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
    </>
  );
}

export default App;

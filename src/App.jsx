import React, { useContext, useEffect } from "react";
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
import axios from "axios"; // Import axios for HTTP requests
import { AuthContext } from "./Context/AuthContext";

// Function component for the App
function App() {
  // Use the AuthContext to access authentication state and functions
  const { login } = useContext(AuthContext);
  // Use the useNavigate hook to navigate programmatically
  const navigate = useNavigate();

  // Effect hook to verify credentials on component mount
  useEffect(() => {
    const verifyCredentials = async () => {
      try {
        // Make a POST request to verify credentials
        const response = await axios.post(
          "https://jewellery.hexadefend.com/Backend/auth/verify.php",
          { withCredentials: true }
        );
        // If the response indicates success, login and navigate to the home page
        if (response.data.status === "success") {
          login(response.data);
          navigate('/')
          console.log("success verify app", response.data);
        } else if (response.data.status === "error") {
          console.error("Error verifying credentials:", response.data);
        }
      } catch (error) {
        console.error("Error verifying credentials:", error);
      }
    };

    verifyCredentials();
  }, []);

  // JSX for the App component
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

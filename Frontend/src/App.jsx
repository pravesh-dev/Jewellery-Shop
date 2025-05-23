import { Route, Routes } from "react-router-dom";
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
import OrderSummaryMobile from "./Components/CartPage/OrderSummaryMobile";
import { useMediaQuery } from "@react-hook/media-query"; // Import useMediaQuery hook
import PlaceOrder from "./Components/CartPage/PlaceOrder";
import OrderPage from "./Pages/OrderPage";

// Function component for the App
function App() {
  // Use media query hook to check for device width
  const isMobileDevice = useMediaQuery("(max-width: 767px)");

  // JSX for the App component
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogLandingPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/user-cart" element={<UserCartPage />} />
          {/* Conditionally render OrderSummaryMobile based on device width */}
          {isMobileDevice && (
            <Route path="/shopping/cart/order-summary" element={<OrderSummaryMobile />} />
          )}
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<OrderPage />} />
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

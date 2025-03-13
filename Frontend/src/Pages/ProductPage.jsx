import React, { useContext, useEffect, useState } from "react"; // Importing necessary React hooks and context
import { useParams } from "react-router-dom"; // Importing useParams hook for URL parameter access
import Hero from "../Components/ProductPage/Hero"; // Importing Hero component for product hero section
import SimilarProductSlider from "../Components/ProductPage/SimilarProductSlider"; // Importing SimilarProductSlider component for similar products
import ReviewSection from "../Components/ProductPage/ReviewSection"; // Importing ReviewSection component for product reviews
import { ShopContext } from "../Context/ShopContext"; // Importing ShopContext for accessing shop items

function ProductPage() {
  const { id } = useParams(); // Extracting product ID from URL parameters
  const { items } = useContext(ShopContext); // Accessing shop items from context
  const [productData, setProductData] = useState(false); // State to hold the product data

  // Function to fetch product data based on ID
  const fetchProductData = async () => {
    items.map((product) => {
      if (Number(product.id) === Number(id)) { // Ensuring both are numbers
        setProductData(product);
        return null;
      }
    });
  };

  // Effect to fetch product data on component mount or when ID or items change
  useEffect(() => {
    fetchProductData();
  }, [id, items]);

  // Rendering product page based on product data availability
  return (
    <div className="">
      {productData ? (
        <div>
          <Hero product={productData} />
          <ReviewSection product={productData} />
          <SimilarProductSlider product={productData} />
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-2xl font-bellefair">Product not found</p>
        </div>
      )}
    </div>
  );
}

export default ProductPage;

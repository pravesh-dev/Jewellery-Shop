import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Components/ProductPage/Hero";
import SimilarProductSlider from "../Components/ProductPage/SimilarProductSlider";
import ReviewSection from "../Components/ProductPage/ReviewSection";
import { ShopContext } from "../Context/ShopContext";

function ProductPage() {
  const { id } = useParams();
  const { items } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    items.map((product) => {
      if (Number(product.id) === Number(id)) { // Ensuring both are numbers
        setProductData(product);
        return null;
      }
    });
  };
  

  useEffect(() => {
    fetchProductData();
  }, [id, items]);

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

import React, { useState } from "react";
import { items } from "../ProductsData";

function SimilarProductSlider({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter similar products based on product.type
  const similarProducts = items.filter(
    (item) => item.type === product.type && item.id !== product.id
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < similarProducts.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full py-5">
      <h2 className="text-green-700 text-2xl mb-4">Similar Items</h2>
      {similarProducts.length > 0 ? (
        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="min-w-[25%]">
                  <div className="border rounded-md p-3">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold mt-3">
                      {similarProduct.name}
                    </h3>
                    <p className="text-gray-700">£ {similarProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 shadow-md ${
              currentIndex === 0 ? "hidden" : ""
            }`}
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 shadow-md ${
              currentIndex >= similarProducts.length - 4 ? "hidden" : ""
            }`}
          >
            ▶
          </button>
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No similar items found.</p>
      )}
    </div>
  );
}

export default SimilarProductSlider;

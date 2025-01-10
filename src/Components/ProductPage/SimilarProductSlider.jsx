import React, { useState } from "react";
import { items } from "../ProductsData";

function SimilarProductSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full py-5">
      <h2 className="text-green-700 text-2xl mb-4">Similar Items</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          <div
            className="flex transition-transform"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[25%]">
                <div className="border rounded-md p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">£ {product.price}</p>
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
            currentIndex >= products.length - 4 ? "hidden" : ""
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default SimilarProductSlider;

import React, { useRef, useState, useEffect } from "react";
import { items } from "../ProductsData";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function SimilarProductSlider({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);

  // Filter similar products based on product.type
  const similarProducts = items.filter(
    (item) => item.type === product.type && item.id !== product.id
  );

  // Calculate card width dynamically
  useEffect(() => {
    if (sliderRef.current) {
      setCardWidth(sliderRef.current.firstChild.offsetWidth);
    }
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < similarProducts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full py-5 px-2 font-bellefair">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-primary text-2xl">Similar Items</h2>
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className={`p-2 shadow-md border rounded-md ${
              currentIndex === 0 ? "disabled: border-black/30" : "border-black"
            }`}
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={`p-2 shadow-md border rounded-md ${
              currentIndex >= similarProducts.length - 1 ? "disabled: border-black/30" : "border-black"
            }`}
          >
            <GoChevronRight />
          </button>
        </div>
      </div>
      {similarProducts.length > 0 ? (
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="w-36 shrink-0">
                <div className="border rounded-md">
                  <img
                    src={similarProduct.image}
                    alt={similarProduct.name}
                    className="w-full h-36 object-cover rounded-md"
                  />
                  <h3 className="text-sm mt-3">
                    {similarProduct.name}
                  </h3>
                  <p className="text-black">$ {similarProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-dark text-lg">No similar items found.</p>
      )}
    </div>
  );
}

export default SimilarProductSlider;

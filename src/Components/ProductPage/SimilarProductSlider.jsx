import React, { useRef, useState, useEffect, useContext } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { ShopContext } from "../../Context/ShopContext";

function SimilarProductSlider({ product }) {
  const { items, currency } = useContext(ShopContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);

  // Filter similar products based on product's sub categories
  const similarProducts = items.filter(
    (item) => item.subCategory === product.subCategory && item.id !== product.id
  );

  // Calculate card width dynamically, including gap
  useEffect(() => {
    if (sliderRef.current) {
      const card = sliderRef.current.firstChild;
      setCardWidth(card.offsetWidth + parseInt(getComputedStyle(card).marginRight)); // Include the margin in card width
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

  // Smooth transition effect for slider
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex, cardWidth]);

  return (
    <section className="w-full py-5 px-2 font-bellefair xl:px-16">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl">Similar Items</h2>
        {/* Navigation Buttons */}
        <div className="flex gap-2 md:gap-4">
          <button
            onClick={handlePrev}
            className={`p-2 shadow-md border rounded-md lg:text-2xl lg:px-3 ${
              currentIndex === 0 ? "disabled: border-black/30" : "border-black"
            }`}
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={`p-2 shadow-md border rounded-md lg:text-2xl lg:px-3 ${
              currentIndex >= similarProducts.length - 1
                ? "disabled: border-black/30"
                : "border-black"
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
          >
            {similarProducts.map((similarProduct) => (
              <div
                key={similarProduct.id}
                className="w-36 shrink-0 mr-4 md:w-52 lg:w-60"
              >
                <div className="border rounded-md">
                  <img
                    src={similarProduct.image}
                    alt={similarProduct.name}
                    className="w-full h-36 object-cover rounded-md md:h-52 lg:h-60"
                  />
                  <h3 className="text-sm mt-3 lg:text-lg">{similarProduct.name}</h3>
                  <h2 className="text-black text-xl my-3">
        {similarProduct.onSale ? (
          <div className="flex gap-3">
            <span className="text-black/50 line-through text-[1rem]">
              {currency} {similarProduct.price}
            </span>
            <span>
              {currency}{" "}
              {(
                similarProduct.price -
                similarProduct.price * (similarProduct.discount / 100)
              )}
            </span>
          </div>
        ) : (
          <span>{currency} {similarProduct.price}</span>
        )}
      </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-dark text-lg">No similar items found.</p>
      )}
    </section>
  );
}

export default SimilarProductSlider;

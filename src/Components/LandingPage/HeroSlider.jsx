import React, { useState, useEffect, useRef } from "react";
import img1 from "../../Assets/LandingPage/Hero/img1.jpg";
import img2 from "../../Assets/LandingPage/Hero/img2.jpg";
import img3 from "../../Assets/LandingPage/Hero/img3.jpg";

const HeroSlider = () => {
  const originalImages = [img1, img2, img3, img1, img2, img3]; // Original array of images
  const [currentIndex, setCurrentIndex] = useState(0); // Start at 0
  const [isTransitioning, setIsTransitioning] = useState(false); // To handle smooth transitions
  const sliderRef = useRef(null); // Ref to handle smooth resets

  const images = [...originalImages];

  // Move to the next slide
  const handleNext = () => {
    if (isTransitioning) return; // Prevent spamming during transition
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % originalImages.length);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    slider.addEventListener("transitionend", handleTransitionEnd);

    // Cleanup listener on unmount
    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, originalImages.length]);

  // Function to determine rotation for each image
  const getImageRotation = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    if (position === 0) return "rotate(-10deg)";
    if (position === 1 || position === images.length - 1) return "rotate(0deg)";
    if (position === images.length - 2 || position === 2) return "rotate(10deg)";
    return "rotate(0deg)";
  };

  return (
    <div className="w-full h-96 flex items-center justify-center overflow-hidden relative">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 33.33}%)`,
          width: `${images.length * 33.33}%`,
        }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="w-1/3 flex-shrink-0 flex justify-center items-center"
          >
            <div
              className="w-80 h-60 rounded-md overflow-hidden shadow-md"
              style={{
                transform: getImageRotation(idx),
                transition: "transform 0.7s ease-in-out",
              }}
            >
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Slide ${idx}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10"
        onClick={handleNext}
        disabled={isTransitioning}
      >
        Next
      </button>
    </div>
  );
};

export default HeroSlider;

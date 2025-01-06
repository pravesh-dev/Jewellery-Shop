import React, { useState, useEffect } from "react";
import bottomLine from "../../Assets/LandingPage/Hero/bottom-line.svg";
import { FaHeart } from "react-icons/fa";
import img1 from "../../Assets/LandingPage/Hero/img1.jpg";
import img2 from "../../Assets/LandingPage/Hero/img2.jpg";
import img3 from "../../Assets/LandingPage/Hero/img3.jpg";

function HeroSlider() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Get dynamic class names for positioning
  const getClass = (index) => {
    if (index === currentIndex) return "translate-x-0 scale-100 z-20";
    if (index === (currentIndex + 1) % images.length)
      return "translate-x-full scale-90 z-10";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "-translate-x-full scale-90 z-10";
    return "hidden";
  };

  return (
    <div className="w-full h-80 lg:h-[25rem] relative flex flex-col justify-between overflow-hidden">
      <div className="w-full h-[80%] flex justify-center items-center relative">
        <div className="absolute w-full h-full flex justify-center items-center transition-transform duration-700 ease-in-out">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute w-80 h-52 rounded-md overflow-hidden transition-all duration-700 ease-in-out ${getClass(
                idx
              )}`}
            >
              <img
                src={image}
                className="w-full h-full object-cover"
                loading="lazy"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden relative">
        <img src={bottomLine} className="w-full" alt="bottom line image" />
        <span className="absolute top-0 left-1/2 -translate-y-[40%] -translate-x-1/2 bg-secondary w-7 h-7 flex justify-center items-center rounded-full lg:w-12 lg:h-12">
          <FaHeart className="text-accent text-lg" />
        </span>
      </div>
    </div>
  );
}

export default HeroSlider;

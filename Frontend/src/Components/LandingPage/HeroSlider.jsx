import React, { useState, useEffect } from "react";
import img1 from "../../Assets/LandingPage/Hero/img1.jpg";
import img2 from "../../Assets/LandingPage/Hero/img2.jpg";
import img3 from "../../Assets/LandingPage/Hero/img3.jpg";
import bottomLine from "../../Assets/LandingPage/Hero/bottom-line.svg";
import { FaHeart } from "react-icons/fa";

// Define the HeroSlider component
const HeroSlider = () => {
  // Initialize state for original images, current index, and heart icon state
  const origImages = [img1, img2, img3];
  const images = [...origImages, ...origImages]; // Duplicate images for infinite scroll
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeart, setIsHeart] = useState(false)

  // UseEffect hook to change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length -3));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to determine rotation for each image
  const getImageRotation = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    if (position === 0) return "rotate(-10deg) translateY(4rem)";
    if (position === 1 || position === images.length - 1) return "rotate(0deg) translateY(0rem)";
    if (position === images.length - 2 || position === 2) return "rotate(10deg) translateY(4rem)";
    return "rotate(0deg)";
  };

  return (
    <>
    <div className="w-full h-60 flex items-center justify-center relative mt-10">
      {/* Slider Container */}
      <div
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
            <div className="w-44 h-28 xs:w-60 xs:h-40 md:w-96 md:h-60 rounded-md overflow-hidden shadow-md" style={{
                transform: getImageRotation(idx),
                transition: "transform 0.7s ease-in-out",
              }}>
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="relative">
      <img src={bottomLine} className="w-screen" alt="bottom line image" />
      <span className="absolute top-0 left-1/2 -translate-y-[40%] -translate-x-1/2 bg-[#BB0041] w-7 h-7 flex justify-center items-center rounded-full lg:w-12 lg:h-12 cursor-pointer" onClick={()=>{
        setIsHeart(!isHeart)
      }}>
      <FaHeart className={`text-lg ${isHeart ? 'text-[#ED6ABF]' : 'text-accent'}`} />
      </span>
  </div>
  </>
  );
};

export default HeroSlider;
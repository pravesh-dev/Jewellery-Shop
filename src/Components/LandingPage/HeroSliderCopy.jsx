import React from "react";
import bottomLine from "../../Assets/LandingPage/Hero/bottom-line.svg";
import { FaHeart } from "react-icons/fa";
import img1 from "../../Assets/LandingPage/Hero/img1.jpg";
import img2 from "../../Assets/LandingPage/Hero/img2.jpg";
import img3 from "../../Assets/LandingPage/Hero/img3.jpg";

function HeroSlider() {
  const images = [img1, img2, img3];
  return (
    <div className="w-full h-80 border border-red-700 lg:h-[25rem] relative flex flex-col justify-between overflow-hidden">
      <div className="w-full h-[80%] flex justify-center items-center">
        <div className="w-[80%] h-full bg-red-700 flex items-center gap-48 justify-center">
          {images.map((image, idx) => {
            return (
              <div className="w-80 h-52 rounded-md overflow-hidden">
              <img
                src={image}
                className="w-full h-full object-cover"
                loading="lazy"
                alt="image"
                />
                </div>
            );
          })}
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

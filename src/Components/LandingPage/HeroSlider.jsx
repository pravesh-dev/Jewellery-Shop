import React from "react";
import bottomLine from "../../Assets/LandingPage/Hero/bottom-line.svg";
import { FaHeart } from "react-icons/fa";

function HeroSlider() {
  return (
    <div className="w-full h-80 border border-red-700 lg:h-[25rem] relative flex flex-col justify-between">
      <div></div>
      <div className="relative">
        <img src={bottomLine} className="w-full" alt="bottom line image" />
        <span className="absolute top-0 left-1/2 -translate-y-[40%] -translate-x-1/2 bg-secondary w-7 h-7 flex justify-center items-center rounded-full lg:w-12 lg:h-12">
          <FaHeart className="text-accent text-lg" />
        </span>
      </div>
    </div>
  );
}

export default HeroSlider;

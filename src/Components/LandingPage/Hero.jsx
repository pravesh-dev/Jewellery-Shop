import React from "react";
import HeroSlider from "./HeroSlider";
import rope from "../../Assets/LandingPage/Hero/rope.svg";

function Hero() {
  return (
    <section className="w-full h-screen flex flex-col gap-10 justify-center items-center relative">
      <h1 className="h-[46%] text-primary text-2xl tracking-wider text-center font-bellefair content-center relative md:text-4xl lg:pt-28 lg:text-6xl">
        Exquisite Jewellery. <br /> Reserved for the{" "}
        <span className="border border-secondary lg:border-2 px-1 relative">
          Exceptional.
          <span className="w-1 h-1 bg-secondary absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 lg:w-2 lg:h-2"></span>
          <span className="w-1 h-1 bg-secondary absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 lg:w-2 lg:h-2"></span>
          <span className="w-1 h-1 bg-secondary absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 lg:w-2 lg:h-2"></span>
          <span className="w-1 h-1 bg-secondary absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 lg:w-2 lg:h-2"></span>
        </span>
        <img
          src={rope}
          className="absolute top-56 left-36 w-28 -rotate-45 md:left-60 md:top-60 md:w-32 lg:left-[92%] lg:top-[20rem] lg:w-44 lg:rotate-0"
          alt="rope like arrow image"
          loading="lazy"
        />
        <div className="border-2 border-dark w-max px-2 py-5 absolute top-52 left-4 rounded-[2.2rem] md:left-20 lg:left-[103%] lg:top-44 lg:px-1 xl:left-[115%]">
          <h2 className="text-secondary text-lg font-lora lg:mb-2">100%</h2>
          <p className="text-[1rem] leading-6 flex flex-col items-center uppercase font-mulish">
            #Perfect <b className="font-lora">Quality</b>
          </p>
        </div>
      </h1>
      <HeroSlider />
    </section>
  );
}

export default Hero;

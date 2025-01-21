import React from "react";
import img1 from "../../Assets/AboutPage/about1.jpg";
import img2 from "../../Assets/AboutPage/about2.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function AboutMore() {
  return (
    <div className="py-10 px-2 md:py-20 xl:px-16">
      <div className="w-full h-72 rounded-sm lg:h-80 lg:rounded-md mx-auto">
        <img
          src={img1}
          className="w-full h-full object-cover rounded-sm lg:rounded-md object-[0%_40%]"
          loading="lazy"
          alt="background image related to about us"
        />
      </div>
      <div className="mt-10 flex flex-col gap-10 md:flex-row md:mt-20 md:items-center">
        <div className="md:w-1/2 md:px-5">
          <div>
            <RiDoubleQuotesL className="text-sm md:text-2xl xl:text-4xl" />
          </div>
          <h2 className="font-lora text-dark text-lg relative px-4 font-semibold md:text-2xl md:px-10 xl:text-[2rem] xl:leading-10 xl:px-12">
            Venenatis sagittis neque non lectus mi tortor neque proin massa. Et
            eu dictum orci.{" "}
          </h2>
          <div className="w-full flex justify-end">
            <RiDoubleQuotesR className="text-sm md:text-2xl xl:text-4xl" />
          </div>
          <h3 className="font-bellefair text-dark px-4 text-sm md:text-base md:px-10 xl:text-2xl xl:px-12">Pravesh Saini, Jeweller</h3>
        </div>
        <div className="w-full h-60 rounded-sm md:w-1/2 lg:h-72 xl:h-80 lg:rounded-md">
          <img src={img2} className="w-full h-full object-cover rounded-sm lg:rounded-md" loading="lazy" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default AboutMore;

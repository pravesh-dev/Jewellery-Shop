import React from "react";
import ShopByCategories from "./ShopByCategories";
import ring from '../../Assets/LandingPage/Shopby/ring.png'

function ShopBy() {
  return (
    <section className="w-full font-bellefair px-2 py-5 md:px-16 md:py-10 lg:py-28 xl:flex flex-col items-center relative overflow-x-hidden">
      <h1 className="text-primary text-3xl mb-2 lg:text-4xl xl:text-6xl xl:w-[70rem]">
      Shop By Category
      </h1>
      <p className="text-dark text-xl leading-5 sm:w-[35rem] lg:text-2xl lg:w-[40rem] xl:text-[2.3rem] xl:leading-10 xl:w-[70rem] xl:pr-24">
      Find your perfect match – browse by category to uncover luxury crafted for every occasion.
      </p>
      <img src={ring} className="hidden md:block absolute left-0 top-28 w-32 lg:w-44 lg:top-64 lg:-left-10 xl:-left-14" alt="ring image" />
      <img src={ring} className="w-20 absolute right-0 top-0 scale-x-[-1] sm:w-32 lg:w-44 lg:top-16 xl:top-24" alt="ring image" />
      <ShopByCategories />
    </section>
  );
}

export default ShopBy;

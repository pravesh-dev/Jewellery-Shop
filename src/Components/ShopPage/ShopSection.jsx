import React from "react";
import ShopItems from "./ShopItems";
import SortBy from "./SortBy";
import FilterSection from "./FilterSection";

function ShopSection() {
  return (
    <div className="w-full px-2 py-5 md:flex lg:justify-center xl:px-16 xl:justify-between lg:pt-14 lg:pb-20">
      <div>
        <FilterSection />
      </div>
      <div className="md:flex flex-col lg:w-[50rem] lg:px-2 xl:w-[75%]">
        <SortBy />
        <ShopItems />
      </div>
    </div>
  );
}

export default ShopSection;

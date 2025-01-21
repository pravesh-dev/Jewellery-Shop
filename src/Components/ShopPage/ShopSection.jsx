import React from "react";
import ShopItems from "./ShopItems";
import SortBy from "./SortBy";
import FilterSection from "./FilterSection";

function ShopSection() {
  return (
    <div className="w-full px-2 py-5 md:flex xl:px-16 lg:justify-between lg:pt-14 lg:pb-20">
      <div>
        <FilterSection />
      </div>
      <div className="md:flex flex-col lg:w-[48rem] lg:px-2 xl:w-[66.5vw] xl:px-0">
        <SortBy />
        <ShopItems />
      </div>
    </div>
  );
}

export default ShopSection;

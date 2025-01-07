import React from "react";
import ShopItems from "./ShopItems";
import SortBy from "./SortBy";
import FilterSection from "./FilterSection";

function ShopSection() {
  return (
    <div className="w-full border border-red-700 px-2">
      <div>
        <FilterSection />
      </div>
      <div>
        <SortBy />
        <ShopItems />
      </div>
    </div>
  );
}

export default ShopSection;

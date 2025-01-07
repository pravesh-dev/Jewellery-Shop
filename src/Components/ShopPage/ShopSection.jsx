import React from "react";
import ShopItems from "./ShopItems";
import SortBy from "./SortBy";

function ShopSection() {
  return (
    <div className="w-full border border-red-700 px-2">
      <div>{/* shop filter */}</div>
      <div>
        <SortBy />
        <ShopItems />
      </div>
    </div>
  );
}

export default ShopSection;

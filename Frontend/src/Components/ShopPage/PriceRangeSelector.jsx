import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function valuetext(value) {
  return `${value}`;
}

export default function PriceRangeSelector() {
  const { currency, priceRange, setPriceRange } = useContext(ShopContext);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue)
  };

  return (
    <div className="w-full px-7 lg:mt-3 lg:px-5">
      <Box sx={{ width: "100%" }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={priceRange}
          onChange={handleChange}
          min={20}
          max={99999}
          step={100} // Added step to increase or decrease by 10
          getAriaValueText={valuetext}
          sx={{
            "& .MuiSlider-track": {
              backgroundColor: "#006400",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#868686",
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "#D4AF37",
            },
          }}
        />
      </Box>
      <div className="w-full flex justify-between items-center lg:gap-x-2">
        <div className="w-[50%] lg:flex flex-col gap-y-1">
            <h2 className="text-xs lg:text-[1.1rem]">From</h2>
            <span className="border border-dark text-black text-stroke-xs text-xs px-3 py-1 rounded-full lg:text-[0.87rem]">{currency} {priceRange[0]}</span>
        </div>
        <div className="w-[50%] lg:flex flex-col gap-y-1">
            <h2 className="text-xs lg:text-[1.1rem]">To</h2>
            <span className="border border-dark text-black text-stroke-xs text-xs px-3 py-1 rounded-full lg:text-[0.87rem]">{currency} {priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

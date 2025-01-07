import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function PriceRangeSelector() {
  const [value, setValue] = React.useState([20, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <div className="w-full px-7">
      <Box sx={{ width: "100%" }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          min={20}
          max={200}
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
      <div className="w-full flex justify-between items-center">
        <div className="w-[45%]">
            <h2 className="text-xs">From</h2>
            <span className="border border-dark text-xs px-5 py-1 rounded-full">$ {value[0]}</span>
        </div>
        <div className="w-[45%]">
            <h2 className="text-xs">To</h2>
            <span className="border border-dark text-xs px-5 py-1 rounded-full">$ {value[1]}</span>
        </div>
      </div>
    </div>
  );
}

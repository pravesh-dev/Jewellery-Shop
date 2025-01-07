import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRangeSelector() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          '& .MuiSlider-track': {
            backgroundColor: '#006400',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#868686',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: '#D4AF37',
          },
        }}
      />
    </Box>
  );
}

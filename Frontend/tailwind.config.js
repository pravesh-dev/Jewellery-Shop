/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006400',
        secondary: '#D4AF37',
        accent: '#FFFFF0',
        dark: '#333333',
      },
      fontFamily: {
        'bellefair': 'bellefair',
        'mulish': 'mulish',
        'lora': 'lora',
        'Cormorant': 'Cormorant',
      },
      screens: {
        xs: '430px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#006400',
          'text-stroke-width': '1px',
          'text-stroke-color': '#006400',
          'text-fill-color': 'transparent',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-width': '0.3px',
          '-webkit-text-stroke-color': '#000',
          'text-stroke-width': '1px',
          'text-stroke-color': '#000',
          'text-fill-color': 'transparent',
        },
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
          'text-stroke-width': '1px',
        },
        '.text-stroke-xs': {
          '-webkit-text-stroke-width': '0.3px',
          'text-stroke-width': '0.3px',
        },
        '.text-stroke-0': {
          '-webkit-text-stroke-width': '0px',
          'text-stroke-width': '0px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

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
        '.text-stroke-width-2': {
          '-webkit-text-stroke-width': '2px',
          'text-stroke-width': '2px',
        },
        '.text-stroke-color-secondary': {
          '-webkit-text-stroke-color': '#D4AF37',
          'text-stroke-color': '#D4AF37',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

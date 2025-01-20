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
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      textStrokeColor: theme => theme('colors'),
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': 'var(--tw-text-stroke-width, 1px)',
          '-webkit-text-stroke-color': 'var(--tw-text-stroke-color, #006400)',
          'text-stroke-width': 'var(--tw-text-stroke-width, 1px)',
          'text-stroke-color': 'var(--tw-text-stroke-color, #006400)',
          'text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
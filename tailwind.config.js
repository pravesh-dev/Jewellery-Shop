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
    },
  },
  plugins: [],
}
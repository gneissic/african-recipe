/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: `Lato sans-serif`,
        nun: `Nunito Sans sans-serif`,
        pops: `Poppins, sans-serif`,
        ken: `Kenia, sans-serif`,
      },
      screens: {
        sw400: '400px', // Screen Width 400px
        sw540: '540px',
        sw500: '500px',
        sw800: '800px',
        sw1200: '1200px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "lato" : `Lato sans-serif`,
        "nun": `Nunito Sans sans-serif`,
        "pops": `Poppins, sans-serif`,
         "ken" :    `Kenia, sans-serif`,
 
       },
    },
  },
  plugins: [],
}
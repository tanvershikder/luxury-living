/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      buttoncolor:'#251D58',
      headercolor:'#1F1632',
      white:"#FFFFFF",
      bgcolor:'#E5E5E5'

    },
  },
  plugins: [require("daisyui")],
}

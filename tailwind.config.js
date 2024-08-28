/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:"#000814",
        blue1:"#001d3d",
        blue2:"#0582ca",
        yellow1:"#ffc300",
        yellowBright:"#ffd60a"
      }
    },
  },
  plugins: [],
}


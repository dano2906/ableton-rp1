/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors:{
        yellow: "#fbffa7",
        purple: "#b1c5ff",
        lavender: "#d5b3ff",
        orange: "#FD5948",
        blue: "#0000ff",
        green: "#b6ffc0"
      },
      fontFamily: {
        'futura':["Futura","sans-serif"],
        'futura-medium':["FuturaMedium","sans-serif"],
        'futura-medium-oblique':["FuturaMediumOblique","sans-serif"],
      }
    },
  },
  plugins: [],
}


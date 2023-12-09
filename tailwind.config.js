/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {  
      screens:{
        width:'1440px',
      },
      colors: {
        'blue': '#3470FF',
        "darckBlue": '#0B44CD'
      },
  
    },
  },


  plugins: [],
}


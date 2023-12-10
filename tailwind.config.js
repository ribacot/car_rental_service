/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    // fontFamily: {
    //   manrope: ['Manrope', 'sans-serif'],
    // },
    fontFamily: {
      inter:['"Inter",sans-serif'],
      sans: [
        '"Manrope", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },

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


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ['Dancing Script', "sans-serif"],
        anton: ['Anton', 'sans-serif'],
      },
      animation: {
        '-webkit-animation': '3s ease 0s normal forwards 1 fadein',
        'transition': 'all 3x easy-in-out',
      },
      keyframes: {
        fadein: {
            '0%': 'opacity:0;',
            '66%': 'opacity:0.5', 
            '100%':'opacity:1',
          },
        }
      }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite/plugin'),
  ],
}
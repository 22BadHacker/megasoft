const { body } = require('framer-motion/client')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        colors: {
            creamy: 'var(--primary)',
            orangee: 'var(--secondary)',
            orangeLight: 'var(--secondary-orange)',
            lightBlue: 'var(--light-blue)',
            
        },
    },
    screens:{
      'lg': '954px',
      // 'xl': '1200px',
      'md': '768px',
      'sm': '568px',
      
    },
  },
  plugins: [],
}
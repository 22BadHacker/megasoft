const { body } = require('framer-motion/client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            novea: 'var(--novea)',
            sign: 'var(--sign)',
            Poppins: 'var(--poppins)'
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
      'lgg': '850px',
      // 'xl': '1200px',
      'md': '768px',
      'sm': '568px',
      
    },
  },
  plugins: [],
}
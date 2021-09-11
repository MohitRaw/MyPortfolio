const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      opacity:'opacity',
      transparent: 'transparent',
      current: 'currentColor',
      Cyan:colors.cyan,
      white:colors.white,
      warmGray:colors.warmGray
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

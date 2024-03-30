const animate = require("tailwindcss-animate")
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  
  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}',
	],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      danger: '#e6594c',
      notice: '#d2cf35',
      accept: '#7ae54c',
      accent: '#4c64e5',

      'theme': {
        DEFAULT: '#c7e64c',
        pale: '#e7fa9e',
        dark: '#9dc20a',
        gray: '#c7cab9',
        grid: '#e4e7da',
        black: '#2c2e23',
        light: '#f6f7f3',
        verylight: '#f9faf6',
        darklight: '#a8aba0',
        gridlight: '#e4e7da',
        100: '#252d06',
        200: '#4a5a0d',
        300: '#6f8613',
        400: '#94b319',
        500: '#b8df1f',
        600: '#c7e64c',
        700: '#d5ec79',
        800: '#e3f2a6',
        900: '#f1f9d3',
        950: '#f8fcea',
        980: '#fcfef7'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Sans-serif'],
        'display': ['Stick No Bills', 'Arial', 'Sans-serif'],
      },
      boxShadow: {
        'line': '0 -2px 0 #e4e7da',
        'line-active': '0 -2px 0 #c3f20c',
        'edge': '0 0 0 1px #c7cab9',
        'edge-theme': '0 0 0 1px #bbde3c'
      },
      keyframes: {
        
      },
      animation: {
        
      },
    },
  },
  plugins: [animate],
}
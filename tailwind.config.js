const animate = require("tailwindcss-animate")
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  prefix: "",
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
        dark: '#526205',
        gray: '#2c2e23',
        grid: '#e4e7da',
        black: '#1c1d16',
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
      colors: {
        border: '#1c1d16',
        input: '#1c1d16',
        ring: '#1c1d16',
        background: '#fff',
        foreground: '#1c1d16',
        primary: {
          DEFAULT: '#c7e64c',
          foreground: '#1c1d16',
        },
        secondary: {
          DEFAULT: '#c7e64c',
          foreground: '#1c1d16',
        },
        destructive: {
          DEFAULT: '#e6594c',
          foreground: '#fff',
        },
        muted: {
          DEFAULT: '#c7e64c',
          foreground: '#1c1d16',
        },
        accent: {
          DEFAULT: '#1c1d16',
          foreground: '#fff',
        },
        popover: {
          DEFAULT: '#fff',
          foreground: '#1c1d16',
        },
        card: {
          DEFAULT: '#fff',
          foreground: '#1c1d16',
        },
      },
      borderRadius: {
        xl: 'calc(0px + 4px)',
        lg: '0px',
        md: 'calc(0px - 2px)',
        sm: 'calc(0px - 4px)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}
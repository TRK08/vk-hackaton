/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#F9F9F9',
          600: '#437EF7'
        },
        gray: {
          300: '#2E3545',
          400: '#333B48',
          600: '#2C3444',
          800: '#252D3C',
          900: '#1C2534',
          950: '#151B28',
        },
        neutral: {
          800: '#A5ACBA'
        }
      },
      borderWidth: {
        1: '1px',
        3: '3px'
      }
    },
  },
  plugins: [],
}

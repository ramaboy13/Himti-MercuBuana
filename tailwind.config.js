/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#180D2A',
        secondary: '#7E3874',
        accent: '#7B4399',
        'main-1': '#180D2A',
        'main-2': '#512B90',
        'bg-2': '#2C2B31',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
      },
    },
  },
  plugins: [require('preline/plugin')],
}

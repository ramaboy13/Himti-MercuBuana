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
        'main-3': '#2C2B31',
        'main-1': '#180D2A',
        'main-2': '#512B90',
        'main-4' : '#7f3e78',
        'main-5': '#5D2B8C',
        'bg-2': '#2C2B31',
        'member-card': '#4A0070',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
      },
    },
  },
  plugins: [require('preline/plugin')],
}

// @type {import('tailwindcss').Config}
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      textColor: {
        white: '#cdd6f4',
      },
      colors: {
        'primary': '#180D2A',
        'secondary': '#7E3874',
        'accent': '#D287C0',
        'main-2': '#B66AA4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
      },
    },
  },
  plugins: [require('preline/plugin')],
}

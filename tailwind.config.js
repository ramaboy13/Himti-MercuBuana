/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-1': '#180D2A',
        'text-main-1': '#7B4399',
        'accent-7': '#333',
      },
    },
  },
  plugins: [require('preline/plugin')],
}

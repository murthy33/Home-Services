/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        bisque: '#ffe4c4',
        phonepe:'#833AB4',
        phonepeHover:'#6A2C93',
      },
      height: {
        '300px': '300px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
}
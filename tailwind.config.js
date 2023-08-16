/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            primary: 'rgba(22, 22, 22, 0.89)',
          },
          shadow:{
            secondary: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

          } 
      },
    },
    plugins: [],
  };
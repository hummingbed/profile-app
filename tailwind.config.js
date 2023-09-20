/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
   theme: {
      extend: {
        colors: {
          primary: '#FF6363',
          secondary: {
            100: '#E2E205',
            200: '#888883'
          },
        },
        fontFamily: {
          'nunito': ['Nunito'],
          
        },
        screens: {
          'xm': '250px',
          
        },
        width: {
          'user-card': '300px', // Adjust the width as per your preference
        },
      },
    },
    plugins: [],
  }
  
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#DAC0A3',
        'primary2': '#252B48',
        'button1': '#102C57',
        'button2':'#dc2626',
        'button3': '#84cc16',
      },
      backgroundImage: {
        'spider1': "url('/img/bg1.jpg')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f43f5e",
        secondary: "#3b82f6",
        tridary: "#0f172a",
        fordary: "#eab308",
        fivedary: "#84cc16",
        sixdary: "#c026d3",
        sevendary: "#f97316",
      },
      backgroundImage:{
        'welcome': "url('img/bglanding.png')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"], // Esto le dice: "buscá clases en todos los html y js"
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24",
        secondary: "#1F2937",
        "background-light": "#FFFFFF",
        "text-main": "#1F2937",
        "text-muted": "#4B5563",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
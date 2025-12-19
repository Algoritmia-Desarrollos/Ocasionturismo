/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24", // Tu amarillo
        secondary: "#1F2937", // Tu gris oscuro
        "background-light": "#FFFFFF",
        "text-main": "#1F2937",
        "text-muted": "#4B5563",
      },
      fontFamily: {
        // Aquí configuramos la fuente que pediste en el HTML
        display: ['"Anton"', "sans-serif"],
        body: ['"Montserrat"', "sans-serif"],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
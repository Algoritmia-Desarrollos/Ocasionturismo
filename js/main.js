/* --- Configuración de Tailwind --- */
tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#FBBF24", // Amarillo GT del logo
          secondary: "#1F2937", 
          "background-light": "#F9FAFB",
          "background-dark": "#111827",
          "card-light": "#FFFFFF",
          "card-dark": "#1F2937",
          "text-light": "#1F2937",
          "text-dark": "#F3F4F6",
        },
        fontFamily: {
          display: ["Anton", "sans-serif"],
          body: ["Montserrat", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0.5rem",
          "xl": "1rem",
          "2xl": "1.5rem",
        },
      },
    },
};

/* --- Lógica del Sitio --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidad Dark Mode Toggle
    const toggleBtn = document.getElementById('darkModeToggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

});
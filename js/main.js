// 1. Configuración de Tailwind para los colores de Ocasión Turismo
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
        colors: {
            primary: "#FBBF24", // Amarillo del Logo
            secondary: "#1F2937", // Gris oscuro
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

// 2. Lógica para el botón de Modo Oscuro (Dark Mode)
document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("darkModeBtn");
    
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");
        });
    }
});
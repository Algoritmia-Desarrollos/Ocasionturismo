document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll Effect (Sombra al bajar) ---
    // Esperamos un poco a que se cargue el componente
    setTimeout(() => {
        const nav = document.querySelector('nav');
        if(nav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    nav.classList.add('shadow-md');
                } else {
                    nav.classList.remove('shadow-md');
                }
            });
        }
    }, 100);
});
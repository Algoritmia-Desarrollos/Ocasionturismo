document.addEventListener('DOMContentLoaded', () => {
    // 1. Año automático
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Navbar Scroll Effect
    const nav = document.getElementById('navbar-container'); 
    // Nota: Si usas un componente inyectado, asegúrate de aplicar la clase al elemento correcto.
    // Asumiremos que el header sticky es controlado por CSS o este script si hay una barra fija.
    
    // 3. Inicializar Galería
    if(document.getElementById('gallery-grid')) {
        initGallery();
    }

    // 4. Formulario AJAX (Formspree)
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            
            // Botón en estado de carga
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Enviando...';
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');

            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = "¡Gracias! Tu mensaje fue enviado con éxito.";
                    status.classList.remove('hidden', 'text-red-400');
                    status.classList.add('text-green-400');
                    form.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Hubo un problema al enviar el formulario.";
                    }
                    status.classList.remove('hidden', 'text-green-400');
                    status.classList.add('text-red-400');
                }
            } catch (error) {
                status.innerHTML = "Error de conexión. Intenta nuevamente.";
                status.classList.remove('hidden', 'text-green-400');
                status.classList.add('text-red-400');
            } finally {
                // Restaurar botón
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-70', 'cursor-not-allowed');
            }
        });
    }
});

// --- LÓGICA GALERÍA ---
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return; 

    // Aquí mantengo tus imágenes, asegúrate que las rutas "./img/..." sean correctas según tu estructura de carpetas
    const allImages = [
        { src: 'img/1.png', category: 'salinas', alt: 'Atardecer en Salinas' },
        { src: 'img/1-5.webp', category: 'salinas', alt: 'Parvas de Sal' },
        { src: 'img/1-6.webp', category: 'salinas', alt: 'Cena bajo las estrellas' },
        { src: 'img/2.png', category: 'fuerte', alt: 'Camión 6x6 Fuerte' },
        { src: 'img/2-4.webp', category: 'fuerte', alt: 'Subiendo médanos' },
        { src: 'img/3.png', category: 'safari', alt: 'Camión Safari' },
        { src: 'img/3-4.webp', category: 'safari', alt: 'Villa Pulperos' },
        { src: 'img/4.png', category: 'city', alt: 'Punta Perdiz' },
        { src: 'img/4-4.webp', category: 'city', alt: 'Aguas Turquesas' },
    ];
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    const tabButtons = document.querySelectorAll('.gallery-tab');
    let currentCategory = 'salinas';
    let visibleCount = 8;

    function renderGallery() {
        grid.innerHTML = '';
        const filteredImages = allImages.filter(img => img.category === currentCategory);
        const imagesToShow = filteredImages.slice(0, visibleCount);

        imagesToShow.forEach((img, index) => {
            const div = document.createElement('div');
            // Agrego fade-in escalonado para efecto visual
            div.className = 'relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer bg-gray-100 animate-fade-in-up';
            div.style.animationDelay = `${index * 50}ms`;
            
            div.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p class="text-white font-display uppercase tracking-widest text-sm text-center px-2 font-bold">${img.alt}</p>
                </div>
            `;
            grid.appendChild(div);
        });
        
        if (loadMoreBtn) {
            if (visibleCount >= filteredImages.length) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Reset estilos
            tabButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-gray-900', 'border-transparent');
                b.classList.add('border-white/30', 'text-white');
            });
            // Activar botón clickeado
            e.target.classList.remove('border-white/30', 'text-white');
            e.target.classList.add('bg-primary', 'text-gray-900', 'border-transparent');
            
            currentCategory = e.target.dataset.category;
            visibleCount = 8;
            renderGallery();
        });
    });

    if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 4;
            renderGallery();
        });
    }
    renderGallery();
}
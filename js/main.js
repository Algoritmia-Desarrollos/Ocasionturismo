// js/main.js

// 1. Importar Componentes Atómicos
import renderNavbar from './components/navbar.js';
import renderFooter from './components/footer.js';
import renderBookingModal from './components/booking-modal.js';

// Estado global para la excursión seleccionada
let currentExcursion = '';

document.addEventListener('DOMContentLoaded', () => {
    // --- A. RENDERIZADO DE COMPONENTES ---
    renderNavbar('navbar-container');
    renderFooter('footer-container');
    
    if(document.getElementById('booking-modal-container')) {
        renderBookingModal('booking-modal-container');
    }

    // --- B. INICIALIZAR FUNCIONALIDADES ESPECÍFICAS ---
    
    // 1. Galería (Solo si existe)
    if(document.getElementById('gallery-grid')) {
        initGallery();
    }

    // 2. Observer para el Botón Flotante
    const stickyFooter = document.getElementById('sticky-footer');
    const targetCard = document.getElementById('booking-card');

    if (stickyFooter && targetCard) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // --- CASO: VEO LA TARJETA (OCULTAR BOTÓN FLOTANTE) ---
                    // 1. Le sacamos la clase que lo mantiene visible
                    stickyFooter.classList.remove('translate-y-0');
                    // 2. Le agregamos la clase que lo baja (y opacity para suavizar)
                    stickyFooter.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
                } else {
                    // --- CASO: NO VEO LA TARJETA (MOSTRAR BOTÓN FLOTANTE) ---
                    // 1. Sacamos las clases de oculto
                    stickyFooter.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
                    // 2. Volvemos a ponerlo en su lugar
                    stickyFooter.classList.add('translate-y-0');
                }
            });
        }, { threshold: 0.1 }); // Se dispara al ver apenas un 10% de la tarjeta

        observer.observe(targetCard);
    }

    // --- C. LÓGICA DEL PRELOADER ---
    handlePreloader();
});

// --- LÓGICA DE RESERVAS (GLOBAL) ---
window.openBookingModal = function(excursionName) {
    currentExcursion = excursionName;
    const modal = document.getElementById('booking-modal');
    
    if(modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // Pequeño timeout para permitir que el navegador procese el display:flex antes de la transición
        setTimeout(() => {
            const inner = modal.querySelector('div'); // Selecciona la tarjeta blanca
            if(inner) {
                inner.classList.remove('scale-95', 'opacity-0');
                inner.classList.add('scale-100', 'opacity-100');
            }
        }, 10);
    } else {
        console.error("El modal no se cargó correctamente.");
    }
};

window.closeBookingModal = function() {
    const modal = document.getElementById('booking-modal');
    if(modal) {
        const inner = modal.querySelector('div');
        if(inner) {
            inner.classList.remove('scale-100', 'opacity-100');
            inner.classList.add('scale-95', 'opacity-0');
        }
        // Esperamos la duración de la transición (300ms) antes de ocultarlo
        setTimeout(() => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }, 300);
    }
};

window.sendToWhatsapp = function() {
    const dateInput = document.getElementById('modal-date');
    const adultsInput = document.getElementById('modal-adults');
    const minorsInput = document.getElementById('modal-minors');

    const date = dateInput ? dateInput.value : 'Sin fecha';
    const adults = adultsInput ? adultsInput.value : '2';
    const minors = minorsInput ? minorsInput.value : '0';

    const text = `Hola! Quiero reservar *${currentExcursion}*.\n\n📅 Fecha estimada: ${date}\n👥 Adultos: ${adults}\n👶 Menores: ${minors}\n\nQuedo a la espera de confirmación y datos para el pago.`;
    
    const phone = "5492920293722"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
    window.closeBookingModal();
};

// Cierra el modal si se hace click en el fondo oscuro (pero no en la tarjeta)
window.addEventListener('click', (e) => {
    const modal = document.getElementById('booking-modal');
    if (modal && e.target === modal) {
        window.closeBookingModal();
    }
});

// --- LÓGICA DE LA GALERÍA ---
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return; 

    const allImages = [
        { src: 'img/Salinas del gualicho (1).jpeg', category: 'salinas', alt: 'Inmensidad del Salar' },
        { src: 'img/Salinas del gualicho (3).jpeg', category: 'salinas', alt: 'Atardecer en Salinas' },
        { src: 'img/salinas2.jpg', category: 'salinas', alt: 'Inmensidad del Salar' },
        { src: 'img/salinas3.webp', category: 'salinas', alt: 'Atardecer en Salinas' },

        { src: 'img/Fuerte argentino (1).jpeg', category: 'fuerte', alt: 'Expedición 4x4' },
        { src: 'img/Fuerte argentino (2).jpeg', category: 'fuerte', alt: 'Meseta del Fuerte' },
        { src: 'img/Fuerte argentino (3).jpeg', category: 'fuerte', alt: 'Cueva El Sótano' },
        { src: 'img/Fuerte argentino (4).jpeg', category: 'fuerte', alt: 'Vistas Panorámicas' },
        { src: 'img/Fuerte argentino (5).jpeg', category: 'fuerte', alt: 'Aventura Off-road' },
        { src: 'img/Fuerte argentino (6).jpeg', category: 'fuerte', alt: 'Restinga y Fauna' },
        { src: 'img/Fuerte argentino (7).jpeg', category: 'fuerte', alt: 'Trekking en el Fuerte' },

        { src: 'img/safari de la costa (1).jpeg', category: 'safari', alt: 'Safari 4x4' },
        { src: 'img/safari de la costa (2).jpeg', category: 'safari', alt: 'Cañadón de las Ostras' },
        { src: 'img/safari de la costa (3).jpeg', category: 'safari', alt: 'Piedras Coloradas' },
        { src: 'img/safari de la costa (4).jpeg', category: 'safari', alt: 'Costa Salvaje' },
        { src: 'img/safari de la costa (5).jpeg', category: 'safari', alt: 'Exploración Costera' },
        { src: 'img/safari de la costa (6).jpeg', category: 'safari', alt: 'Naturaleza Pura' },

        { src: 'img/perdices3.jpg', category: 'circuito', alt: 'Punta Perdices' },
        { src: 'img/punta-perdices.webp', category: 'circuito', alt: 'Aguas Turquesas' },
        { src: 'img/conchillas2.jpg', category: 'circuito', alt: 'Playas de las Conchillas' },
        { src: 'img/playadelasconchillas.jpg', category: 'circuito', alt: 'Playas de las Conchillas' },
    ];
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    const tabButtons = document.querySelectorAll('.gallery-tab');
    let currentCategory = 'salinas';
    let visibleCount = 8; 

    function renderGallery() {
        grid.innerHTML = '';
        const filteredImages = allImages.filter(img => img.category === currentCategory);
        const imagesToShow = filteredImages.slice(0, visibleCount);
        
        const fragment = document.createDocumentFragment();

        imagesToShow.forEach((img, index) => {
            const div = document.createElement('div');
            div.className = 'relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer bg-gray-100 animate-fade-in-up focus:outline-none';
            div.setAttribute('tabindex', '0');
            div.style.animationDelay = `${index * 50}ms`;
            
            div.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-active:scale-125 group-focus:scale-125" loading="lazy">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            `;
            fragment.appendChild(div);
        });
        grid.appendChild(fragment);
        
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
            // Resetear estilos de todos los botones
            tabButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-gray-900', 'border-transparent', 'hover:bg-yellow-400');
                b.classList.add('border-white/30', 'text-white', 'hover:bg-white/10');
            });
            // Activar botón clickeado
            e.target.classList.remove('border-white/30', 'text-white', 'hover:bg-white/10');
            e.target.classList.add('bg-primary', 'text-gray-900', 'border-transparent', 'hover:bg-yellow-400');
            
            currentCategory = e.target.dataset.category;
            visibleCount = 8; // Resetear contador al cambiar categoría
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

// --- FUNCIÓN DE PRELOADER ---
function handlePreloader() {
    const preloader = document.getElementById('preloader');
    const heroImage = document.getElementById('portada-hero');

    const removePreloader = () => {
        if (!preloader) return;
        preloader.classList.add('opacity-0');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    };

    const fontsReady = Promise.all([
        document.fonts.ready,
        document.fonts.load('1em "Material Symbols Outlined"')
    ]).catch((e) => {
        console.warn('Font loading issue:', e);
        return true;
    });

    const imageReady = new Promise((resolve) => {
        if (!heroImage) return resolve();
        if (heroImage.complete) return resolve();
        heroImage.onload = resolve;
        heroImage.onerror = resolve;
    });

    const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 4000));

    Promise.race([
        Promise.all([fontsReady, imageReady]),
        safetyTimeout
    ]).finally(removePreloader);
}
// js/main.js

// 1. Importar Componentes Atómicos
import renderNavbar from './components/navbar.js';
import renderFooter from './components/footer.js';
import renderBookingModal from './components/booking-modal.js';

// Estado global para la excursión seleccionada
let currentExcursion = '';

document.addEventListener('DOMContentLoaded', () => {
    // 2. Montar la Estructura Base
    renderNavbar('navbar-container');
    renderFooter('footer-container');
    
    // 3. Montar Modal de Reservas (Solo si el contenedor existe)
    if(document.getElementById('booking-modal-container')) {
        renderBookingModal('booking-modal-container');
    }

    // 4. Inicializar Galería (Solo si existe en el Home)
    if(document.getElementById('gallery-grid')) {
        initGallery();
    }
});

// --- LÓGICA DE RESERVAS (GLOBAL) ---
window.openBookingModal = function(excursionName) {
    currentExcursion = excursionName;
    const modal = document.getElementById('booking-modal');
    
    if(modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            const inner = modal.querySelector('div');
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
    
    // 📞 NUEVO NÚMERO ACTUALIZADO
    const phone = "5492920293722"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
    window.closeBookingModal();
};

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

    // Aquí cambiamos 'city' por 'circuito'
    const allImages = [
        { src: 'img/Salinas del gualicho (1).jpeg', category: 'salinas', alt: 'Atardecer en Salinas' },
        { src: 'img/Salinas del gualicho (2).jpeg', category: 'salinas', alt: 'Inmensidad del Salar' },
        { src: 'img/Salinas del gualicho (3).jpeg', category: 'salinas', alt: 'Brindis en el Gualicho' },
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
        { src: 'img/circuito-hero.webp', category: 'circuito', alt: 'Punta Perdices' },
        { src: 'img/circuito-hero.webp', category: 'circuito', alt: 'Aguas Turquesas' },
        { src: 'img/circuito-hero.webp', category: 'circuito', alt: 'Playa Las Conchillas' },
        { src: 'img/circuito-hero.webp', category: 'circuito', alt: 'Puerto del Este' },
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
            div.className = 'relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer bg-gray-100 animate-fade-in-up';
            div.style.animationDelay = `${index * 50}ms`;
            
            div.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p class="text-white font-display uppercase tracking-widest text-sm text-center px-2 font-bold select-none">${img.alt}</p>
                </div>
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
            tabButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-gray-900', 'border-transparent');
                b.classList.add('border-white/30', 'text-white');
            });
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

// --- OPTIMIZACIÓN DEL PRELOADER ---
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    const heroImage = document.getElementById('portada-hero');

    // Función para ocultar el preloader
    const removePreloader = () => {
        if (!preloader) return;
        preloader.classList.add('opacity-0'); // Inicia desvanecimiento
        setTimeout(() => {
            preloader.style.display = 'none'; // Lo quita del DOM
        }, 500); // Espera a que termine la transición CSS
    };

    // Promesa 1: Esperar a que las fuentes e iconos estén listos
    const fontsReady = document.fonts.ready;

    // Promesa 2: Esperar a que la imagen de portada cargue (si existe)
    const imageReady = new Promise((resolve) => {
        if (!heroImage) return resolve(); // Si no hay imagen, seguimos
        if (heroImage.complete) return resolve(); // Si ya cargó desde caché
        heroImage.onload = resolve;
        heroImage.onerror = resolve; // Si falla, no bloqueamos la web
    });

    // Seguridad: Si por algo tarda más de 4 segs, abrimos igual (fallback)
    const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 4000));

    // Cuando TODO esté listo (o salte el tiempo de seguridad), abrimos
    Promise.race([
        Promise.all([fontsReady, imageReady]),
        safetyTimeout
    ]).then(removePreloader);
});
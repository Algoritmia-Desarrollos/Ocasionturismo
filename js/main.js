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
        { src: 'img/1.png', category: 'salinas', alt: 'Atardecer en Salinas' },
        { src: 'img/1-5.webp', category: 'salinas', alt: 'Parvas de Sal' },
        { src: 'img/1-6.webp', category: 'salinas', alt: 'Cena bajo las estrellas' },
        { src: 'img/1-7.webp', category: 'salinas', alt: 'Brindis Mágico' },
        { src: 'img/2.png', category: 'fuerte', alt: 'Camión 6x6 Fuerte' },
        { src: 'img/2-4.webp', category: 'fuerte', alt: 'Subiendo médanos' },
        { src: 'img/2-5.webp', category: 'fuerte', alt: 'Expedición Militar' },
        { src: 'img/2-6.webp', category: 'fuerte', alt: 'Vistas Panorámicas' },
        { src: 'img/3.png', category: 'safari', alt: 'Camión Safari' },
        { src: 'img/3-4.webp', category: 'safari', alt: 'Villa de los Pulperos' },
        { src: 'img/3-5.webp', category: 'safari', alt: 'Naturaleza Pura' },
        { src: 'img/3-6.webp', category: 'safari', alt: 'Aventura 4x4' },
        // UPDATED CATEGORY
        { src: 'img/4.png', category: 'circuito', alt: 'Punta Perdiz' },
        { src: 'img/4-4.webp', category: 'circuito', alt: 'Aguas Turquesas' },
        { src: 'img/4-5.webp', category: 'circuito', alt: 'Lobería' },
        { src: 'img/4-6.webp', category: 'circuito', alt: 'Puerto del Este' },
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
            div.className = 'relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer bg-gray-100 animate-fade-in-up';
            div.style.animationDelay = `${index * 50}ms`;
            
            div.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p class="text-white font-display uppercase tracking-widest text-sm text-center px-2 font-bold select-none">${img.alt}</p>
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
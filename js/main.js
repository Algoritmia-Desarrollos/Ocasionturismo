document.addEventListener('DOMContentLoaded', () => {
    // Scroll Effect del Navbar
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

    // Inicializar Galería si existe
    if(document.getElementById('gallery-grid')) {
        initGallery();
    }
});

// --- LÓGICA DEL MODAL DE RESERVA ---

let currentExcursionName = '';

function openBookingModal(excursionName) {
    currentExcursionName = excursionName;
    const modal = document.getElementById('booking-modal');
    modal.classList.remove('hidden');
    // Bloquear scroll del fondo
    document.body.style.overflow = 'hidden'; 
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('hidden');
    // Habilitar scroll
    document.body.style.overflow = 'auto'; 
}

function sendToWhatsapp() {
    const date = document.getElementById('modal-date').value;
    const adults = document.getElementById('modal-adults').value;
    const minors = document.getElementById('modal-minors').value;

    if (!date) {
        alert("Por favor, seleccioná una fecha aproximada.");
        return;
    }

    // Construir mensaje
    let message = `Hola! Quiero reservar *${currentExcursionName}*.%0A`;
    message += `📅 Fecha estimada: ${date}%0A`;
    message += `👥 Adultos: ${adults}%0A`;
    message += `👶 Menores (hasta 12): ${minors}%0A`;
    message += `Quisiera coordinar el pago por transferencia.`;

    // Abrir WhatsApp
    const url = `https://wa.me/5492920607061?text=${message}`;
    window.open(url, '_blank');
    
    closeBookingModal();
}

// --- LÓGICA GALERÍA ---
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return; 

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

        imagesToShow.forEach(img => {
            const div = document.createElement('div');
            div.className = 'relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer bg-gray-100';
            div.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p class="text-white font-display uppercase tracking-widest text-sm text-center px-2">${img.alt}</p>
                </div>
            `;
            grid.appendChild(div);
        });
        
        if (visibleCount >= filteredImages.length) {
            if(loadMoreBtn) loadMoreBtn.classList.add('hidden');
        } else {
            if(loadMoreBtn) loadMoreBtn.classList.remove('hidden');
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-gray-900', 'border-transparent');
                b.classList.add('bg-transparent', 'text-white', 'border-white/30');
            });
            e.target.classList.remove('bg-transparent', 'text-white', 'border-white/30');
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
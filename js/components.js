document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

function loadComponents() {
    // URL de WhatsApp Centralizada (Para fácil mantenimiento)
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5492920293722&text&type=phone_number&app_absent=0&utm_source=ig";
    const instagramUrl = "https://www.instagram.com/ocasionturismolg/";

    // --- NAVBAR (Diseño Premium & Responsive) ---
    const navbarHTML = `
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div class="w-full md:max-w-[95%] mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                
                <div class="flex items-center">
                    <a class="flex items-center gap-2 group focus:outline-none" href="./">
                        <img src="img/logolargo.webp" alt="Ocasión Turismo Logo" class="h-14 md:h-20 w-auto object-contain">
                    </a>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <a class="nav-link text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors" href="./">Inicio</a>
                    
                    <div class="relative group">
                        <button class="flex items-center gap-1 nav-link text-sm font-bold uppercase tracking-wider text-gray-600 group-hover:text-primary transition-colors focus:outline-none py-6">
                            Expediciones
                            <span class="material-symbols-outlined text-lg transition-transform group-hover:rotate-180">expand_more</span>
                        </button>
                        
                        <div class="absolute left-0 top-full pt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                            <div class="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden mt-2">
                                <a href="salinas.html" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Salinas del Gualicho
                                </a>
                                <a href="fuerte.html" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Fuerte Argentino
                                </a>
                                <a href="safari.html" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Safari a la Naturaleza
                                </a>
                                <a href="city-tour.html" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    City Tour & Puerto
                                </a>
                            </div>
                        </div>
                    </div>

                    <a class="nav-link text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors" href="about.html">Nosotros</a>
                    
                    <a class="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-lg hover:bg-primary hover:text-gray-900 transition-all transform hover:-translate-y-1 flex items-center gap-2" href="${whatsappUrl}" target="_blank">
                        <span class="material-symbols-outlined text-lg">chat</span>
                        Reservar Ahora
                    </a>
                </div>

                <div class="flex items-center md:hidden">
                    <button id="mobile-menu-btn" class="text-gray-700 hover:text-primary transition-colors focus:outline-none p-2 rounded-lg hover:bg-gray-50 active:scale-95 transform duration-200">
                        <span class="material-symbols-outlined text-4xl">menu</span>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-white fixed w-full left-0 top-20 h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-100 shadow-inner transition-all duration-300 z-40 pb-24">
            <div class="px-6 py-8 space-y-8">
                
                <div class="space-y-6">
                    <a class="flex items-center justify-between text-xl font-bold text-gray-900 hover:text-primary transition-colors border-b border-gray-100 pb-4" href="./">
                        Inicio <span class="material-symbols-outlined text-gray-300">chevron_right</span>
                    </a>
                    
                    <div class="space-y-4">
                        <p class="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">Nuestras Expediciones</p>
                        <div class="grid gap-3 pl-2">
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="salinas.html">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">landscape</span>
                                </div>
                                <span class="font-bold text-sm">Salinas del Gualicho</span>
                            </a>
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="fuerte.html">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">explore</span>
                                </div>
                                <span class="font-bold text-sm">Fuerte Argentino</span>
                            </a>
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="safari.html">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">local_shipping</span>
                                </div>
                                <span class="font-bold text-sm">Safari a la Naturaleza</span>
                            </a>
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="city-tour.html">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">directions_bus</span>
                                </div>
                                <span class="font-bold text-sm">City Tour</span>
                            </a>
                        </div>
                    </div>

                    <a class="flex items-center justify-between text-xl font-bold text-gray-900 hover:text-primary transition-colors border-b border-gray-100 pb-4" href="about.html">
                        Nosotros <span class="material-symbols-outlined text-gray-300">chevron_right</span>
                    </a>
                    
                    <a class="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg uppercase tracking-widest text-sm hover:bg-primary hover:text-gray-900 transition-colors" href="${whatsappUrl}" target="_blank">
                        <span class="material-symbols-outlined text-xl">chat</span>
                        Reservar Ahora
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;

    // --- FOOTER (Actualizado con Instagram y Datos Reales) ---
    const footerHTML = `
    <footer class="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800" id="contacto">
        <div class="max-w-[95%] mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 lg:col-span-1">
                    <a class="flex items-center gap-2 group mb-6" href="./">
                        <img src="img/logolargoblanco.webp" alt="Ocasión Turismo" class="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity">
                    </a>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6">
                        Somos una empresa dedicada a mostrarte lo mejor de la Patagonia Argentina con pasión y profesionalismo. Alojamiento propio en Las Grutas.
                    </p>
                    <div class="flex gap-4">
                         <a href="${instagramUrl}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:text-gray-900 transition-all group" aria-label="Instagram">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <h4 class="font-display text-xl mb-6 tracking-wide text-primary font-bold">Contacto</h4>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">location_on</span>
                            <span>Las Grutas, Río Negro<br/>Patagonia Argentina</span>
                        </li>
                        <li class="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">chat</span>
                            <span>+54 9 2920 60-7061</span>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <h4 class="font-display text-xl mb-6 tracking-wide text-primary font-bold">Explorar</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="./">Inicio</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="salinas.html">Excursiones</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="about.html">Sobre Nosotros</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                        <h4 class="font-bold text-white mb-2">¿Listo para viajar?</h4>
                        <p class="text-gray-400 text-sm mb-4">Reservá tu lugar hoy mismo directamente por WhatsApp.</p>
                        <a class="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors" href="${whatsappUrl}" target="_blank">
                            <span class="material-symbols-outlined">chat</span>
                            Consultar Ahora
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2026 Diseñado con precisión por <strong>Algoritmia</strong></p>
                <div class="flex gap-6">
                    <a class="hover:text-white transition-colors" href="privacy.html">Privacidad</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Inyectar en el DOM
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navbarContainer) navbarContainer.innerHTML = navbarHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // Inicializar lógica móvil
    initMobileMenu();
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const icon = btn.querySelector('span');
            
            if (menu.classList.contains('hidden')) {
                icon.textContent = 'menu';
                document.body.style.overflow = '';
            } else {
                icon.textContent = 'close';
                document.body.style.overflow = 'hidden';
            }
        });
        
        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                 menu.classList.add('hidden');
                 const icon = btn.querySelector('span');
                 if(icon) icon.textContent = 'menu';
                 document.body.style.overflow = '';
            });
        });
    }
}
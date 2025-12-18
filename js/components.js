document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

function loadComponents() {
    // --- NAVBAR (Menú Superior Mejorado) ---
    const navbarHTML = `
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div class="max-w-[95%] mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center">
                    <a class="flex items-center gap-2 group" href="./">
                        <img src="img/logolargo.webp" alt="Ocasión Turismo Logo" class="h-16 w-auto object-contain">
                    </a>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <a class="nav-link text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors" href="./">Inicio</a>
                    
                    <div class="relative group">
                        <button class="flex items-center gap-1 nav-link text-sm font-bold uppercase tracking-wider text-gray-600 group-hover:text-primary transition-colors focus:outline-none py-4">
                            Expediciones
                            <span class="material-symbols-outlined text-lg transition-transform group-hover:rotate-180">expand_more</span>
                        </button>
                        
                        <div class="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                            <div class="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                <a href="salinas" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-8 font-bold border-b border-gray-50 transition-all duration-200">
                                    Salinas del Gualicho
                                </a>
                                <a href="fuerte" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-8 font-bold border-b border-gray-50 transition-all duration-200">
                                    Fuerte Argentino
                                </a>
                                <a href="safari" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-8 font-bold border-b border-gray-50 transition-all duration-200">
                                    Safari a la Naturaleza
                                </a>
                                <a href="city-tour" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-8 font-bold transition-all duration-200">
                                    City Tour & Puerto
                                </a>
                            </div>
                        </div>
                    </div>

                    <a class="nav-link text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors" href="about">Nosotros</a>
                    <a class="nav-link text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors" href="#contacto">Contacto</a>
                </div>

                <div class="flex items-center md:hidden">
                    <button id="mobile-menu-btn" class="text-gray-700 hover:text-primary transition-colors focus:outline-none p-2">
                        <span class="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-lg h-screen overflow-y-auto pb-20">
            <div class="px-4 pt-4 pb-6 space-y-2">
                <a class="block px-4 py-3 rounded-lg text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-primary" href="./">Inicio</a>
                
                <div class="bg-gray-50 rounded-xl p-4 space-y-3">
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Expediciones</p>
                    <a class="block text-sm font-bold text-gray-600 hover:text-primary flex items-center gap-2" href="salinas">
                        <span class="material-symbols-outlined text-primary text-sm">arrow_right</span> Salinas del Gualicho
                    </a>
                    <a class="block text-sm font-bold text-gray-600 hover:text-primary flex items-center gap-2" href="fuerte">
                        <span class="material-symbols-outlined text-primary text-sm">arrow_right</span> Fuerte Argentino
                    </a>
                    <a class="block text-sm font-bold text-gray-600 hover:text-primary flex items-center gap-2" href="safari">
                        <span class="material-symbols-outlined text-primary text-sm">arrow_right</span> Safari a la Naturaleza
                    </a>
                    <a class="block text-sm font-bold text-gray-600 hover:text-primary flex items-center gap-2" href="city-tour">
                        <span class="material-symbols-outlined text-primary text-sm">arrow_right</span> City Tour
                    </a>
                </div>

                <a class="block px-4 py-3 rounded-lg text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-primary" href="about">Nosotros</a>
                <a class="block px-4 py-3 rounded-lg text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-primary" href="#contacto">Contacto</a>
            </div>
        </div>
    </nav>
    `;

    // --- FOOTER (Versión Oscura Original) ---
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
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <h4 class="font-display text-xl mb-6 tracking-wide text-primary font-bold">Contacto</h4>
                    <ul class="space-y-4 text-gray-300">
                        <li class="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">location_on</span>
                            <span>Las Grutas, Río Negro<br/>Patagonia Argentina</span>
                        </li>
                        <li class="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                            <span>+54 9 2920 60-7061</span>
                        </li>
                        <li class="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                            <span>info@ocasionturismo.com</span>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <h4 class="font-display text-xl mb-6 tracking-wide text-primary font-bold">Explorar</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="./">Inicio</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="salinas">Nuestras Excursiones</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="about">Sobre Nosotros</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                        <h4 class="font-bold text-white mb-2">¿Listo para viajar?</h4>
                        <p class="text-gray-400 text-sm mb-4">Reservá tu lugar hoy mismo y asegurá tu aventura.</p>
                        <a class="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors" href="https://wa.me/5492920607061">
                            <span class="material-symbols-outlined">chat</span>
                            Consultar por Whatsapp
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2026 Diseñado con precisión por <strong>Algoritmia</strong></p>
                <div class="flex gap-6">
                    <a class="hover:text-white transition-colors" href="#">Privacidad</a>
                    <a class="hover:text-white transition-colors" href="#">Términos</a>
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
            } else {
                icon.textContent = 'close';
            }
        });
    }
}
// js/components/navbar.js

export default function renderNavbar(containerId = 'navbar-container') {
    const whatsappUrl = "https://wa.me/5492920293722?text=Hola,%20tengo%20una%20consulta%20desde%20la%20web.";
    
    const html = `
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div class="w-full md:max-w-[95%] mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                
                <div class="flex items-center">
                    <a class="flex items-center gap-2 group focus:outline-none" href="./">
                        <img src="img/logolargo.webp" alt="Ocasión Turismo Logo" style="width: auto; height: 56px;" width="180" height="60" class="h-14 md:h-20 w-auto object-contain">
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
                                <a href="salinas" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Salinas del Gualicho
                                </a>
                                <a href="fuerte" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Fuerte Argentino
                                </a>
                                <a href="safari" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Safari a la Naturaleza
                                </a>
                                <a href="circuito" class="block px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-7 font-bold border-b border-gray-50 transition-all duration-200">
                                    Circuito del Golfo
                                </a>
                            </div>
                        </div>
                    </div>

                    <a class="nav-link text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors" href="about">Nosotros</a>
                    
                    <a href="${whatsappUrl}" target="_blank" class="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-lg hover:bg-primary hover:text-gray-900 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                        <span class="material-symbols-outlined text-lg">chat</span>
                        Contactar
                    </a>
                </div>

                <div class="flex items-center md:hidden">
                    <button id="mobile-menu-btn" class="text-gray-700 hover:text-primary transition-colors focus:outline-none p-2 rounded-lg hover:bg-gray-50 active:scale-95 transform duration-200" aria-label="Abrir menú">
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
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="salinas">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">landscape</span>
                                </div>
                                <span class="font-bold text-sm">Salinas del Gualicho</span>
                            </a>
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="fuerte">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">explore</span>
                                </div>
                                <span class="font-bold text-sm">Fuerte Argentino</span>
                            </a>
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="safari">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">local_shipping</span>
                                </div>
                                <span class="font-bold text-sm">Safari a la Naturaleza</span>
                            </a>
                            <a class="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-gray-900 transition-all group border border-transparent hover:border-primary/20" href="circuito">
                                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <span class="material-symbols-outlined">directions_bus</span>
                                </div>
                                <span class="font-bold text-sm">Circuito del Golfo</span>
                            </a>
                        </div>
                    </div>

                    <a class="flex items-center justify-between text-xl font-bold text-gray-900 hover:text-primary transition-colors border-b border-gray-100 pb-4" href="about">
                        Nosotros <span class="material-symbols-outlined text-gray-300">chevron_right</span>
                    </a>
                    
                    <a href="${whatsappUrl}" target="_blank" class="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg uppercase tracking-widest text-sm hover:bg-primary hover:text-gray-900 transition-colors">
                        <span class="material-symbols-outlined text-xl">chat</span>
                        Contactar
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = html;
        initMobileMenu(); 
        initScrollEffect();
    }
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if(btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); 
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

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                const icon = btn.querySelector('span');
                if(icon) icon.textContent = 'menu';
                document.body.style.overflow = '';
            }
        });
    }
}

function initScrollEffect() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('navbar-logo');
    const nav = document.querySelector('nav');
    if (!nav) return;

    let ticking = false;
    let isScrolled = false;

    window.addEventListener('scroll', () => {
        // Si bajamos más de 50px Y todavía no hemos cambiado el estado
        if (window.scrollY > 50 && !isScrolled) {
            isScrolled = true; // Marcamos como "scrolleado"
            
            navbar.classList.remove('bg-transparent', 'text-white', 'py-4');
            navbar.classList.add('bg-white', 'text-gray-900', 'shadow-md', 'py-2');
            
            if (logo) logo.src = 'img/logolargo.webp'; // Logo oscuro
        } 
        // Si subimos a menos de 50px Y el estado estaba como "scrolleado"
        else if (window.scrollY <= 50 && isScrolled) {
            isScrolled = false; // Marcamos como "arriba"
            
            navbar.classList.add('bg-transparent', 'text-white', 'py-4');
            navbar.classList.remove('bg-white', 'text-gray-900', 'shadow-md', 'py-2');
            
            if (logo) logo.src = 'img/logolargoblanco.webp'; // Logo blanco
        }
    });
}
// js/components/footer.js

export default function renderFooter(containerId = 'footer-container') {
    const currentYear = new Date().getFullYear();
    const whatsappUrl = "https://wa.me/5492920293722?text=Hola,%20tengo%20una%20consulta%20desde%20la%20web.";
    const contactPhone = "+54 9 2920 29-3722";
    const instagramUrl = "https://www.instagram.com/ocasionturismolg/";
    const mapSrc = "https://maps.google.com/maps?q=Ocasión+Turismo,+Las+Grutas,+Río+Negro&t=&z=15&ie=UTF8&iwloc=&output=embed";

    const html = `
    <footer class="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800" id="contacto">
        <div class="max-w-[95%] mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                <div class="col-span-1 lg:col-span-1">
                    <a class="flex items-center gap-2 group mb-6" href="./">
                        <img src="img/logolargoblanco.webp" alt="Ocasión Turismo" width="180" height="60" class="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity">
                    </a>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">
                        Somos una empresa dedicada a mostrarte lo mejor de la Patagonia Argentina con pasión y profesionalismo. Alojamiento propio en Las Grutas.
                    </p>
                    <div class="flex gap-4">
                         <a href="${instagramUrl}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:text-gray-900 transition-all group" aria-label="Instagram">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <h3 class="font-display text-xl mb-6 tracking-wide text-primary font-bold">Ubicación</h3>
                    <ul class="space-y-4 text-gray-300 mb-6">
                        <li class="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">location_on</span>
                            <span>Las Grutas, Río Negro<br/>Patagonia Argentina</span>
                        </li>
                    </ul>
                    <div class="rounded-lg overflow-hidden border border-gray-700 shadow-lg h-40 w-full relative group">
                         <iframe 
                            src="${mapSrc}" 
                            title="Ubicación de Ocasión Turismo en Google Maps"
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            class="grayscale group-hover:grayscale-0 transition-all duration-500">
                        </iframe>
                    </div>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <h3 class="font-display text-xl mb-6 tracking-wide text-primary font-bold">Explorar</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="./">Inicio</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="salinas">Salinas del Gualicho</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="fuerte">Fuerte Argentino</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="safari">Safari Naturaleza</a></li>
                        <li><a class="hover:text-white hover:pl-2 transition-all" href="about">Sobre Nosotros</a></li>
                    </ul>
                </div>

                <div class="col-span-1 lg:col-span-1">
                    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <h3 class="font-display text-xl font-bold text-white mb-2 relative z-10">¿Listo para viajar?</h3>
                        <p class="text-gray-300 text-sm mb-4 relative z-10">Reservá tu lugar hoy mismo directamente por WhatsApp.</p>
                        <a class="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors relative z-10" href="${whatsappUrl}" target="_blank">
                            <span class="material-symbols-outlined">chat</span>
                            Consultar Ahora
                        </a>
                    </div>
                    <div class="mt-6">
                        <p class="text-gray-300 text-sm mb-2">Contacto Directo:</p>
                        <a href="tel:${contactPhone.replace(/[\s-]/g, '')}" class="text-xl font-display text-white hover:text-primary transition-colors tracking-wide">${contactPhone}</a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>© ${currentYear} Diseñado con precisión por <strong>Algoritmia</strong></p>
                <div class="flex gap-6">
                    <a class="hover:text-white transition-colors" href="privacy">Privacidad</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = html;
    }
}
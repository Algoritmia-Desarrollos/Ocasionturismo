// js/components/booking-modal.js

export default function renderBookingModal(containerId = 'booking-modal-container') {
    const html = `
    <div id="booking-modal" class="hidden fixed inset-0 z-[60] items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform scale-95 opacity-0 transition-all duration-300">
            <div class="bg-primary p-4 flex justify-between items-center">
                <h3 class="text-gray-900 font-display text-xl uppercase tracking-wide">Configurá tu Reserva</h3>
                <button onclick="window.closeBookingModal()" class="text-gray-900 hover:bg-white/20 rounded-full p-1 transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            
            <div class="p-6 space-y-5">
                <p class="text-sm text-gray-600 text-center">
                    Completá los datos para enviar tu solicitud a la agencia por WhatsApp.
                </p>

                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Fecha Estimada</label>
                    <input type="date" id="modal-date" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:ring-primary focus:border-primary outline-none">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Adultos</label>
                        <select id="modal-adults" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:ring-primary focus:border-primary outline-none">
                            <option value="1">1</option>
                            <option value="2" selected>2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5+">5+</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Menores</label>
                        <select id="modal-minors" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:ring-primary focus:border-primary outline-none">
                            <option value="0" selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select>
                    </div>
                </div>

                <div class="bg-blue-50 p-3 rounded-lg flex gap-3 items-start border border-blue-100">
                    <span class="material-symbols-outlined text-blue-600 text-lg mt-0.5">info</span>
                    <p class="text-xs text-blue-800 leading-relaxed">
                        El pago se realiza mediante <strong>transferencia bancaria</strong>. Los datos de la cuenta te serán enviados por WhatsApp al confirmar disponibilidad.
                    </p>
                </div>

                <button onclick="window.sendToWhatsapp()" class="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-primary hover:text-gray-900 transition-colors flex justify-center items-center gap-2 uppercase tracking-wide text-sm">
                    Continuar al Chat <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
            </div>
        </div>
    </div>
    `;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = html;
    }
}
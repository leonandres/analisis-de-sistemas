// ==========================================
// SCRIPT GLOBAL - Portal Principal
// Solo maneja el botón de tema claro/oscuro
// ==========================================

const btnTema = document.getElementById('btn-tema');
const html = document.documentElement;

// Cargar preferencia guardada o detectar preferencia del sistema
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

if (btnTema) {
    btnTema.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
}
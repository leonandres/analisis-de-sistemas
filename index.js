// ==========================================
// SCRIPT GLOBAL - Portal Principal
// Manejo de tema claro/oscuro
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn-tema');
    const html = document.documentElement;
    
    // Cargar preferencia guardada o detectar preferencia del sistema
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    
    // Solo agregar el listener si el botón existe
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
        console.log('✅ Botón de tema inicializado correctamente');
    } else {
        console.warn('⚠️ No se encontró el botón de tema (btn-tema)');
    }

    // Botón flotante "volver arriba"
    const btnTop = document.getElementById('btn-top');
    if (btnTop) {
        window.addEventListener('scroll', () => {
            btnTop.classList.toggle('visible', window.scrollY > 400);
        });
        btnTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


// index.js - Clase 03: Informe de Reconocimiento

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Clase 03: Inicializando script...');
    
    // Configurar título en el header dinámico
    const tituloClase = document.getElementById('titulo-clase');
    if (tituloClase) {
        tituloClase.textContent = 'Clase 03: Informe de Reconocimiento';
    }

    // Resaltado de navegación activa según scroll
    const navLinks = document.querySelectorAll('.navigation-link');
    const sections = document.querySelectorAll('main section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active', 'bg-sky-50', 'dark:bg-slate-800', 'text-sky-700', 'dark:text-sky-400', 'border-sky-600');
            link.classList.add('border-transparent', 'text-slate-600', 'dark:text-slate-400');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active', 'bg-sky-50', 'dark:bg-slate-800', 'text-sky-700', 'dark:text-sky-400', 'border-sky-600');
                link.classList.remove('border-transparent');
            }
        });
    });
});

// ==========================================
// REPASO DE EXAMEN - CONCEPTOS CLAVE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Clase Examen: Inicializando...');
    
    // ==========================================
    // 1. AJUSTAR PADDING DESPUÉS DE CARGAR EL HEADER
    // ==========================================
    setTimeout(() => {
        const header = document.querySelector('header');
        const mainContent = document.querySelector('.main-content-wrapper');
        
        if (header && mainContent) {
            const headerHeight = header.offsetHeight;
            mainContent.style.paddingTop = headerHeight + 'px';
            console.log(`✅ Padding ajustado a ${headerHeight}px`);
        } else {
            console.warn('⚠️ No se encontró header o main-content-wrapper');
        }
    }, 50);
    
    // ==========================================
    // 2. ACTUALIZAR TÍTULO DE LA CLASE
    // ==========================================
    const tituloElement = document.getElementById('titulo-clase');
    if (tituloElement) {
        tituloElement.textContent = 'Repaso de Examen';
    }

    // ==========================================
    // 3. SEGUIMIENTO DE ENLACES ACTIVOS (SIDEBAR)
    // ==========================================
    const navLinks = document.querySelectorAll('.navigation-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            navLinks.forEach(link => {
                link.classList.remove('active', 'bg-sky-50', 'dark:bg-slate-800', 'text-sky-700', 'dark:text-sky-400', 'border-sky-600');
                link.classList.add('text-slate-600', 'dark:text-slate-400', 'border-transparent');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active', 'bg-sky-50', 'dark:bg-slate-800', 'text-sky-700', 'dark:text-sky-400', 'border-sky-600');
                    link.classList.remove('text-slate-600', 'dark:text-slate-400', 'border-transparent');
                }
            });
        }
    });
});

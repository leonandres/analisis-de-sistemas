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

// ==========================================
// FUNCIONES DE INTERACTIVIDAD PARA EL SIMULADOR DE EXAMEN
// ==========================================

function toggleRespuestaCatedra(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('hidden');
    }
}

function verificarRespuestaSimple(btn, esCorrecto, idExplicacion) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    
    buttons.forEach(b => {
        b.disabled = true;
    });

    if (esCorrecto) {
        btn.style.background = "#d1fae5";
        btn.style.borderColor = "#10b981";
        btn.classList.add("text-emerald-950", "dark:text-emerald-300");
    } else {
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#ef4444";
        btn.classList.add("text-red-950", "dark:text-red-300");
    }

    const exp = document.getElementById(idExplicacion);
    if (exp) {
        exp.classList.remove('hidden');
    }
}

function verificarVF(btn, esCorrecto, idJustificacion) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    
    buttons.forEach(b => {
        b.disabled = true;
    });

    if (esCorrecto) {
        btn.style.background = "#d1fae5";
        btn.style.borderColor = "#10b981";
        btn.classList.add("text-emerald-950", "dark:text-emerald-300");
    } else {
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#ef4444";
        btn.classList.add("text-red-950", "dark:text-red-300");
    }

    const just = document.getElementById(idJustificacion);
    if (just) {
        just.classList.remove('hidden');
    }
}

// Hacer funciones disponibles en window para los event listeners inline
window.toggleRespuestaCatedra = toggleRespuestaCatedra;
window.verificarRespuestaSimple = verificarRespuestaSimple;
window.verificarVF = verificarVF;

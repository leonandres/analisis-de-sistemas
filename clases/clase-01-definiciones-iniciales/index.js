// index.js - Clase 01: Definiciones iniciales (Módulos interactivos)

let currentTgsSlide = 0;
const totalTgsSlides = 4;

let currentElemSlide = 0;
const totalElemSlides = 6;

let score = 0;
const answeredQuestions = new Set();

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Clase 01: Inicializando módulos interactivos...');
    
    // Configurar título en el header dinámico si existe
    const tituloClase = document.getElementById('titulo-clase');
    if (tituloClase) {
        tituloClase.textContent = 'Clase 01: Definiciones iniciales';
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

// ==========================================
// 1. CARRUSEL TGS (Slide por diapositivas)
// ==========================================
function moverCarruselTgs(direction) {
    let nextSlide = currentTgsSlide + direction;
    if (nextSlide < 0) nextSlide = totalTgsSlides - 1;
    if (nextSlide >= totalTgsSlides) nextSlide = 0;
    irASlideTgs(nextSlide);
}

function irASlideTgs(slideIndex) {
    currentTgsSlide = slideIndex;
    const slides = document.querySelectorAll('.tgs-slide');
    const dots = document.querySelectorAll('.tgs-dot');
    const counter = document.getElementById('tgs-counter');

    slides.forEach((slide, idx) => {
        if (idx === slideIndex) {
            slide.classList.remove('hidden');
            setTimeout(() => {
                slide.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
                slide.classList.add('opacity-100', 'translate-x-0');
            }, 20);
        } else {
            slide.classList.add('hidden', 'opacity-0');
        }
    });

    dots.forEach((dot, idx) => {
        if (idx === slideIndex) {
            dot.classList.remove('bg-slate-300', 'dark:bg-slate-700');
            dot.classList.add('bg-sky-500', 'w-6');
        } else {
            dot.classList.remove('bg-sky-500', 'w-6');
            dot.classList.add('bg-slate-300', 'dark:bg-slate-700', 'w-3');
        }
    });

    if (counter) {
        counter.textContent = `${slideIndex + 1} / ${totalTgsSlides}`;
    }
}

// ==========================================
// 2. CARRUSEL DE ELEMENTOS (Red Social Style)
// ==========================================
function moverCarruselElem(direction) {
    let nextSlide = currentElemSlide + direction;
    if (nextSlide < 0) nextSlide = totalElemSlides - 1;
    if (nextSlide >= totalElemSlides) nextSlide = 0;
    
    currentElemSlide = nextSlide;
    const slides = document.querySelectorAll('.elem-slide');
    const counter = document.getElementById('elem-counter');

    slides.forEach((slide, idx) => {
        if (idx === nextSlide) {
            slide.classList.remove('hidden');
            setTimeout(() => {
                slide.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
                slide.classList.add('opacity-100', 'translate-x-0');
            }, 20);
        } else {
            slide.classList.add('hidden', 'opacity-0');
        }
    });

    if (counter) {
        counter.textContent = `${nextSlide + 1} / ${totalElemSlides}`;
    }
}

// ==========================================
// 3. FLASHCARDS 3D (Tarjetas giratorias)
// ==========================================
function girarTarjeta(cardElement) {
    cardElement.classList.toggle('flipped');
}

// ==========================================
// 4. PIRÁMIDE SI (Tabs interactivos)
// ==========================================
function seleccionarNivelSi(nivelId) {
    const tabs = document.querySelectorAll('.tab-si');
    const contents = document.querySelectorAll('.content-si');

    tabs.forEach(tab => {
        tab.classList.remove('bg-slate-900', 'text-white', 'dark:bg-slate-100', 'dark:text-slate-900');
        tab.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
    });

    contents.forEach(content => {
        content.classList.add('hidden');
    });

    const activeTab = document.getElementById(`tab-${nivelId}`);
    const activeContent = document.getElementById(`content-si-${nivelId}`);

    if (activeTab && activeContent) {
        activeTab.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
        activeTab.classList.add('bg-slate-900', 'text-white', 'dark:bg-slate-100', 'dark:text-slate-900');
        activeContent.classList.remove('hidden');
    }
}

// ==========================================
// 5. AUTOEVALUACIÓN INTERACTIVA & PUNTAJE
// ==========================================
function evaluarRespuesta(questionId, seleccionUsuario, btnElement) {
    const feedbackEl = document.getElementById(`${questionId}-feedback`);
    if (!feedbackEl) return;

    // Ambas consignas son FALSAS (false)
    const esCorrecto = (seleccionUsuario === false);

    feedbackEl.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-300', 'bg-red-100', 'text-red-800', 'dark:bg-red-950/40', 'dark:text-red-300');

    if (esCorrecto) {
        feedbackEl.classList.add('bg-emerald-100', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        feedbackEl.innerHTML = '🎉 <strong>¡Correcto!</strong> Es FALSO. Excelente razonamiento.';
        
        if (!answeredQuestions.has(questionId)) {
            answeredQuestions.add(questionId);
            score += 1;
            const scoreEl = document.getElementById('score-counter');
            if (scoreEl) scoreEl.textContent = score;
        }
    } else {
        feedbackEl.classList.add('bg-red-100', 'text-red-800', 'dark:bg-red-950/40', 'dark:text-red-300');
        feedbackEl.innerHTML = '❌ <strong>Incorrecto.</strong> Revisa la justificación haciendo clic en "Ver explicación".';
    }
}

// Función auxiliar para desplegar/ocultar soluciones (exportada a window)
function toggleRespuesta(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('hidden');
    }
}

// EXPORTACIÓN A ÁMBITO GLOBAL PARA PREVENIR ERRORES INLINE ONCLICK
window.moverCarruselTgs = moverCarruselTgs;
window.irASlideTgs = irASlideTgs;
window.moverCarruselElem = moverCarruselElem;
window.girarTarjeta = girarTarjeta;
window.seleccionarNivelSi = seleccionarNivelSi;
window.evaluarRespuesta = evaluarRespuesta;
window.toggleRespuesta = toggleRespuesta;

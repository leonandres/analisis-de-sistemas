// component.js - Header y Sidebar global con navegación dinámica

// ============================================================
// MAPA DE CLASES Y SECCIONES (fuente única de verdad)
// ============================================================
const CLASES_DATA = [
    {
        id: 'clase01',
        key: 'clase-01-definiciones-iniciales',
        emoji: '🌐',
        numero: '01',
        titulo: 'Definiciones iniciales',
        color: 'sky',
        secciones: [
            { anchor: 'tgs-carousel',       label: 'Teoría general de sistemas' },
            { anchor: 'elementos-slider',   label: 'Elementos de un sistema' },
            { anchor: 'flashcards',         label: 'Tarjetas giratorias (3D)' },
            { anchor: 'sistemas-informacion', label: 'Sistemas de información' },
            { anchor: 'piramide-si',        label: 'Pirámide SI (TPS, MIS, DSS, ESS)' },
            { anchor: 'rol-analista',       label: 'El rol del analista' },
            { anchor: 'autoevaluacion',     label: '🧪 Autoevaluación interactiva' },
        ]
    },
    {
        id: 'clase02',
        key: 'clase-02-procesos-de-negocio',
        emoji: '🔄',
        numero: '02',
        titulo: 'Procesos de negocio',
        color: 'emerald',
        secciones: [
            { anchor: 'fundamentos',           label: 'Fundamentos y conceptos' },
            { anchor: 'vision-procesos',        label: 'Visión funcional vs. procesos' },
            { anchor: 'clasificacion',          label: 'Clasificación (ISO 9001)' },
            { anchor: 'modelo-gestion',         label: 'Modelo de gestión' },
            { anchor: 'fases',                  label: 'Fases de gestión' },
            { anchor: 'modelado',               label: 'Modelado (SIPOC / BPMN)' },
            { anchor: 'caso-termilagro',        label: '🏭 Caso Termilagro' },
            { anchor: 'practica-clasificacion', label: '⚡ Laboratorio: Clasificación' },
            { anchor: 'examen-autoevaluacion',  label: '📋 Autoevaluación' },
        ]
    },
    {
        id: 'clase03',
        key: 'clase-03-informe-de-reconocimiento',
        emoji: '📋',
        numero: '03',
        titulo: 'Informe de reconocimiento',
        color: 'amber',
        secciones: [
            { anchor: 'concepto',              label: 'Concepto y propósito' },
            { anchor: 'etapas-proceso',         label: 'Etapas del proceso' },
            { anchor: 'estructura',             label: 'Estructura estándar (UTN)' },
            { anchor: 'carta-sponsor',          label: '✉️ Carta al sponsor' },
            { anchor: 'datos-faltantes',        label: '🔍 Sección de datos faltantes' },
            { anchor: 'tecnicas-relevamiento',  label: 'Técnicas de relevamiento' },
            { anchor: 'caso-infoley',           label: '📋 Caso: InfoLey Web' },
            { anchor: 'caso-juegos',            label: '🎰 Caso: Juegos del País S.H.' },
            { anchor: 'checklist',              label: '✅ Checklist de validación' },
        ]
    },
    {
        id: 'clase06',
        key: 'clase-06-requerimientos-funcionales-y-no-funcionales',
        emoji: '📐',
        numero: '06',
        titulo: 'Requerimientos funcionales y no funcionales',
        color: 'violet',
        secciones: [
            { anchor: 'fundamentos',            label: 'Fundamentos y metodología' },
            { anchor: 'clasificacion',          label: 'Funcionales y no funcionales' },
            { anchor: 'elicitation',            label: 'Técnicas de elicitación' },
            { anchor: 'calidad',                label: 'Calidad de requerimientos' },
            { anchor: 'ventas-compras',         label: 'Ventas vs. compras' },
            { anchor: 'practica-clasificacion', label: '⚡ Laboratorio: Clasificación' },
            { anchor: 'practica-calidad',       label: '⚡ Laboratorio: Características' },
            { anchor: 'examen-autoevaluacion',  label: '📋 Autoevaluación teórica' },
        ]
    },
    {
        id: 'clase10',
        key: 'clase-10-casos-de-uso',
        emoji: '🎯',
        numero: '10',
        titulo: 'Casos de uso',
        color: 'indigo',
        secciones: [
            { anchor: 'conceptos',    label: '¿Qué es un caso de uso?' },
            { anchor: 'actores',      label: 'Actores y roles' },
            { anchor: 'relaciones',   label: 'Relaciones (Include/Extend)' },
            { anchor: 'especificacion', label: 'Plantilla de especificación' },
            { anchor: 'caso-cajero', label: '🏦 Caso de estudio: Cajero' },
            { anchor: 'obra-teatro', label: '🎬 Guión: Acceso denegado' },
            { anchor: 'laboratorio', label: '⚡ Juego: Include vs. Extend' },
            { anchor: 'trivia',      label: '📋 Trivia de autoevaluación' },
        ]
    },
    {
        id: 'clase12',
        key: 'clase-12-historias-de-usuario',
        emoji: '📝',
        numero: '12',
        titulo: 'Historias de usuario',
        color: 'emerald',
        secciones: [
            { anchor: 'concepto',           label: 'Concepto y filosofía ágil' },
            { anchor: 'formato',            label: 'Formato canónico (3 C)' },
            { anchor: 'invest',             label: 'Criterios INVEST' },
            { anchor: 'criterios-aceptacion', label: 'Criterios de aceptación (BDD)' },
            { anchor: 'estimacion',         label: 'Estimación & Story Points' },
            { anchor: 'material-nuevo',     label: '📥 Material complementario' },
        ]
    },
    {
        id: 'examen',
        key: 'examen',
        emoji: '🎓',
        numero: '📝',
        titulo: 'Repaso para el examen',
        color: 'rose',
        secciones: [
            { anchor: 'informe-reconocimiento', label: 'Informe de reconocimiento' },
            { anchor: 'ejemplo-informe',         label: '📋 Ejemplo: InfoLey Web' },
            { anchor: 'casos-uso',               label: 'Casos de uso (conceptos)' },
            { anchor: 'parcial-1',               label: '📝 1° Parcial interactivo' },
            { anchor: 'parcial-2',               label: '📝 2° Parcial interactivo' },
        ]
    },
];
function getRelativePaths() {
    const path = window.location.pathname;
    const isSubPage = path.includes('/clases/');
    
    return {
        home: isSubPage ? '../../index.html' : './index.html',
        clase01: isSubPage ? '../clase-01-definiciones-iniciales/index.html' : './clases/clase-01-definiciones-iniciales/index.html',
        clase02: isSubPage ? '../clase-02-procesos-de-negocio/index.html' : './clases/clase-02-procesos-de-negocio/index.html',
        clase03: isSubPage ? '../clase-03-informe-de-reconocimiento/index.html' : './clases/clase-03-informe-de-reconocimiento/index.html',
        clase06: isSubPage ? '../clase-06-requerimientos-funcionales-y-no-funcionales/index.html' : './clases/clase-06-requerimientos-funcionales-y-no-funcionales/index.html',
        clase10: isSubPage ? '../clase-10-casos-de-uso/index.html' : './clases/clase-10-casos-de-uso/index.html',
        clase12: isSubPage ? '../clase-12-historias-de-usuario/index.html' : './clases/clase-12-historias-de-usuario/index.html',
        examen: isSubPage ? '../examen/index.html' : './clases/examen/index.html'
    };
}

function getHeaderHTML(paths) {
    return `
<header class="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-xs transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
            <!-- BOTÓN DE INICIO -->
            <a href="${paths.home}" class="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-950/40 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-900/50 shadow-xs transition-all duration-300 hover:scale-105" title="Volver al inicio">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </a>
            
            <div class="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

            <!-- MENÚ DE CLASES -->
            <div class="relative">
                <button id="btn-menu-clases" class="flex items-center gap-2 px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold transition-all duration-300 shadow-xs text-slate-700 dark:text-slate-200" title="Ver clases">
                    <span class="text-base leading-none">📚</span>
                    <span class="hidden sm:inline">Clases</span>
                    <svg id="menu-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="transition-transform duration-300">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                
                <div id="menu-clases" class="hidden absolute top-full left-0 mt-2 w-85 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 origin-top-left scale-95 opacity-0 z-50">
                    <div class="p-2 max-h-[80vh] overflow-y-auto">
                        <div class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-2">Ir a otra clase</div>
                        
                        <a href="${paths.clase01}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🌐</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 01</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Definiciones iniciales</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">TGS, SI, rol del analista</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <a href="${paths.clase02}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🔄</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 02</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Procesos de negocio</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">ISO 9001, SIPOC, BPMN</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <a href="${paths.clase03}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">📋</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Clase 03</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Informe de reconocimiento</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Estructura UTN, carta al sponsor, datos faltantes</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                        
                        <a href="${paths.clase06}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">📋</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 06</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Ingeniería de requerimientos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Funcionales y no funcionales</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <a href="${paths.clase10}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🎭</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 10</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Casos de uso</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">UML, actores, relaciones</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <a href="${paths.clase12}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">📝</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Clase 12</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Historias de usuario</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">INVEST, BDD, Story points</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <a href="${paths.examen}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🎓</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Repaso</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Conceptos & parciales</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Machete de parciales UTN</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- TÍTULO CENTRAL -->
        <div class="flex items-center gap-2.5">
            <span class="w-1 h-5 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full hidden md:block"></span>
            <h1 class="text-sm font-extrabold text-slate-800 dark:text-slate-100 hidden md:block tracking-wider uppercase" id="titulo-clase">Clase</h1>
        </div>

        <!-- BOTÓN DE TEMA -->
        <button id="btn-tema" class="relative w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 flex-shrink-0" title="Cambiar tema">
            <svg id="icon-sol" class="w-5 h-5 text-amber-500 transition-all duration-500 rotate-0 scale-100 dark:rotate-90 dark:scale-0 absolute" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg id="icon-luna" class="w-5 h-5 text-sky-400 transition-all duration-500 -rotate-90 scale-0 dark:rotate-0 dark:scale-100 absolute" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </button>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 opacity-95"></div>
</header>
`;
}

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        const paths = getRelativePaths();
        headerContainer.innerHTML = getHeaderHTML(paths);
        initializeMenu();
    }
    loadSidebar();
    // Mejorar títulos de secciones y habilitar colapsado después de cargar header/sidebar
    if (typeof window.enhanceSectionTitles === 'function') {
        // Ejecutar en el siguiente tick para asegurar que el DOM de la página esté listo
        setTimeout(() => {
            try { window.enhanceSectionTitles(); } catch (e) { console.error('Error al mejorar títulos de sección', e); }
        }, 20);
    }
}

// ============================================================
// SIDEBAR GLOBAL
// ============================================================
function getCurrentClaseKey() {
    const path = window.location.pathname;
    for (const clase of CLASES_DATA) {
        if (path.includes(clase.key)) return clase.key;
    }
    return null;
}

function getSidebarHTML(paths) {
    const currentKey = getCurrentClaseKey();

    const colorMap = {
        sky:     { badge: 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300',     border: 'border-sky-500',    dot: 'bg-sky-500' },
        emerald: { badge: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300', border: 'border-emerald-500', dot: 'bg-emerald-500' },
        amber:   { badge: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300',   border: 'border-amber-500',  dot: 'bg-amber-500' },
        violet:  { badge: 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300', border: 'border-violet-500', dot: 'bg-violet-500' },
        indigo:  { badge: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300', border: 'border-indigo-500', dot: 'bg-indigo-500' },
        rose:    { badge: 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300',     border: 'border-rose-500',   dot: 'bg-rose-500' },
    };

    const clasesHTML = CLASES_DATA.map(clase => {
        const isActive = clase.key === currentKey;
        const c = colorMap[clase.color] || colorMap.sky;
        const baseUrl = paths[clase.id] || '#';
        const basePath = baseUrl.replace('index.html', '');

        const seccionesHTML = clase.secciones.map(sec => {
            return `<a href="${basePath}index.html#${sec.anchor}"
                class="flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-150 group">
                <span class="w-1 h-1 rounded-full ${c.dot} flex-shrink-0 opacity-60 group-hover:opacity-100"></span>
                ${sec.label}
            </a>`;
        }).join('');

        return `
        <div class="sidebar-clase-item" data-key="${clase.key}">
            <button
                onclick="toggleSidebarClase('${clase.key}')"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group
                    ${isActive
                        ? `${c.badge} font-semibold`
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'}"
            >
                <span class="text-lg leading-none flex-shrink-0">${clase.emoji}</span>
                <div class="flex-1 min-w-0">
                    <div class="text-[10px] font-bold uppercase tracking-wider opacity-60">Clase ${clase.numero}</div>
                    <div class="text-xs leading-tight truncate">${clase.titulo}</div>
                </div>
                <svg class="sidebar-arrow flex-shrink-0 w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="sidebar-secciones pl-2 space-y-0.5 mt-0.5 ${isActive ? '' : 'hidden'}">
                ${seccionesHTML}
            </div>
        </div>`;
    }).join('');

    return `
    <!-- SIDEBAR GLOBAL (desktop) -->
    <div id="global-sidebar" class="bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200 dark:border-slate-800 sticky top-24 overflow-hidden">
        <div class="px-4 pt-4 pb-2">
            <h2 class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Navegación de clases</h2>
        </div>
        <div class="px-2 pb-3 space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto">
            ${clasesHTML}
        </div>
    </div>`;
}

function loadSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (!sidebarContainer) return;
    const paths = getRelativePaths();
    sidebarContainer.innerHTML = getSidebarHTML(paths);

    // Botón hamburguesa mobile
    injectMobileHamburger();
}

function toggleSidebarClase(key) {
    const items = document.querySelectorAll('.sidebar-clase-item');
    items.forEach(item => {
        const secciones = item.querySelector('.sidebar-secciones');
        const arrow = item.querySelector('.sidebar-arrow');
        if (item.dataset.key === key) {
            const isOpen = !secciones.classList.contains('hidden');
            if (isOpen) {
                secciones.classList.add('hidden');
                arrow.classList.remove('rotate-180');
            } else {
                secciones.classList.remove('hidden');
                arrow.classList.add('rotate-180');
            }
        }
    });
}

function injectMobileHamburger() {
    if (document.getElementById('sidebar-hamburger')) return;

    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'fixed inset-0 bg-black/50 z-30 hidden lg:hidden transition-opacity duration-200';
    overlay.onclick = closeMobileSidebar;
    document.body.appendChild(overlay);

    // Panel mobile (clon del sidebar)
    const panel = document.createElement('div');
    panel.id = 'sidebar-mobile-panel';
    panel.className = 'fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 z-40 shadow-2xl transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto pt-16';
    panel.innerHTML = `<div class="p-3">${document.getElementById('global-sidebar')?.innerHTML || ''}</div>`;
    document.body.appendChild(panel);

    // Botón flotante
    const btn = document.createElement('button');
    btn.id = 'sidebar-hamburger';
    btn.className = 'fixed bottom-5 left-5 z-50 lg:hidden flex items-center gap-2 px-4 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-2xl shadow-xl text-sm font-bold transition-all hover:scale-105';
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg> Clases`;
    btn.onclick = openMobileSidebar;
    document.body.appendChild(btn);
}

function openMobileSidebar() {
    const panel = document.getElementById('sidebar-mobile-panel');
    const overlay = document.getElementById('sidebar-overlay');
    if (panel) panel.classList.remove('-translate-x-full');
    if (overlay) overlay.classList.remove('hidden');
}

function closeMobileSidebar() {
    const panel = document.getElementById('sidebar-mobile-panel');
    const overlay = document.getElementById('sidebar-overlay');
    if (panel) panel.classList.add('-translate-x-full');
    if (overlay) overlay.classList.add('hidden');
}

window.toggleSidebarClase = toggleSidebarClase;
window.openMobileSidebar = openMobileSidebar;
window.closeMobileSidebar = closeMobileSidebar;

function initializeMenu() {
    const btnMenu = document.getElementById('btn-menu-clases');
    const menuClases = document.getElementById('menu-clases');
    const menuArrow = document.getElementById('menu-arrow');
    
    if (btnMenu && menuClases) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = menuClases.classList.contains('hidden');
            
            if (isHidden) {
                menuClases.classList.remove('hidden');
                setTimeout(() => {
                    menuClases.style.transform = 'scale(1)';
                    menuClases.style.opacity = '1';
                }, 10);
                if (menuArrow) menuArrow.style.transform = 'rotate(180deg)';
            } else {
                menuClases.style.transform = 'scale(0.95)';
                menuClases.style.opacity = '0';
                setTimeout(() => {
                    menuClases.classList.add('hidden');
                }, 200);
                if (menuArrow) menuArrow.style.transform = 'rotate(0deg)';
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!menuClases.classList.contains('hidden') && 
                !btnMenu.contains(e.target) && 
                !menuClases.contains(e.target)) {
                menuClases.style.transform = 'scale(0.95)';
                menuClases.style.opacity = '0';
                setTimeout(() => {
                    menuClases.classList.add('hidden');
                }, 200);
                if (menuArrow) menuArrow.style.transform = 'rotate(0deg)';
            }
        });
    }
}

function enhanceSectionTitles() {
    const sections = document.querySelectorAll('main section');
    sections.forEach((section, idx) => {
        // Buscar el contenedor de cabecera (suele ser div.border-b)
        const headerDiv = section.querySelector('div.border-b') || section.querySelector('h2')?.parentElement;
        if (!headerDiv) return;
        const h2 = headerDiv.querySelector('h2');
        if (!h2) return;

        // Extraer y limpiar el texto del título
        const original = h2.textContent.trim();
        // Remover emojis/puntuación inicial y prefijo numérico si existe
        let cleaned = original.replace(/^[^0-9A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/, '').replace(/^\s*(\d+)[\.\-\)]?\s*/, '');
        // Guardar número (si el título original tenía número) o calcular por índice
        const numberMatch = original.match(/^\s*(\d+)[\.\-\)]/);
        const number = numberMatch ? numberMatch[1] : (idx + 1).toString();

        // Normalizar a sentence case salvo acrónimos (si todo en mayúsculas, respetar)
        let text = cleaned;
        if (text && text === text.toUpperCase()) {
            // Posible acrónimo (INVEST, BDD...) -> mantener
            text = text;
        } else {
            text = text.trim().toLowerCase();
            if (text.length > 0) text = text.charAt(0).toUpperCase() + text.slice(1);
        }

        // Si es la sección de autoevaluación, eliminar íconos y hacer el título más llamativo
        const isAutoEval = section.id === 'autoevaluacion' || section.id === 'autoevaluacion-interactiva' || /autoevaluac/i.test(section.id);

        const titleClasses = isAutoEval ? 'text-2xl font-extrabold text-amber-700 dark:text-amber-300 ml-1 section-title-text' : 'text-lg font-semibold text-slate-800 dark:text-slate-100 ml-1 section-title-text';

        // Reemplazar el h2 por una versión con número estilizado y botón de colapsado
        h2.innerHTML = `
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <span class="text-sm font-semibold text-slate-400 dark:text-slate-500 opacity-90">|</span>
                    <span class="text-sm font-semibold text-slate-700 dark:text-slate-200 section-number">${number}</span>
                    <span class="${titleClasses}">${text}</span>
                </div>
                <button aria-expanded="true" class="toggle-section-btn text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-transform" title="Minimizar/Expandir sección">
                    <svg class="w-4 h-4 transform transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
            </div>
        `;

        const toggleBtn = headerDiv.querySelector('.toggle-section-btn');
        const headerIndex = Array.from(section.children).indexOf(headerDiv);
        const contentChildren = Array.from(section.children).slice(headerIndex + 1);

        // guardar referencias a elementos que deben ocultarse cuando esté minimizada
        const subtitleElems = Array.from(headerDiv.querySelectorAll('p, .text-sm')).filter(el => el && el.tagName !== 'H2');

        // Guardar estilos originales para restaurar
        if (!section.__originalStyles) {
            section.__originalStyles = {
                padding: section.style.padding || '',
            };
        }
        if (!headerDiv.__originalStyles) {
            headerDiv.__originalStyles = {
                paddingBottom: headerDiv.style.paddingBottom || '',
                marginBottom: headerDiv.style.marginBottom || ''
            };
        }

        // Estado inicial (expandido)
        section.__expanded = true;

        const applyCollapseState = (expanded) => {
            // Mostrar/ocultar contenido posterior al header
            contentChildren.forEach(el => {
                if (expanded) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });

            // Mostrar/ocultar subtítulo dentro del header (para que el collapsed quede compacto)
            subtitleElems.forEach(el => {
                if (expanded) el.classList.remove('hidden'); else el.classList.add('hidden');
            });

            // Ajustar padding para que las secciones minimizadas sean compactas y de tamaño similar
            if (!expanded) {
                section.classList.add('section-collapsed');
                section.style.padding = '0.6rem';
                headerDiv.style.paddingBottom = '0.125rem';
                headerDiv.style.marginBottom = '0';
            } else {
                section.classList.remove('section-collapsed');
                section.style.padding = section.__originalStyles.padding;
                headerDiv.style.paddingBottom = headerDiv.__originalStyles.paddingBottom;
                headerDiv.style.marginBottom = headerDiv.__originalStyles.marginBottom;
            }

            // Rotar cheurón
            const svg = toggleBtn.querySelector('svg');
            if (svg) svg.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';

            toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            section.__expanded = expanded;
        };

        toggleBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            applyCollapseState(!section.__expanded);
        });

        // Hacer que click en el header también active el toggle
        // pero IGNORAR clicks en elementos interactivos (botones, enlaces, inputs, etc.) para no interferir con controles internos
        headerDiv.style.cursor = 'pointer';
        headerDiv.addEventListener('click', (e) => {
            if (e.target.closest('.toggle-section-btn')) return;
            if (e.target.closest('button, a, input, textarea, select, label, .tgs-dot')) return;
            // si se hace click en cualquier otro lugar del header, toggle
            applyCollapseState(!section.__expanded);
        });

        // Inicializar estado (asegurar consistencia)
        applyCollapseState(true);

        // Hacer que el control del carrusel u otros botones no colapsen la sección accidentalmente
        // (si en algún caso se quiere que un botón concreto colapse, añadir la clase "collapse-toggle" a ese botón en el HTML)
    });
}

// Exponer y ejecutar desde el ámbito global
window.enhanceSectionTitles = enhanceSectionTitles;
window.loadHeader = loadHeader;
window.loadSidebar = loadSidebar;
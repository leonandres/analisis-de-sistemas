// component.js - Header y Sidebar global con navegación dinámica

// ============================================================
// MAPA DE CLASES Y SECCIONES (fuente única de verdad)
// ============================================================
const CLASES_DATA = [
    {
        id: 'clase01',
        key: 'clase-01-definiciones-iniciales',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2"/><path d="M2 12h20"/></svg>`,
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
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
        numero: '02',
        titulo: 'Procesos de negocio',
        color: 'emerald',
        secciones: [
            { anchor: 'fundamentos',           label: 'Fundamentos y conceptos',         icon: 'book-open' },
            { anchor: 'vision-procesos',        label: 'Visión funcional vs. procesos',   icon: 'eye' },
            { anchor: 'clasificacion',          label: 'Clasificación (ISO 9001)',         icon: 'layers' },
            { anchor: 'modelo-gestion',         label: 'Modelo de gestión',               icon: 'git-merge' },
            { anchor: 'fases',                  label: 'Fases de gestión',                icon: 'list-ordered' },
            { anchor: 'modelado',               label: 'Modelado (SIPOC / BPMN)',         icon: 'workflow' },
            { anchor: 'caso-termilagro',        label: 'Caso Termilagro S.A.',            icon: 'factory' },
            { anchor: 'ventas-compras',         label: 'Ventas vs. Compras',              icon: 'arrow-left-right' },
            { anchor: 'practica-clasificacion', label: 'Laboratorio: Clasificación',      icon: 'flask-conical' },
            { anchor: 'examen-autoevaluacion',  label: 'Trivia de autoevaluación',        icon: 'help-circle' },
            { anchor: 'examen-final',           label: 'Examen final',                    icon: 'graduation-cap' },
            { anchor: 'materiales',             label: 'Materiales de la clase',          icon: 'paperclip' },
        ]
    },
    {
        id: 'clase03',
        key: 'clase-03-informe-de-reconocimiento',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
        numero: '03',
        titulo: 'Informe de reconocimiento',
        color: 'amber',
        secciones: [
            { anchor: 'concepto',              label: 'Concepto y propósito' },
            { anchor: 'etapas-proceso',         label: 'Etapas del proceso' },
            { anchor: 'estructura',             label: 'Estructura estándar (UTN)' },
            { anchor: 'carta-sponsor',          label: 'Carta al sponsor' },
            { anchor: 'datos-faltantes',        label: 'Sección de datos faltantes' },
            { anchor: 'tecnicas-relevamiento',  label: 'Técnicas de relevamiento' },
            { anchor: 'caso-infoley',           label: 'Caso: InfoLey Web' },
            { anchor: 'caso-juegos',            label: 'Caso: Juegos del País S.H.' },
            { anchor: 'checklist',              label: 'Checklist de validación' },
        ]
    },
    {
        id: 'clase07',
        key: 'clase-07-planificacion',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>`,
        numero: '07',
        titulo: 'Planificación de proyectos',
        color: 'orange',
        secciones: [
            { anchor: 'fundamentos',        label: 'Fundamentos y triple restricción' },
            { anchor: 'wbs',                label: 'WBS / EDT' },
            { anchor: 'cpm-pert',           label: 'CPM y PERT' },
            { anchor: 'gantt',              label: 'Diagrama de Gantt' },
            { anchor: 'agilidad',           label: 'Metodologías ágiles' },
            { anchor: 'agil-vs-tradicional',label: 'Ágil vs. predictivo' },
        ]
    },
    {
        id: 'clase06',
        key: 'clase-06-requerimientos-funcionales-y-no-funcionales',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,
        numero: '06',
        titulo: 'Ingeniería de requerimientos',
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
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
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
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/><path d="M8 12h.01"/><path d="M12 12h4"/><path d="M8 16h.01"/><path d="M12 16h4"/></svg>`,
        numero: '12',
        titulo: 'Historias de usuario',
        color: 'emerald',
        secciones: [
            { anchor: 'jerarquia',          label: 'Jerarquía de requerimientos ágiles' },
            { anchor: 'concepto',           label: 'Concepto y filosofía ágil' },
            { anchor: 'vs-requerimientos',  label: 'HU vs. Requerimiento' },
            { anchor: 'formato',            label: 'Formato canónico (3 C)' },
            { anchor: 'ejemplos-3cs',       label: 'Más ejemplos (3 C)' },
            { anchor: 'invest',             label: 'Criterios INVEST' },
            { anchor: 'criterios-aceptacion', label: 'Criterios de aceptación (BDD)' },
            { anchor: 'estimacion',         label: 'Estimación & Story Points' },
            { anchor: 'ejercicios',         label: '⚡ Ejercicios prácticos' },
            { anchor: 'material-nuevo',     label: '📥 Material complementario' },
        ]
    },
    {
        id: 'examen',
        key: 'examen',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>`,
        numero: '📝',
        titulo: 'Primer examen parcial',
        color: 'rose',
        secciones: [
            { anchor: 'informe-reconocimiento',  label: 'V o F' },
            { anchor: 'ejemplo-informe',         label: 'Informe de reconocimiento' },
            { anchor: 'casos-uso',               label: 'Casos de uso e historias de usuario' },
            { anchor: 'parcial-1',               label: 'Procesos de negocio' },
        ]
    },
    {
        id: 'parcial',
        key: 'parcial',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
        numero: '📊',
        titulo: 'Parciales resueltos',
        color: 'blue',
        secciones: [
            { anchor: 'parcial-1-resuelto', label: '1° Parcial - Resuelto' },
            { anchor: 'parcial-2-resuelto', label: '2° Parcial - Resuelto' },
        ]
    }
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
        clase07: isSubPage ? '../clase-07-planificacion/index.html' : './clases/clase-07-planificacion/index.html',
        clase10: isSubPage ? '../clase-10-casos-de-uso/index.html' : './clases/clase-10-casos-de-uso/index.html',
        clase12: isSubPage ? '../clase-12-historias-de-usuario/index.html' : './clases/clase-12-historias-de-usuario/index.html',
        examen: isSubPage ? '../examen/index.html' : './clases/examen/index.html',
        parcial: isSubPage ? '../parcial/index.html' : './clases/parcial/index.html'
    };
}

function getHeaderHTML(paths) {
    return `
<style>
    /* Barra vertical animada al pasar el mouse sobre un ítem del menú */
    .menu-item-link::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 0%;
        border-radius: 999px;
        background: linear-gradient(180deg, #0ea5e9, #6366f1);
        transition: height 0.25s ease, opacity 0.25s ease;
        opacity: 0;
    }
    .menu-item-link:hover::before {
        height: 60%;
        opacity: 1;
    }
</style>
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
                    <span class="text-base leading-none"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></span>
                    <span class="hidden sm:inline">Clases</span>
                    <svg id="menu-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="transition-transform duration-300">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                
                <div id="menu-clases" class="hidden absolute top-full left-0 mt-2 w-85 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 origin-top-left scale-95 opacity-0 z-50">
                    <div class="p-2 max-h-[80vh] overflow-y-auto">
                        <div class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-2">Ir a otra clase</div>
                        
                        <a href="${paths.clase01}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2"/><path d="M2 12h20"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 01</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Definiciones iniciales</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">TGS, SI, rol del analista</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase02}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Clase 02</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Procesos de negocio</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">ISO 9001, SIPOC, BPMN</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase03}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Clase 03</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Informe de reconocimiento</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Estructura UTN, carta al sponsor, datos faltantes</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>
                        
                        <a href="${paths.clase06}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">Clase 06</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Ingeniería de requerimientos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Funcionales y no funcionales</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase07}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Clase 07</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Planificación de proyectos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">CPM, PERT, Gantt, Scrum</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase10}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Clase 10</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Casos de uso</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">UML, actores, relaciones</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase12}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/><path d="M8 12h.01"/><path d="M12 12h4"/><path d="M8 16h.01"/><path d="M12 16h4"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Clase 12</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Historias de usuario</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">INVEST, BDD, Story points</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.examen}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Repaso</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">Conceptos & parciales</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Machete de parciales UTN</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.parcial}" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Parciales</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Parciales resueltos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">1° y 2° parcial con resolución</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
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
        orange:  { badge: 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300', border: 'border-orange-500', dot: 'bg-orange-500' },
    };

    const clasesHTML = CLASES_DATA.map(clase => {
        const isActive = clase.key === currentKey;
        const c = colorMap[clase.color] || colorMap.sky;
        const baseUrl = paths[clase.id] || '#';
        const basePath = baseUrl.replace('index.html', '');

        const seccionesHTML = clase.secciones.map(sec => {
            const iconTag = `<span class="seccion-dot w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 opacity-50 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:h-3.5 group-hover:rounded-[2px]"></span>`;
            return `<a href="${basePath}index.html#${sec.anchor}"
                class="flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-150 group">
                ${iconTag}
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
                <span class="w-5 h-5 flex-shrink-0 flex items-center justify-center text-sky-600 dark:text-sky-300">${clase.emoji}</span>
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
        // Remover emojis/puntuación inicial y prefijo numérico si existe (admite "1.", "1)", "1-" y también "1 - " con espacios)
        let cleaned = original.replace(/^[^0-9A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/, '').replace(/^\s*(\d+)\s*[\.\-\)]?\s*/, '');
        // Guardar número (si el título original tenía número) o calcular por índice
        const numberMatch = original.match(/^\s*(\d+)\s*[\.\-\)]/);
        const number = numberMatch ? numberMatch[1] : (idx + 1).toString();

        // Normalizar a sentence case, preservando acrónimos (siglas en mayúsculas dentro del título, ej. INVEST, BDD)
        let text = cleaned.trim();
        if (text && text === text.toUpperCase()) {
            // Todo el título es un posible acrónimo -> mantener tal cual
            text = text;
        } else if (text) {
            text = text.replace(/\S+/g, (word) => {
                const core = word.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, '');
                // Palabra de 2+ letras, toda en mayúsculas -> es una sigla, no tocarla
                if (core.length >= 2 && core === core.toUpperCase() && core !== core.toLowerCase()) {
                    return word;
                }
                return word.toLowerCase();
            });
            text = text.charAt(0).toUpperCase() + text.slice(1);
        }

        const gradientStyle = 'background: linear-gradient(90deg, #0e7490, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: inline-block; font-size: 1.25rem; line-height: 1.75rem; font-weight: 800;';

        // Reemplazar el h2 por una versión con número estilizado y botón de colapsado
        h2.innerHTML = `
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center min-w-[2rem] h-8 px-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-base font-extrabold text-slate-600 dark:text-slate-300 tabular-nums section-number">${number}</span>
                    <span class="section-title-text ml-1" style="${gradientStyle}">${text}</span>
                </div>
                <button aria-expanded="true" class="toggle-section-btn text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-transform" title="Minimizar/Expandir sección">
                    <svg class="w-4 h-4 transform transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
            </div>
        `;

        const toggleBtn = headerDiv.querySelector('.toggle-section-btn');
        const headerIndex = Array.from(section.children).indexOf(headerDiv);
        const contentChildren = Array.from(section.children).slice(headerIndex + 1);

        // Estado inicial (expandido)
        section.__expanded = true;

        const applyCollapseState = (expanded) => {
            // Solo ocultar/mostrar el contenido posterior al header; el encabezado mantiene su espaciado
            contentChildren.forEach(el => {
                el.classList.toggle('hidden', !expanded);
            });

            section.classList.toggle('section-collapsed', !expanded);

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
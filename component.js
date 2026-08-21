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
            { anchor: 'ejercicios',         label: 'Ejercicios prácticos' },
            { anchor: 'material-nuevo',     label: 'Material de lectura' },
        ]
    },
    {
        id: 'examen',
        key: 'examen',
        emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>`,
        numero: 'Repaso',
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

// ============================================================
// ÍCONOS VECTORIALES SVG DE TEMAS (sin emojis genéricos)
// ============================================================
const THEME_ICONS = {
    light: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    dark: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    cupcake: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-400"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1.5 1.5-1.5 1.5 1.5 2.5 1.5 1.5-1.5 2.5-1.5 1.5 1.5 2.5 1.5 1.5-1.5 2.5-1.5 1.5 1.5 2.5 1.5 1.5-1.5 1.5-1.5"/><path d="M12 7V3"/><path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`,
    bumblebee: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    emerald: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="12"/><polyline points="22 8.5 12 12 2 8.5"/></svg>`,
    retro: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-700"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h12"/><path d="M6 12h12"/><path d="M6 16h8"/></svg>`,
    garden: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M12 22v-9"/><path d="M12 13a7 7 0 0 0-7-7c0 4 3 7 7 7z"/><path d="M12 13a7 7 0 0 1 7-7c0 4-3 7-7 7z"/></svg>`,
    lofi: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    pastel: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.74 1.7-1.67 0-.44-.19-.88-.49-1.2-.29-.31-.49-.75-.49-1.19 0-.92.74-1.67 1.67-1.67H16c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z"/></svg>`,
    fantasy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fuchsia-400"><path d="m15 4-2 2 2 2 2-2-2-2z"/><path d="m5 16-2 2 2 2 2-2-2-2z"/><path d="M19 13l-1.5 1.5L19 16l1.5-1.5L19 13z"/><path d="m2 2 20 20"/></svg>`,
    autumn: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    acid: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lime-400"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.508 23h10.984a2 2 0 0 0 1.787-2.45L14.21 10.423A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/></svg>`,
    lemonade: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m4.93 19.07 14.14-14.14"/></svg>`,
    winter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-300"><line x1="12" y1="2" x2="12" y2="22"/><line x1="20" y1="12" x2="4" y2="12"/><line x1="17.66" y1="17.66" x2="6.34" y2="6.34"/><line x1="6.34" y1="17.66" x2="17.66" y2="6.34"/></svg>`,
    nord: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-200"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    cyberpunk: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    valentine: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    wireframe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    synthwave: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fuchsia-500"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    halloween: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><circle cx="12" cy="13" r="9"/><path d="M12 4V2"/><path d="M9 10l.01 0"/><path d="M15 10l.01 0"/><path d="M10 15h4"/></svg>`,
    forest: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><path d="m8 6 4-4 4 4h-3v4h3l-4 4 4 4h-3v4H8v-4H5l4-4H6l-4-4h3V6H5z"/></svg>`,
    aqua: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    black: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900 dark:text-white"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`,
    luxury: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="m2 4 3 12h14l3-12-6 7-4-5-4 5-6-7z"/><path d="M5 20h14"/></svg>`,
    dracula: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><path d="M12 2a8 8 0 0 0-8 8c0 3.5 2 6.5 5 7.5V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.5c3-1 5-4 5-7.5a8 8 0 0 0-8-8z"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>`,
    business: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    night: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>`,
    coffee: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-800"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
    dim: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    sunset: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h20"/><path d="M20 18a8 8 0 1 0-16 0"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/></svg>`
};

const ALL_THEMES = [
    { id: 'light', name: 'Claro', group: 'Claros' },
    { id: 'cupcake', name: 'Cupcake (Pastel)', group: 'Claros' },
    { id: 'bumblebee', name: 'Bumblebee', group: 'Claros' },
    { id: 'emerald', name: 'Emerald', group: 'Claros' },
    { id: 'retro', name: 'Retro', group: 'Claros' },
    { id: 'garden', name: 'Garden', group: 'Claros' },
    { id: 'lofi', name: 'Lo-Fi', group: 'Claros' },
    { id: 'pastel', name: 'Pastel', group: 'Claros' },
    { id: 'fantasy', name: 'Fantasy', group: 'Claros' },
    { id: 'autumn', name: 'Autumn', group: 'Claros' },
    { id: 'acid', name: 'Acid', group: 'Claros' },
    { id: 'lemonade', name: 'Lemonade', group: 'Claros' },
    { id: 'winter', name: 'Winter', group: 'Claros' },
    { id: 'nord', name: 'Nord', group: 'Claros' },
    { id: 'cyberpunk', name: 'Cyberpunk', group: 'Claros' },
    { id: 'valentine', name: 'Valentine', group: 'Claros' },
    { id: 'wireframe', name: 'Wireframe', group: 'Claros' },
    { id: 'dark', name: 'Oscuro', group: 'Oscuros' },
    { id: 'synthwave', name: 'Synthwave', group: 'Oscuros' },
    { id: 'halloween', name: 'Halloween', group: 'Oscuros' },
    { id: 'forest', name: 'Forest', group: 'Oscuros' },
    { id: 'aqua', name: 'Aqua', group: 'Oscuros' },
    { id: 'black', name: 'Black', group: 'Oscuros' },
    { id: 'luxury', name: 'Luxury', group: 'Oscuros' },
    { id: 'dracula', name: 'Dracula', group: 'Oscuros' },
    { id: 'business', name: 'Business', group: 'Oscuros' },
    { id: 'night', name: 'Night', group: 'Oscuros' },
    { id: 'coffee', name: 'Coffee', group: 'Oscuros' },
    { id: 'dim', name: 'Dim', group: 'Oscuros' },
    { id: 'sunset', name: 'Sunset', group: 'Oscuros' }
];

function getHeaderHTML(paths) {
    const themeItemsHTML = ALL_THEMES.map(t => {
        const iconSvg = THEME_ICONS[t.id] || THEME_ICONS.light;
        return `
        <button type="button" data-theme-id="${t.id}" class="theme-option-btn w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 group">
            <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform flex-shrink-0">
                    ${iconSvg}
                </span>
                <span class="truncate font-medium">${t.name}</span>
            </div>
            <span class="theme-check-icon hidden text-sky-500 font-bold">✓</span>
        </button>`;
    }).join('');

    return `
<style>
    .menu-item-link::before {
        content: ''; position: absolute; left: 0; top: 50%;
        transform: translateY(-50%); width: 3px; height: 0%;
        border-radius: 999px; background: linear-gradient(180deg, #0ea5e9, #6366f1);
        transition: height 0.25s ease, opacity 0.25s ease; opacity: 0;
    }
    .menu-item-link:hover::before { height: 60%; opacity: 1; }
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
                        
                        <a href="${paths.clase01}" data-clase="clase01" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2"/><path d="M2 12h20"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 01</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Definiciones iniciales</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">TGS, SI, rol del analista</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase02}" data-clase="clase02" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Clase 02</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Procesos de negocio</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">ISO 9001, SIPOC, BPMN</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase03}" data-clase="clase03" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Clase 03</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Informe de reconocimiento</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Estructura UTN, carta al sponsor, datos faltantes</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>
                        
                        <a href="${paths.clase06}" data-clase="clase06" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">Clase 06</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Ingeniería de requerimientos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Funcionales y no funcionales</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase07}" data-clase="clase07" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Clase 07</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Planificación de proyectos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">CPM, PERT, Gantt, Scrum</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase10}" data-clase="clase10" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Clase 10</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Casos de uso</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">UML, actores, relaciones</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.clase12}" data-clase="clase12" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/><path d="M8 12h.01"/><path d="M12 12h4"/><path d="M8 16h.01"/><path d="M12 16h4"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Clase 12</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Historias de usuario</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">INVEST, BDD, Story points</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.examen}" data-clase="examen" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
                            <span class="w-9 h-9 flex items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg></span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Repaso</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">Conceptos & parciales</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Machete de parciales UTN</div>
                            </div>
                            <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>

                        <a href="${paths.parcial}" data-clase="parcial" class="relative flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700 menu-item-link">
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

        <!-- CONTROL DE TEMAS -->
        <div class="flex items-center gap-2">
            <!-- BOTÓN: menú desplegable con íconos vectoriales para TODOS los temas -->
            <div class="relative">
                <button id="btn-theme-menu" class="relative w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 flex-shrink-0 cursor-pointer" title="Ver galería de temas">
                    <span id="theme-active-icon" class="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        ${THEME_ICONS.light}
                    </span>
                </button>

                <div id="theme-menu-panel" class="hidden absolute top-full right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 origin-top-right scale-95 opacity-0 z-50 p-2 max-h-[75vh] overflow-y-auto">
                    <div class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1.5">Temas claros</div>
                    <div class="space-y-0.5 mb-2">
                        ${ALL_THEMES.filter(t => t.group === 'Claros').map(t => `
                            <button type="button" data-theme-id="${t.id}" class="theme-option-btn w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 group">
                                <div class="flex items-center gap-2.5 min-w-0">
                                    <span class="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform flex-shrink-0">
                                        ${THEME_ICONS[t.id] || THEME_ICONS.light}
                                    </span>
                                    <span class="truncate font-medium">${t.name}</span>
                                </div>
                                <span class="theme-check-icon hidden text-sky-500 font-bold">✓</span>
                            </button>
                        `).join('')}
                    </div>
                    <div class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1.5 border-t border-slate-100 dark:border-slate-800 pt-2">Temas oscuros</div>
                    <div class="space-y-0.5">
                        ${ALL_THEMES.filter(t => t.group === 'Oscuros').map(t => `
                            <button type="button" data-theme-id="${t.id}" class="theme-option-btn w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 group">
                                <div class="flex items-center gap-2.5 min-w-0">
                                    <span class="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform flex-shrink-0">
                                        ${THEME_ICONS[t.id] || THEME_ICONS.dark}
                                    </span>
                                    <span class="truncate font-medium">${t.name}</span>
                                </div>
                                <span class="theme-check-icon hidden text-sky-500 font-bold">✓</span>
                            </button>
                        `).join('')}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 opacity-95"></div>
</header>
`;
}

// ============================================================
// ANIMACIONES (Animate.css vía CDN) & DaisyUI CDN
// ============================================================
function injectDaisyUI() {
    if (document.getElementById('daisyui-cdn')) return;
    const link = document.createElement('link');
    link.id = 'daisyui-cdn';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css';
    document.head.appendChild(link);
}

function injectAnimateCSS() {
    injectDaisyUI();
    if (document.getElementById('animate-css-cdn')) return;
    const link = document.createElement('link');
    link.id = 'animate-css-cdn';
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(link);

    if (document.getElementById('scroll-reveal-style')) return;
    const style = document.createElement('style');
    style.id = 'scroll-reveal-style';
    style.textContent = `
        .animate-reveal-pending { opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
            .animate-reveal-pending { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Anima cada <section> del contenido al entrar en pantalla (una sola vez por sección).
// Respeta prefers-reduced-motion: si el usuario lo pidió, las secciones aparecen sin animar.
function enableScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = document.querySelectorAll('main section');
    if (!sections.length) return;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
        sections.forEach(s => s.classList.remove('animate-reveal-pending'));
        return;
    }

    sections.forEach(s => s.classList.add('animate-reveal-pending'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.remove('animate-reveal-pending');
                el.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    sections.forEach(s => observer.observe(s));
}

function injectThemeGlows() {
    if (document.querySelector('.theme-glow-1')) return;
    const g1 = document.createElement('div'); g1.className = 'theme-glow-1'; g1.setAttribute('aria-hidden', 'true');
    const g2 = document.createElement('div'); g2.className = 'theme-glow-2'; g2.setAttribute('aria-hidden', 'true');
    const g3 = document.createElement('div'); g3.className = 'theme-glow-3'; g3.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(g3, document.body.firstChild);
    document.body.insertBefore(g2, document.body.firstChild);
    document.body.insertBefore(g1, document.body.firstChild);
}

function injectThemeStyles() {
    if (document.getElementById('daisyui-high-priority-theme-styles')) return;
    const style = document.createElement('style');
    style.id = 'daisyui-high-priority-theme-styles';
    style.textContent = `
        .theme-glow-1 {
            position: fixed; top: -10rem; right: -8rem;
            width: 650px; height: 650px; border-radius: 999px;
            background: color-mix(in srgb, oklch(var(--p)) 38%, transparent);
            filter: blur(120px); pointer-events: none; z-index: 0;
        }
        .theme-glow-2 {
            position: fixed; bottom: -10rem; left: -8rem;
            width: 650px; height: 650px; border-radius: 999px;
            background: color-mix(in srgb, oklch(var(--s)) 32%, transparent);
            filter: blur(120px); pointer-events: none; z-index: 0;
        }
        .theme-glow-3 {
            position: fixed; top: 30%; left: 50%; transform: translateX(-50%);
            width: 750px; height: 750px; border-radius: 999px;
            background: color-mix(in srgb, oklch(var(--a)) 20%, transparent);
            filter: blur(140px); pointer-events: none; z-index: 0;
        }

        html[data-theme] {
            background-color: oklch(var(--b1)) !important;
            color: oklch(var(--bc)) !important;
        }

        html[data-theme] body,
        html[data-theme] body.bg-slate-50,
        html[data-theme].dark body,
        html[data-theme].dark body.dark\:bg-slate-950 {
            background-color: oklch(var(--b1)) !important;
            color: oklch(var(--bc)) !important;
        }

        html[data-theme] main > div[class*="bg-gradient"],
        html[data-theme] main > div.bg-gradient-to-r {
            background: linear-gradient(135deg, 
                color-mix(in srgb, oklch(var(--p)) 85%, #0b132b) 0%, 
                color-mix(in srgb, oklch(var(--s)) 70%, oklch(var(--b2))) 50%,
                color-mix(in srgb, oklch(var(--p)) 60%, oklch(var(--b1))) 100%
            ) !important;
            border: 1px solid color-mix(in srgb, oklch(var(--p)) 40%, transparent) !important;
            box-shadow: 0 12px 36px color-mix(in srgb, oklch(var(--p)) 25%, transparent) !important;
        }

        html[data-theme] main section,
        html[data-theme] #global-sidebar,
        html[data-theme] #global-sidebar > div,
        html[data-theme] .bg-white,
        html[data-theme].dark main section,
        html[data-theme].dark #global-sidebar,
        html[data-theme].dark #global-sidebar > div,
        html[data-theme].dark .bg-slate-900,
        html[data-theme].dark .dark\:bg-slate-900 {
            background-color: oklch(var(--b2)) !important;
            color: oklch(var(--bc)) !important;
            border-color: color-mix(in srgb, oklch(var(--p)) 30%, color-mix(in srgb, oklch(var(--bc)) 15%, transparent)) !important;
        }

        html[data-theme] main section:hover,
        html[data-theme] .bg-white:hover {
            border-color: color-mix(in srgb, oklch(var(--p)) 55%, transparent) !important;
            box-shadow: 0 12px 40px color-mix(in srgb, oklch(var(--p)) 25%, transparent) !important;
        }

        html[data-theme] .bg-indigo-50,
        html[data-theme] .bg-indigo-100,
        html[data-theme] .bg-sky-50,
        html[data-theme] .bg-sky-100,
        html[data-theme] .bg-amber-50,
        html[data-theme] .bg-emerald-50,
        html[data-theme] .bg-rose-50,
        html[data-theme] .bg-slate-100,
        html[data-theme] .flip-card-front,
        html[data-theme] .flip-card-back,
        html[data-theme].dark .dark\:bg-indigo-950,
        html[data-theme].dark .dark\:bg-indigo-950\/30,
        html[data-theme].dark .dark\:bg-slate-800,
        html[data-theme].dark .dark\:bg-slate-800\/50 {
            background-color: color-mix(in srgb, oklch(var(--p)) 14%, oklch(var(--b2))) !important;
            color: oklch(var(--bc)) !important;
            border-color: color-mix(in srgb, oklch(var(--p)) 35%, transparent) !important;
        }

        html[data-theme] h1,
        html[data-theme] h2,
        html[data-theme] h3,
        html[data-theme] h4,
        html[data-theme] .text-slate-900,
        html[data-theme] .text-slate-800,
        html[data-theme].dark .text-slate-100,
        html[data-theme].dark .text-slate-200 {
            color: oklch(var(--bc)) !important;
        }

        html[data-theme] span[class*="bg-sky-100"],
        html[data-theme] span[class*="bg-indigo-100"],
        html[data-theme] span[class*="bg-emerald-100"],
        html[data-theme] .badge-primary {
            background-color: oklch(var(--p)) !important;
            color: oklch(var(--pc)) !important;
        }

        html[data-theme] header#site-header {
            background-color: color-mix(in srgb, oklch(var(--b1)) 85%, oklch(var(--p)) 15%) !important;
            border-bottom: 2px solid color-mix(in srgb, oklch(var(--p)) 45%, transparent) !important;
        }
    `;
    document.head.appendChild(style);
}

function loadHeader() {
    injectAnimateCSS();
    injectThemeGlows();
    injectThemeStyles();
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
            enableScrollReveal();
        }, 20);
    } else {
        enableScrollReveal();
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
        sky:     { badge: 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300',     border: 'border-sky-500',    dot: 'bg-sky-500', hoverText: 'group-hover:text-sky-600 dark:group-hover:text-sky-400' },
        emerald: { badge: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300', border: 'border-emerald-500', dot: 'bg-emerald-500', hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400' },
        amber:   { badge: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300',   border: 'border-amber-500',  dot: 'bg-amber-500', hoverText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400' },
        violet:  { badge: 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300', border: 'border-violet-500', dot: 'bg-violet-500', hoverText: 'group-hover:text-violet-600 dark:group-hover:text-violet-400' },
        indigo:  { badge: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300', border: 'border-indigo-500', dot: 'bg-indigo-500', hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400' },
        rose:    { badge: 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300',     border: 'border-rose-500',   dot: 'bg-rose-500', hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400' },
        orange:  { badge: 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300', border: 'border-orange-500', dot: 'bg-orange-500', hoverText: 'group-hover:text-orange-600 dark:group-hover:text-orange-400' },
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
                class="sidebar-clase-btn relative w-full flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-xl text-left transition-all duration-200 group overflow-hidden
                    ${isActive
                        ? `${c.badge} font-semibold`
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'}"
            >
                <span class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full ${c.dot} transition-all duration-200 ease-out group-hover:h-3/5"></span>
                <span class="w-5 h-5 flex-shrink-0 flex items-center justify-center text-sky-600 dark:text-sky-300 transition-all duration-200 group-hover:scale-110 ${c.hoverText}">${clase.emoji}</span>
                <div class="flex-1 min-w-0">
                    <div class="text-[10px] font-bold uppercase tracking-wider opacity-60 transition-colors duration-200 ${c.hoverText}">Clase ${clase.numero}</div>
                    <div class="text-xs leading-tight truncate transition-colors duration-200 ${c.hoverText}">${clase.titulo}</div>
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

// Clases literales (Tailwind necesita ver el string completo) para el resaltado del ítem activo del menú
const MENU_RING_MAP = {
    sky:     { ring: 'ring-sky-300 dark:ring-sky-800',         text: 'text-sky-600 dark:text-sky-400' },
    emerald: { ring: 'ring-emerald-300 dark:ring-emerald-800', text: 'text-emerald-600 dark:text-emerald-400' },
    amber:   { ring: 'ring-amber-300 dark:ring-amber-800',     text: 'text-amber-600 dark:text-amber-400' },
    violet:  { ring: 'ring-violet-300 dark:ring-violet-800',   text: 'text-violet-600 dark:text-violet-400' },
    indigo:  { ring: 'ring-indigo-300 dark:ring-indigo-800',   text: 'text-indigo-600 dark:text-indigo-400' },
    rose:    { ring: 'ring-rose-300 dark:ring-rose-800',       text: 'text-rose-600 dark:text-rose-400' },
    orange:  { ring: 'ring-orange-300 dark:ring-orange-800',   text: 'text-orange-600 dark:text-orange-400' },
    blue:    { ring: 'ring-blue-300 dark:ring-blue-800',       text: 'text-blue-600 dark:text-blue-400' },
};

function highlightCurrentClaseInMenu(menuClases) {
    if (!menuClases) return;
    const currentKey = getCurrentClaseKey();
    const clase = currentKey ? CLASES_DATA.find(c => c.key === currentKey) : null;
    menuClases.querySelectorAll('.menu-item-link').forEach(link => {
        link.classList.remove('ring-1', 'ring-inset');
        link.removeAttribute('aria-current');
        const badge = link.querySelector('.menu-item-actual-badge');
        if (badge) badge.remove();
    });
    if (!clase) return;
    const activeLink = menuClases.querySelector(`.menu-item-link[data-clase="${clase.id}"]`);
    const colors = MENU_RING_MAP[clase.color] || MENU_RING_MAP.sky;
    if (activeLink) {
        activeLink.classList.add('ring-1', 'ring-inset', ...colors.ring.split(' '));
        activeLink.setAttribute('aria-current', 'page');
        const label = activeLink.querySelector('.flex-1');
        if (label) {
            const tag = document.createElement('span');
            tag.className = `menu-item-actual-badge text-[9px] font-black uppercase tracking-wider ${colors.text}`;
            tag.textContent = 'Estás acá';
            label.appendChild(document.createElement('br'));
            label.appendChild(tag);
        }
    }
}

function initializeMenu() {
    const btnMenu = document.getElementById('btn-menu-clases');
    const menuClases = document.getElementById('menu-clases');
    const menuArrow = document.getElementById('menu-arrow');

    if (btnMenu && menuClases) {
        highlightCurrentClaseInMenu(menuClases);

        const openMenu = () => {
            menuClases.classList.remove('hidden');
            setTimeout(() => {
                menuClases.style.transform = 'scale(1)';
                menuClases.style.opacity = '1';
            }, 10);
            if (menuArrow) menuArrow.style.transform = 'rotate(180deg)';
            btnMenu.setAttribute('aria-expanded', 'true');
        };

        const closeMenu = ({ focusButton } = {}) => {
            menuClases.style.transform = 'scale(0.95)';
            menuClases.style.opacity = '0';
            setTimeout(() => {
                menuClases.classList.add('hidden');
            }, 200);
            if (menuArrow) menuArrow.style.transform = 'rotate(0deg)';
            btnMenu.setAttribute('aria-expanded', 'false');
            if (focusButton) btnMenu.focus();
        };

        btnMenu.setAttribute('aria-haspopup', 'true');
        btnMenu.setAttribute('aria-expanded', 'false');
        btnMenu.setAttribute('aria-controls', 'menu-clases');
        menuClases.setAttribute('role', 'menu');

        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = menuClases.classList.contains('hidden');
            if (isHidden) openMenu(); else closeMenu();
        });

        document.addEventListener('click', (e) => {
            if (!menuClases.classList.contains('hidden') &&
                !btnMenu.contains(e.target) &&
                !menuClases.contains(e.target)) {
                closeMenu();
            }
        });

        // Cerrar con Escape y devolver el foco al botón (accesibilidad de teclado)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !menuClases.classList.contains('hidden')) {
                closeMenu({ focusButton: true });
            }
        });
    }

    // Configurar menú interactivo de galería de temas
    const btnThemeMenu = document.getElementById('btn-theme-menu');
    const themeMenuPanel = document.getElementById('theme-menu-panel');
    const themeMenuArrow = document.getElementById('theme-menu-arrow');

    if (btnThemeMenu && themeMenuPanel) {
        const openThemeMenu = () => {
            themeMenuPanel.classList.remove('hidden');
            setTimeout(() => {
                themeMenuPanel.style.transform = 'scale(1)';
                themeMenuPanel.style.opacity = '1';
            }, 10);
            if (themeMenuArrow) themeMenuArrow.style.transform = 'rotate(180deg)';
        };

        const closeThemeMenu = () => {
            themeMenuPanel.style.transform = 'scale(0.95)';
            themeMenuPanel.style.opacity = '0';
            setTimeout(() => {
                themeMenuPanel.classList.add('hidden');
            }, 200);
            if (themeMenuArrow) themeMenuArrow.style.transform = 'rotate(0deg)';
        };

        btnThemeMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = themeMenuPanel.classList.contains('hidden');
            if (isHidden) openThemeMenu(); else closeThemeMenu();
        });

        themeMenuPanel.querySelectorAll('.theme-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const themeId = btn.getAttribute('data-theme-id');
                if (themeId && typeof window.applyTheme === 'function') {
                    window.applyTheme(themeId);
                } else if (themeId) {
                    document.documentElement.setAttribute('data-theme', themeId);
                    localStorage.setItem('theme', themeId);
                }
                closeThemeMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (!themeMenuPanel.classList.contains('hidden') &&
                !btnThemeMenu.contains(e.target) &&
                !themeMenuPanel.contains(e.target)) {
                closeThemeMenu();
            }
        });
    }
}

// Degradado de subtítulos por color de tema de cada clase, con un juego de tonos para modo claro
// (más profundo/saturado, contraste fuerte sobre fondo blanco) y otro para modo oscuro (más brillante/
// luminoso, contraste fuerte sobre fondo oscuro). Se resuelven vía variables CSS, así el degradado
// cambia solo al togglear el tema, sin recalcular nada en JS.
const SECTION_GRADIENT_COLORS = {
    sky:     { light: ['#0369a1', '#06b6d4'], dark: ['#38bdf8', '#22d3ee'] },
    emerald: { light: ['#065f46', '#22c55e'], dark: ['#34d399', '#4ade80'] },
    amber:   { light: ['#92400e', '#f59e0b'], dark: ['#fbbf24', '#fb923c'] },
    violet:  { light: ['#5b21b6', '#a855f7'], dark: ['#c084fc', '#e879f9'] },
    indigo:  { light: ['#3730a3', '#6366f1'], dark: ['#818cf8', '#a78bfa'] },
    rose:    { light: ['#9f1239', '#f43f5e'], dark: ['#fb7185', '#f472b6'] },
    orange:  { light: ['#9a3412', '#f97316'], dark: ['#fb923c', '#fbbf24'] },
    blue:    { light: ['#1e3a8a', '#3b82f6'], dark: ['#60a5fa', '#38bdf8'] },
};

function injectSectionGradientStyles() {
    if (document.getElementById('section-gradient-vars')) return;
    const style = document.createElement('style');
    style.id = 'section-gradient-vars';
    const rootVars = Object.entries(SECTION_GRADIENT_COLORS)
        .map(([color, tones]) => `--sg-${color}-from: ${tones.light[0]}; --sg-${color}-to: ${tones.light[1]};`)
        .join(' ');
    const darkVars = Object.entries(SECTION_GRADIENT_COLORS)
        .map(([color, tones]) => `--sg-${color}-from: ${tones.dark[0]}; --sg-${color}-to: ${tones.dark[1]};`)
        .join(' ');
    style.textContent = `:root { ${rootVars} } html.dark { ${darkVars} }`;
    document.head.appendChild(style);
}

function getCurrentClaseColorVarNames() {
    const key = typeof getCurrentClaseKey === 'function' ? getCurrentClaseKey() : null;
    const clase = key ? CLASES_DATA.find(c => c.key === key) : null;
    const color = (clase && SECTION_GRADIENT_COLORS[clase.color]) ? clase.color : 'sky';
    return { from: `var(--sg-${color}-from)`, to: `var(--sg-${color}-to)` };
}

function enhanceSectionTitles() {
    const sections = document.querySelectorAll('main section:not([data-no-section-index])');
    injectSectionGradientStyles();
    const themeVars = getCurrentClaseColorVarNames();
    sections.forEach((section, idx) => {
        // Buscar el contenedor de cabecera (suele ser div.border-b)
        const headerDiv = section.querySelector('div.border-b') || section.querySelector('h2')?.parentElement;
        if (!headerDiv) return;
        const h2 = headerDiv.querySelector('h2');
        if (!h2) return;

        // Antes cada sección podía traer su propio degradado suelto (cian, índigo, rosa...) sin relación
        // con el color de tema de la clase. Ahora se unifica: todos los subtítulos de una misma clase
        // usan el degradado de su color de tema (SECTION_GRADIENT_MAP), salvo que el span tenga el
        // atributo data-keep-gradient="true", en cuyo caso se respeta su clase original.
        const existingGradientSpan = h2.querySelector('span[class*="bg-gradient-to-r"]');
        const keepOriginal = existingGradientSpan && existingGradientSpan.getAttribute('data-keep-gradient') === 'true';
        const customGradientClasses = keepOriginal ? existingGradientSpan.getAttribute('class') : null;

        // Extraer y limpiar el texto del título
        const original = h2.textContent.trim();
        // Remover emojis/puntuación inicial y prefijo numérico si existe (admite "1.", "1)", "1-" y también "1 - " con espacios)
        let cleaned = original.replace(/^[^0-9A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/, '').replace(/^\s*(\d+)\s*[\.\-\)]?\s*/, '');
        // Guardar número (si el título original tenía número) o calcular por índice
        const numberMatch = original.match(/^\s*(\d+)\s*[\.\-\)]/);
        const number = numberMatch ? numberMatch[1] : (idx + 1).toString();

        // Normalizar SOLO si el título entero viene gritado en mayúsculas (ej. copiado de un PDF/Word).
        // Si ya viene bien escrito en el HTML (como este proyecto lo hace), se respeta tal cual:
        // así evitamos que el algoritmo de sentence-case rompa mayúsculas iniciales después de
        // signos de apertura como ¿ o ¡ (ej. "¿Qué es..." no debe convertirse en "¿qué es...").
        let text = cleaned.trim();
        if (text && text === text.toUpperCase() && text !== text.toLowerCase()) {
            text = text.replace(/\S+/g, (word) => {
                const core = word.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, '');
                // Palabra de 2+ letras, toda en mayúsculas -> es una sigla, no tocarla
                if (core.length >= 2 && core === core.toUpperCase() && core !== core.toLowerCase()) {
                    return word;
                }
                return word.toLowerCase();
            });
            // Poner en mayúscula la primera LETRA del título, no el primer carácter
            // (que puede ser ¿, ¡, comillas, etc.)
            text = text.replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/, (letter) => letter.toUpperCase());
        }

        const defaultGradientStyle = `background: linear-gradient(120deg, ${themeVars.from}, ${themeVars.to}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: inline-block; font-size: 1.25rem; line-height: 1.75rem; font-weight: 800;`;
        const titleSpanMarkup = customGradientClasses
            ? `<span class="section-title-text ml-1 text-xl leading-7 font-extrabold inline-block ${customGradientClasses}">${text}</span>`
            : `<span class="section-title-text ml-1" style="${defaultGradientStyle}">${text}</span>`;

        // Reemplazar el h2 por una versión con número estilizado y botón de colapsado
        h2.innerHTML = `
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center min-w-[2rem] h-8 px-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-base font-extrabold text-slate-600 dark:text-slate-300 tabular-nums section-number">${number}</span>
                    ${titleSpanMarkup}
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
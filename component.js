// components.js - Header con navegación dinámica, inicio integrado y diseño premium
function getRelativePaths() {
    const path = window.location.pathname;
    // Detectar si estamos dentro de la carpeta clases (por ejemplo, /clases/clase-xx/)
    const isSubPage = path.includes('/clases/');
    
    return {
        home: isSubPage ? '../../index.html' : './index.html',
        clase02: isSubPage ? '../clase-02-procesos-de-negocio/index.html' : './clases/clase-02-procesos-de-negocio/index.html',
        clase06: isSubPage ? '../clase-06-requerimientos-funcionales-y-no-funcionales/index.html' : './clases/clase-06-requerimientos-funcionales-y-no-funcionales/index.html',
        clase10: isSubPage ? '../clase-10-casos-de-uso/index.html' : './clases/clase-10-casos-de-uso/index.html',
        examen: isSubPage ? '../examen/index.html' : './clases/examen/index.html'
    };
}

function getHeaderHTML(paths) {
    return `
<header class="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-xs transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
            <!-- BOTÓN DE INICIO (Casita) -->
            <a href="${paths.home}" class="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-950/40 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-900/50 shadow-xs transition-all duration-300 hover:scale-105" title="Volver al inicio">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </a>
            
            <!-- Separador sutil -->
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
                    <div class="p-2">
                        <div class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-2">Ir a otra clase</div>
                        
                        <a href="${paths.clase02}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🔄</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 02</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Procesos de Negocio</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">ISO 9001, SIPOC, BPMN</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                        
                        <a href="${paths.clase06}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">📋</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 06</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Ingeniería de Requerimientos</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Funcionales, No funcionales</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <a href="${paths.clase10}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🎭</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Clase 10</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Casos de Uso</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">UML, Actores, Inclusiones/Extensiones</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>

                        <!-- NUEVA CLASE: REPASO EXAMEN -->
                        <a href="${paths.examen}" class="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                            <span class="text-2xl group-hover:scale-110 transition-transform duration-200">🎓</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Repaso</div>
                                <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Conceptos de Examen</div>
                                <div class="text-xs text-slate-500 dark:text-slate-400">Machete de Parciales UTN</div>
                            </div>
                            <span class="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                        
                        <div class="flex items-center gap-4 p-3 opacity-50 cursor-not-allowed rounded-xl bg-slate-50 dark:bg-slate-800/30">
                            <span class="text-2xl grayscale">📅</span>
                            <div class="flex-1">
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clase 07</div>
                                <div class="text-sm font-medium text-slate-500">Planificación</div>
                                <div class="text-xs text-slate-400">Próximamente</div>
                            </div>
                            <span class="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 rounded-full">⏳</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- TÍTULO CENTRAL CON BARRA DE COLOR -->
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
    <!-- Línea de degradado inferior decorativa -->
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
}

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

window.loadHeader = loadHeader;
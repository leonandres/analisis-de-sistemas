// ==========================================
// INDEX.JS - ARCHIVO PRINCIPAL (RAÍZ DEL PROYECTO)
// Gestiona el header dinámico, tema oscuro/claro y funcionalidades globales
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Index principal: Inicializando...');
    
    // ==========================================
    // 1. CARGAR HEADER DINÁMICO (SOLO SI EXISTE EL CONTENEDOR)
    // ==========================================
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        // Verificar que loadHeader existe y es una función
        if (typeof window.loadHeader === 'function') {
            window.loadHeader();
            console.log('✅ Header cargado correctamente desde window.loadHeader');
        } else {
            console.error('❌ Error: window.loadHeader no está definida');
            console.log('💡 Verifica que components.js se carga ANTES que index.js');
            console.log('💡 El orden debe ser: components.js → index.js → index.js de la clase');
        }
    } else {
        console.log('ℹ️ Esta página usa header estático, no se carga header dinámico');
    }

    // ==========================================
    // 2. CONFIGURAR SELECTOR Y BOTÓN DE TEMA (OSCURO/CLARO)
    // ==========================================
    const DARK_THEMES = [
        'dark', 'synthwave', 'halloween', 'forest', 'aqua', 
        'black', 'luxury', 'dracula', 'business', 'night', 
        'coffee', 'dim', 'sunset'
    ];

    function applyTheme(theme) {
        if (!theme) theme = 'light';
        document.documentElement.setAttribute('data-theme', theme);
        
        if (DARK_THEMES.includes(theme)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        localStorage.setItem('theme', theme);
        
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect && themeSelect.value !== theme) {
            themeSelect.value = theme;
        }

        // Actualizar ícono y nombre activo en el botón desplegable de temas
        const activeIconContainer = document.getElementById('theme-active-icon');
        const activeNameContainer = document.getElementById('theme-active-name');
        if (typeof THEME_ICONS !== 'undefined' && THEME_ICONS[theme]) {
            if (activeIconContainer) activeIconContainer.innerHTML = THEME_ICONS[theme];
        }
        if (typeof ALL_THEMES !== 'undefined') {
            const foundTheme = ALL_THEMES.find(t => t.id === theme);
            if (activeNameContainer && foundTheme) {
                activeNameContainer.textContent = foundTheme.name.split(' ')[0];
            }
        }

        // Marcar el check en el panel desplegable
        const themeMenuPanel = document.getElementById('theme-menu-panel');
        if (themeMenuPanel) {
            themeMenuPanel.querySelectorAll('.theme-option-btn').forEach(btn => {
                const isCurrent = btn.getAttribute('data-theme-id') === theme;
                const check = btn.querySelector('.theme-check-icon');
                if (check) {
                    if (isCurrent) check.classList.remove('hidden');
                    else check.classList.add('hidden');
                }
            });
        }
    }

    window.applyTheme = applyTheme;

    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', function(e) {
            applyTheme(e.target.value);
            console.log(`🔄 Tema cambiado a: ${e.target.value}`);
        });
    }

    const btnTema = document.getElementById('btn-tema');
    if (btnTema) {
        btnTema.addEventListener('click', function() {
            const currentTheme = localStorage.getItem('theme') || 'light';
            const isDark = DARK_THEMES.includes(currentTheme);
            applyTheme(isDark ? 'light' : 'dark');
        });
    }

    // ==========================================
    // 3. CARGAR TEMA GUARDADO EN localStorage
    // ==========================================
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // ==========================================
    // 4. BOTÓN PARA VOLVER ARRIBA (SCROLL TO TOP)
    // ==========================================
    const btnTop = document.getElementById('btn-top');
    if (btnTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnTop.classList.add('visible');
            } else {
                btnTop.classList.remove('visible');
            }
        });
        
        btnTop.addEventListener('click', function() {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
        console.log('✅ Botón "volver arriba" configurado');
    } else {
        console.log('ℹ️ Botón "volver arriba" no encontrado (opcional)');
    }

    console.log('✅ Index principal: Inicialización completada');
});

// ==========================================
// FUNCIONES AUXILIARES (útiles globalmente)
// ==========================================

// Función para cambiar el tema manualmente desde cualquier parte del código
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    return isDark;
}

// Función para obtener el estado actual del tema
function getCurrentTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

// Exponer funciones al ámbito global por si son necesarias
window.toggleTheme = toggleTheme;
window.getCurrentTheme = getCurrentTheme;
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
    // 2. CONFIGURAR BOTÓN DE TEMA (OSCURO/CLARO)
    // ==========================================
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', function(e) {
            const theme = e.target.value;
            document.documentElement.setAttribute('data-theme', theme);
            
            if (theme === 'dark' || theme === 'dim') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            
            localStorage.setItem('theme', theme);
            console.log(`🔄 Tema cambiado a: ${theme}`);
        });
        console.log('✅ Selector de tema configurado');
    } else {
        console.warn('⚠️ No se encontró el selector de tema (#theme-select)');
    }

    // ==========================================
    // 3. CARGAR TEMA GUARDADO EN localStorage
    // ==========================================
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark' || savedTheme === 'dim') {
        document.documentElement.classList.add('dark');
        console.log(`🌙 Tema ${savedTheme} cargado`);
    } else {
        document.documentElement.classList.remove('dark');
        console.log(`☀️ Tema ${savedTheme} cargado`);
    }

    if (themeSelect) {
        themeSelect.value = savedTheme;
    }

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
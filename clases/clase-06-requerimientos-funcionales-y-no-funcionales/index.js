// ==========================================
// CLASE 06: INGENIERÍA DE REQUERIMIENTOS
// Laboratorios + Trivia
// ==========================================
// LABORATORIO 1: CLASIFICACIÓN DE ENUNCIADOS
// ==========================================
const enunciados = [
    {
        texto: "El sistema debe permitir al usuario registrar un nuevo alumno ingresando nombre, DNI y correo electrónico.",
        tipo: "funcional",
        explicacion: "Describe una acción concreta que el sistema debe realizar (registrar alumno)."
    },
    {
        texto: "El sistema debe responder a cualquier consulta en menos de 2 segundos.",
        tipo: "no-funcional",
        explicacion: "Define una restricción de rendimiento (tiempo de respuesta), no una funcionalidad."
    },
    {
        texto: "El sistema debe generar un comprobante de inscripción en formato PDF al finalizar el proceso.",
        tipo: "funcional",
        explicacion: "Describe una funcionalidad específica: generar un PDF."
    },
    {
        texto: "El sistema debe estar disponible el 99.9% del tiempo durante el horario de clases.",
        tipo: "no-funcional",
        explicacion: "Define un atributo de calidad (disponibilidad), no una función del sistema."
    },
    {
        texto: "El sistema debe validar que el DNI ingresado tenga exactamente 8 dígitos numéricos.",
        tipo: "funcional",
        explicacion: "Describe una regla de negocio concreta que el sistema debe ejecutar."
    },
    {
        texto: "Los datos personales de los alumnos deben estar encriptados según la Ley 25.326 de Protección de Datos.",
        tipo: "no-funcional",
        explicacion: "Es una restricción externa/legal sobre cómo se deben manejar los datos."
    },
    {
        texto: "El sistema debe permitir al administrador aprobar o rechazar solicitudes de inscripción.",
        tipo: "funcional",
        explicacion: "Describe una acción concreta del administrador sobre el sistema."
    },
    {
        texto: "El sistema debe ser compatible con los navegadores Chrome, Firefox y Edge en sus últimas 2 versiones.",
        tipo: "no-funcional",
        explicacion: "Define una restricción de compatibilidad/tecnología, no una funcionalidad."
    }
];

let enunciadoActual = 0;

function cargarEnunciado() {
    const textoEl = document.getElementById('texto-enunciado');
    const feedbackEl = document.getElementById('feedback-clasificacion');
    
    if (!textoEl) return;
    
    if (enunciadoActual >= enunciados.length) {
        textoEl.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-bold">¡Laboratorio completado! 🎉</span>';
        return;
    }
    
    textoEl.textContent = enunciados[enunciadoActual].texto;
    if (feedbackEl) feedbackEl.classList.add('hidden');
}

function verificarClasificacion(tipoSeleccionado) {
    const enunciado = enunciados[enunciadoActual];
    const feedbackEl = document.getElementById('feedback-clasificacion');
    const textoFeedbackEl = document.getElementById('text-feedback-clasificacion');
    
    if (!feedbackEl || !textoFeedbackEl) return;
    
    const esCorrecto = tipoSeleccionado === enunciado.tipo;
    
    textoFeedbackEl.innerHTML = `
        <div class="mb-2">
            <strong class="${esCorrecto ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">
                ${esCorrecto ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </strong>
        </div>
        <p class="text-slate-700 dark:text-slate-300">${enunciado.explicacion}</p>
    `;
    
    feedbackEl.classList.remove('hidden');
    feedbackEl.className = `mt-5 p-4 text-sm rounded-lg text-left leading-relaxed relative border ${
        esCorrecto 
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50' 
            : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50'
    }`;
}

// ==========================================
// LABORATORIO 2: CONTROL DE CALIDAD
// ==========================================
const caracteristicasData = {
    verificable: {
        correcta: true,
        explicacion: "¡Exacto! Palabras como 'amigable', 'rápida' y 'fácil' son subjetivas y no permiten verificar objetivamente si el sistema cumple el requerimiento. Debería especificar métricas concretas (ej: 'tiempo de carga menor a 2 segundos')."
    },
    completo: {
        correcta: false,
        explicacion: "No es la principal falla. Aunque podría faltar información, el problema más grave es la falta de verificabilidad por los adjetivos subjetivos."
    },
    consistente: {
        correcta: false,
        explicacion: "No hay contradicción con otros requerimientos en este enunciado aislado. El problema es la subjetividad."
    },
    ambiguo: {
        correcta: false,
        explicacion: "Si bien es ambiguo, la característica que falla MÁS gravemente es la verificabilidad, porque no se puede comprobar objetivamente."
    }
};

function verificarCaracteristica(tipo) {
    const feedbackCaracteristica = document.getElementById('feedback-caracteristica');
    const textoFeedbackCaracteristica = document.getElementById('text-feedback-caracteristica');
    
    if (!feedbackCaracteristica || !textoFeedbackCaracteristica) return;
    
    const data = caracteristicasData[tipo];
    
    textoFeedbackCaracteristica.innerHTML = `
        <div class="mb-2">
            <strong class="${data.correcta ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">
                ${data.correcta ? '✅ ¡Correcto!' : '❌ No es la principal falla'}
            </strong>
        </div>
        <p class="text-slate-700 dark:text-slate-300">${data.explicacion}</p>
    `;
    
    feedbackCaracteristica.classList.remove('hidden');
    feedbackCaracteristica.className = `mt-4 p-4 text-sm rounded-lg leading-relaxed border relative ${
         data.correcta 
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50' 
            : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50'
    }`;
}

// ==========================================
// TRIVIA DE AUTOEVALUACIÓN
// ==========================================
const triviaRequerimientos = [
    {
        q: "¿Cuál es la diferencia principal entre un Requerimiento y un Requisito?",
        options: [
            "Son exactamente lo mismo, solo cambia el nombre según el autor",
            "El Requerimiento es la necesidad del usuario; el Requisito es la capacidad técnica del sistema",
            "El Requisito es la necesidad del usuario; el Requerimiento es la capacidad técnica",
            "El Requerimiento es técnico y el Requisito es de negocio"
        ],
        correct: 1,
        explanation: "Correcto. El Requerimiento expresa la necesidad del usuario (enfoque de negocio), mientras que el Requisito es la condición técnica que debe cumplir el sistema."
    },
    {
        q: "'El sistema debe procesar 1000 transacciones por segundo' es un requerimiento:",
        options: [
            "Funcional",
            "No funcional de producto/calidad",
            "No funcional organizacional",
            "No funcional externo"
        ],
        correct: 1,
        explanation: "Es un requerimiento no funcional de producto/calidad, específicamente de rendimiento. Define una métrica medible sobre el comportamiento del sistema."
    },
    {
        q: "'El sistema debe utilizar una base de datos Oracle' es un requerimiento:",
        options: [
            "Funcional",
            "No funcional de producto",
            "No funcional organizacional",
            "No funcional externo"
        ],
        correct: 2,
        explanation: "Es organizacional porque deriva de políticas internas o infraestructura tecnológica preexistente de la organización."
    },
    {
        q: "¿Cuál de las siguientes NO es una característica de un buen requerimiento?",
        options: [
            "Verificable",
            "Consistente",
            "Subjetivo",
            "Trazable"
        ],
        correct: 2,
        explanation: "Un requerimiento NUNCA debe ser subjetivo. Debe ser objetivo y medible para poder verificarse."
    },
    {
        q: "La técnica de elicitación que implica observar a los usuarios en su entorno de trabajo se llama:",
        options: [
            "Entrevista",
            "Cuestionario",
            "Observación",
            "Prototipado"
        ],
        correct: 2,
        explanation: "La observación permite identificar tareas y necesidades que los usuarios no expresan verbalmente."
    },
    {
        q: "'El sistema debe cumplir con la Ley 25.326 de Protección de Datos Personales' es un requerimiento:",
        options: [
            "Funcional",
            "No funcional de producto",
            "No funcional organizacional",
            "No funcional externo"
        ],
        correct: 3,
        explanation: "Es externo porque deriva de un marco regulatorio/legal ajeno al sistema y a la organización."
    },
    {
        q: "¿En qué etapa de la metodología se definen los Requerimientos del Sistema?",
        options: [
            "Relevamiento / Reconocimiento",
            "Análisis de requisitos",
            "Diseño",
            "Implementación"
        ],
        correct: 1,
        explanation: "En el Análisis de requisitos se transforman las necesidades del usuario (requerimientos) en capacidades técnicas del sistema (requisitos)."
    }
];

let currentTrivia = 0;
let scoreTrivia = 0;

function loadTriviaQuestion() {
    const container = document.getElementById('contenedor-examen-teorico');
    if (!container) return;

    if (currentTrivia >= triviaRequerimientos.length) {
        const percentage = Math.round((scoreTrivia / triviaRequerimientos.length) * 100);
        let message = '';
        let color = '';
        let emoji = '';
        
        if (percentage === 100) {
            message = '¡Perfecto! Dominas completamente el tema de Requerimientos.';
            color = 'text-emerald-600 dark:text-emerald-400';
            emoji = '🏆';
        } else if (percentage >= 80) {
            message = '¡Muy bien! Tienes un buen entendimiento del tema.';
            color = 'text-sky-600 dark:text-sky-400';
            emoji = '👏';
        } else if (percentage >= 60) {
            message = 'Bien, pero te conviene repasar algunos conceptos.';
            color = 'text-amber-600 dark:text-amber-400';
            emoji = '📚';
        } else {
            message = 'Te recomendamos estudiar más el material y volver a intentar.';
            color = 'text-red-600 dark:text-red-400';
            emoji = '💪';
        }
        
        container.innerHTML = `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">${emoji}</div>
                <h3 class="text-2xl font-bold ${color} mb-3">Trivia Completada</h3>
                <p class="text-lg text-slate-700 dark:text-slate-300 mb-2">Puntuación: ${scoreTrivia} de ${triviaRequerimientos.length} (${percentage}%)</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">${message}</p>
                <button onclick="resetTrivia()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">Reiniciar Trivia</button>
            </div>
        `;
        return;
    }

    const data = triviaRequerimientos[currentTrivia];
    container.innerHTML = `
        <div class="mb-4">
            <span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Pregunta ${currentTrivia + 1} de ${triviaRequerimientos.length}</span>
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-200 mt-1">${data.q}</h3>
        </div>
        <div id="trivia-options" class="space-y-2"></div>
        <div id="trivia-feedback" class="mt-4 p-3 text-sm rounded-lg hidden"></div>
        <div class="mt-4 flex justify-end">
            <button id="btn-siguiente-trivia" class="px-3 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs font-semibold rounded-md shadow-xs hover:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer hidden">Siguiente ➔</button>
        </div>
    `;

    const optionsContainer = document.getElementById('trivia-options');
    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = "w-full p-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-left text-sm font-medium text-slate-700 dark:text-slate-200 transition-all cursor-pointer";
        btn.onclick = () => checkTriviaAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkTriviaAnswer(selectedIndex, btn) {
    const data = triviaRequerimientos[currentTrivia];
    const feedback = document.getElementById('trivia-feedback');
    const buttons = document.getElementById('trivia-options').children;
    
    for (let b of buttons) b.disabled = true;

    if (selectedIndex === data.correct) {
        scoreTrivia++;
        btn.style.background = "#d1fae5";
        btn.style.borderColor = "#10b981";
        feedback.textContent = "✅ " + data.explanation;
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50";
    } else {
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#ef4444";
        buttons[data.correct].style.background = "#d1fae5";
        buttons[data.correct].style.borderColor = "#10b981";
        feedback.textContent = "❌ Incorrecto. " + data.explanation;
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900/50";
    }
    
    document.getElementById('btn-siguiente-trivia').classList.remove('hidden');
}

function resetTrivia() {
    currentTrivia = 0;
    scoreTrivia = 0;
    loadTriviaQuestion();
}

// ==========================================
// MANEJADOR DEL BOTÓN "SIGUIENTE" EN TRIVIA
// ==========================================
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-siguiente-trivia') {
        currentTrivia++;
        loadTriviaQuestion();
    }
});

// ==========================================
// NAVEGACIÓN SUAVE
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            document.querySelectorAll('.navigation-link').forEach(link => {
                link.classList.remove('active', 'bg-sky-50', 'dark:bg-slate-800', 'text-sky-700', 'dark:text-sky-400', 'border-sky-600');
                link.classList.add('text-slate-600', 'dark:text-slate-400', 'border-transparent');
            });
            
            this.classList.add('active', 'bg-sky-50', 'dark:bg-slate-800', 'text-sky-700', 'dark:text-sky-400', 'border-sky-600');
            this.classList.remove('text-slate-600', 'dark:text-slate-400', 'border-transparent');
        }
    });
});

// ==========================================
// INICIALIZACIÓN - Todo dentro de DOMContentLoaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Clase 06: DOM cargado, inicializando...');
    
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
        tituloElement.textContent = 'Ingeniería de Requerimientos';
    }

    // Laboratorio 1: Clasificación
    cargarEnunciado();
    
    const btnFuncional = document.getElementById('btn-funcional');
    const btnNoFuncional = document.getElementById('btn-no-funcional');
    const btnSiguienteClasificacion = document.getElementById('btn-siguiente-clasificacion');
    const btnCerrarClasificacion = document.getElementById('close-feedback-clasificacion');
    
    if (btnFuncional) btnFuncional.addEventListener('click', () => verificarClasificacion('funcional'));
    if (btnNoFuncional) btnNoFuncional.addEventListener('click', () => verificarClasificacion('no-funcional'));
    if (btnSiguienteClasificacion) {
        btnSiguienteClasificacion.addEventListener('click', () => {
            enunciadoActual++;
            cargarEnunciado();
        });
    }
    if (btnCerrarClasificacion) {
        btnCerrarClasificacion.addEventListener('click', () => {
            document.getElementById('feedback-clasificacion').classList.add('hidden');
        });
    }
    
    // Laboratorio 2: Características
    const botonesCaracteristica = document.querySelectorAll('.btn-caracteristica');
    const btnCerrarCaracteristica = document.getElementById('close-feedback-caracteristica');
    
    botonesCaracteristica.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipo = btn.dataset.tipo;
            verificarCaracteristica(tipo);
        });
    });
    
    if (btnCerrarCaracteristica) {
        btnCerrarCaracteristica.addEventListener('click', () => {
            document.getElementById('feedback-caracteristica').classList.add('hidden');
        });
    }
    
    // Trivia
    loadTriviaQuestion();
    
    console.log('Clase 06: Inicialización completada');
});
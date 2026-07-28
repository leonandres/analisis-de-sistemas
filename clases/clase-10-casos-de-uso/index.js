// ==========================================
// CLASE 10: CASOS DE USO - LÓGICA INTERACTIVA
// ==========================================

// 1. JUEGO: ¿INCLUDE O EXTEND?
const situacionesJuego = [
    {
        texto: "Un cliente realiza un retiro de efectivo en un cajero, y el sistema realiza el débito automático en su cuenta bancaria.",
        tipo: "include",
        explicacion: "¡Correcto! El débito en la cuenta es obligatorio y forma parte indispensable del flujo de un retiro exitoso. Se modela como <<include>>."
    },
    {
        texto: "Un cliente realiza un retiro de efectivo, y el sistema le cobra una comisión por sobregiro (giro en descubierto) debido a que su saldo era insuficiente.",
        tipo: "extend",
        explicacion: "¡Correcto! El cobro de comisión por sobregiro es condicional (solo ocurre si el cliente no tiene saldo suficiente pero tiene autorización). Se modela como <<extend>>."
    },
    {
        texto: "Un analista genera un informe en la plataforma InfoLey Web, y el sistema requiere que esté autenticado e inicie sesión en el portal.",
        tipo: "include",
        explicacion: "¡Correcto! Autenticarse e iniciar sesión es un requisito obligatorio previo para cualquier operación protegida. Se modela como <<include>>."
    },
    {
        texto: "Un secretario de cámara registra un nuevo proyecto de ley, y el sistema despliega un formulario adicional para capturar datos demográficos porque el solicitante es un Ciudadano.",
        tipo: "extend",
        explicacion: "¡Correcto! Capturar datos del ciudadano es condicional (solo ocurre si el peticionante es del tipo ciudadano). Se modela como <<extend>>."
    },
    {
        texto: "Un alumno se inscribe en un curso en el portal de la UTN.BA, y el sistema genera el comprobante de inscripción oficial.",
        tipo: "include",
        explicacion: "¡Correcto! La generación del comprobante es una consecuencia obligatoria para finalizar el proceso de inscripción. Se modela como <<include>>."
    },
    {
        texto: "Un alumno completa una trivia de autoevaluación teórica, y el sistema le otorga una insignia dorada especial por lograr el 100% de respuestas correctas.",
        tipo: "extend",
        explicacion: "¡Correcto! Otorgar la insignia es condicional y opcional (solo se activa si el puntaje es perfecto). Se modela como <<extend>>."
    }
];

let situacionActual = 0;

function cargarSituacion() {
    const textoEl = document.getElementById('enunciado-juego');
    const feedbackEl = document.getElementById('feedback-juego');
    
    if (!textoEl) return;
    
    if (situacionActual >= situacionesJuego.length) {
        textoEl.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-extrabold text-base">¡Felicidades! Has completado el Laboratorio de Relaciones. 🎉</span>';
        if (feedbackEl) feedbackEl.classList.add('hidden');
        document.getElementById('btn-include').disabled = true;
        document.getElementById('btn-extend').disabled = true;
        return;
    }
    
    textoEl.textContent = situacionesJuego[situacionActual].texto;
    if (feedbackEl) feedbackEl.classList.add('hidden');
}

function verificarRelacion(tipoSeleccionado) {
    const situacion = situacionesJuego[situacionActual];
    const feedbackEl = document.getElementById('feedback-juego');
    const textFeedbackEl = document.getElementById('text-feedback-juego');
    
    if (!feedbackEl || !textFeedbackEl) return;
    
    const esCorrecto = tipoSeleccionado === situacion.tipo;
    
    textFeedbackEl.innerHTML = `
        <div class="mb-2">
            <strong class="${esCorrecto ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'} text-sm block">
                ${esCorrecto ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </strong>
        </div>
        <p class="text-slate-700 dark:text-slate-350 text-xs">${situacion.explicacion}</p>
    `;
    
    feedbackEl.classList.remove('hidden');
    feedbackEl.className = `mt-5 p-4 text-xs rounded-xl text-left leading-relaxed relative border ${
        esCorrecto 
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50' 
            : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50'
    }`;
}

// 2. TRIVIA DE CASOS DE USO
const triviaCasosUso = [
    {
        q: "¿Cuál es el propósito primordial de un diagrama y especificación de Caso de Uso?",
        options: [
            "Representar los macroprocesos de negocio y su flujo financiero",
            "Describir la interacción actor-sistema para proporcionar un resultado observable de valor para el actor",
            "Definir el diseño del modelo lógico de datos y sus claves primarias",
            "Modelar el organigrama jerárquico del personal de apoyo de la organización"
        ],
        correct: 1,
        explanation: "Correcto. El Caso de Uso describe el comportamiento del sistema desde el punto de vista del usuario, devolviendo siempre un resultado de valor."
    },
    {
        q: "Identifique un error común de redacción en los pasos de un Caso de Uso según la cátedra:",
        options: [
            "Especificar excepciones o flujos alternativos numerados",
            "Nombrar el caso de uso con un verbo en infinitivo + sustantivo",
            "Documentar la acción física del hardware (ej: 'El usuario inserta la tarjeta magnética en el lector')",
            "Declarar el estado del sistema en la precondición"
        ],
        correct: 2,
        explanation: "Correcto. En la especificación no se deben documentar interacciones físicas de hardware; la especificación modela la comunicación lógica entre el Actor y el Software del Sistema."
    },
    {
        q: "¿Qué caracteriza a la relación de Inclusión <<include>> entre dos Casos de Uso?",
        options: [
            "Ocurre de forma opcional y condicional bajo una regla de negocio",
            "El Caso de Uso base requiere obligatoriamente la ejecución del Caso de Uso incluido",
            "Permite al programador saltarse la precondición de acceso",
            "Se utiliza solo cuando el sistema tiene fallas en la base de datos"
        ],
        correct: 1,
        explanation: "Correcto. El <<include>> denota obligatoriedad; cada instanciación del caso de uso base dispara la ejecución del caso incluido."
    },
    {
        q: "En UML, ¿cómo se define formalmente un Actor?",
        options: [
            "Cualquier persona del equipo de desarrollo de software",
            "Un rol formal externo al sistema que interactúa directamente con él",
            "Una clase o tabla de datos de la base de datos central",
            "La infraestructura de hardware del servidor local"
        ],
        correct: 1,
        explanation: "Correcto. Un actor representa un rol que interactúa externamente con el sistema, no una persona física en particular."
    },
    {
        q: "La relación de Extensión <<extend>> se caracteriza por ser:",
        options: [
            "Mandatoria en todo momento para reutilizar lógica de inicio",
            "Una relación jerárquica de herencia entre actores",
            "Condicional y opcional, activándose bajo un evento o condición del sistema",
            "Una funcionalidad que reemplaza completamente al caso de uso base"
        ],
        correct: 2,
        explanation: "Correcto. La relación <<extend>> permite modelar comportamientos opcionales o excepcionales que se acoplan al caso de uso base solo bajo ciertas condiciones."
    }
];

let indexTrivia = 0;
let scoreTriviaCasos = 0;

function cargarTriviaCasos() {
    const container = document.getElementById('contenedor-trivia-casos');
    if (!container) return;

    if (indexTrivia >= triviaCasosUso.length) {
        const percentage = Math.round((scoreTriviaCasos / triviaCasosUso.length) * 100);
        let message = '';
        let color = '';
        let emoji = '';
        
        if (percentage === 100) {
            message = '¡Excelente! Dominas perfectamente los Casos de Uso UML.';
            color = 'text-indigo-600 dark:text-indigo-400';
            emoji = '🏆';
        } else if (percentage >= 80) {
            message = '¡Muy bien! Tienes bases muy sólidas de casos de uso.';
            color = 'text-sky-600 dark:text-sky-400';
            emoji = '👏';
        } else if (percentage >= 60) {
            message = 'Aprobado, pero te sugerimos revisar los errores de redacción comunes.';
            color = 'text-amber-600 dark:text-amber-400';
            emoji = '📚';
        } else {
            message = 'Te sugerimos releer el apunte oficial y volver a intentar la trivia.';
            color = 'text-red-600 dark:text-red-400';
            emoji = '💪';
        }
        
        container.innerHTML = `
            <div class="text-center py-6">
                <div class="text-5xl mb-3">${emoji}</div>
                <h3 class="text-xl font-bold ${color} mb-2">Trivia de Casos de Uso Completada</h3>
                <p class="text-sm text-slate-700 dark:text-slate-350 mb-1">Puntuación: ${scoreTriviaCasos} de ${triviaCasosUso.length} (${percentage}%)</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-5">${message}</p>
                <button onclick="reiniciarTriviaCasos()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-sm">Reiniciar Trivia</button>
            </div>
        `;
        return;
    }

    const data = triviaCasosUso[indexTrivia];
    container.innerHTML = `
        <div class="mb-4">
            <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Pregunta ${indexTrivia + 1} de ${triviaCasosUso.length}</span>
            <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">${data.q}</h3>
        </div>
        <div id="trivia-options-casos" class="space-y-2"></div>
        <div id="trivia-feedback-casos" class="mt-4 p-3 text-xs rounded-lg hidden"></div>
        <div class="mt-4 flex justify-end">
            <button id="btn-siguiente-trivia-casos" class="px-3.5 py-1 bg-slate-850 dark:bg-slate-700 text-white text-[11px] font-bold rounded-md hover:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer hidden">Siguiente ➔</button>
        </div>
    `;

    const optionsContainer = document.getElementById('trivia-options-casos');
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = "w-full p-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-750 rounded-xl text-left text-xs font-medium text-slate-700 dark:text-slate-300 transition-all cursor-pointer";
        btn.onclick = () => verificarRespuestaTrivia(idx, btn);
        optionsContainer.appendChild(btn);
    });
}

function verificarRespuestaTrivia(idxSeleccionado, btn) {
    const data = triviaCasosUso[indexTrivia];
    const feedback = document.getElementById('trivia-feedback-casos');
    const buttons = document.getElementById('trivia-options-casos').children;
    
    for (let b of buttons) b.disabled = true;

    if (idxSeleccionado === data.correct) {
        scoreTriviaCasos++;
        btn.style.background = "#d1fae5";
        btn.style.borderColor = "#10b981";
        feedback.textContent = "✅ " + data.explanation;
        feedback.className = "mt-4 p-3 text-xs rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50";
    } else {
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#ef4444";
        buttons[data.correct].style.background = "#d1fae5";
        buttons[data.correct].style.borderColor = "#10b981";
        feedback.textContent = "❌ Incorrecto. " + data.explanation;
        feedback.className = "mt-4 p-3 text-xs rounded-lg bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900/50";
    }
    
    document.getElementById('btn-siguiente-trivia-casos').classList.remove('hidden');
}

function reiniciarTriviaCasos() {
    indexTrivia = 0;
    scoreTriviaCasos = 0;
    cargarTriviaCasos();
}

// 3. EVENT LISTENERS Y SPYING DE SCROLL
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-siguiente-trivia-casos') {
        indexTrivia++;
        cargarTriviaCasos();
    }
});

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Clase 10: Inicializando controlador...');
    
    // Ajustar padding del header
    setTimeout(() => {
        const header = document.querySelector('header');
        const mainContent = document.querySelector('.main-content-wrapper');
        
        if (header && mainContent) {
            const headerHeight = header.offsetHeight;
            mainContent.style.paddingTop = headerHeight + 'px';
        }
    }, 50);
    
    // Título de la clase
    const tituloElement = document.getElementById('titulo-clase');
    if (tituloElement) {
        tituloElement.textContent = 'Casos de Uso (UML)';
    }

    // Inicializar laboratorio de include/extend
    cargarSituacion();
    
    const btnInclude = document.getElementById('btn-include');
    const btnExtend = document.getElementById('btn-extend');
    const btnSiguienteJuego = document.getElementById('btn-siguiente-juego');
    
    if (btnInclude) btnInclude.addEventListener('click', () => verificarRelacion('include'));
    if (btnExtend) btnExtend.addEventListener('click', () => verificarRelacion('extend'));
    if (btnSiguienteJuego) {
        btnSiguienteJuego.addEventListener('click', () => {
            situacionActual++;
            cargarSituacion();
        });
    }

    // Inicializar trivia
    cargarTriviaCasos();

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                document.querySelectorAll('.navigation-link').forEach(link => {
                    link.classList.remove('active', 'bg-indigo-50', 'dark:bg-slate-800', 'text-indigo-700', 'dark:text-indigo-400', 'border-indigo-600');
                    link.classList.add('text-slate-600', 'dark:text-slate-400', 'border-transparent');
                });
                
                this.classList.add('active', 'bg-indigo-50', 'dark:bg-slate-800', 'text-indigo-700', 'dark:text-indigo-400', 'border-indigo-600');
                this.classList.remove('text-slate-600', 'dark:text-slate-400', 'border-transparent');
            }
        });
    });

    // Scroll Spying
    const navLinks = document.querySelectorAll('.navigation-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            navLinks.forEach(link => {
                link.classList.remove('active', 'bg-indigo-50', 'dark:bg-slate-800', 'text-indigo-700', 'dark:text-indigo-400', 'border-indigo-600');
                link.classList.add('text-slate-600', 'dark:text-slate-400', 'border-transparent');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active', 'bg-indigo-50', 'dark:bg-slate-800', 'text-indigo-700', 'dark:text-indigo-400', 'border-indigo-600');
                    link.classList.remove('text-slate-600', 'dark:text-slate-400', 'border-transparent');
                }
            });
        }
    });
});

window.reiniciarTriviaCasos = reiniciarTriviaCasos;

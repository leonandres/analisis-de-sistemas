// ==========================================
// CLASE 02: PROCESOS DE NEGOCIO
// Laboratorio de clasificación + Trivia + Examen Final
// ==========================================
// ==========================================
// BOTÓN DE CAMBIO DE TEMA (global)
// Solo se ejecuta si no fue inicializado antes
// ==========================================
if (!window._temaInicializado) {
    const btnTema = document.getElementById('btn-tema');
    const html = document.documentElement;
    
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
    }
    
    window._temaInicializado = true;
}

// ==========================================
// LABORATORIO: CLASIFICACIÓN DE PROCESOS
// ==========================================
const procesosData = [
    { nombre: "Planeación Estratégica", tipo: "estrategico", feedback: "¡Correcto! Define el rumbo a largo plazo." },
    { nombre: "Análisis de Mercado", tipo: "estrategico", feedback: "¡Bien! Detecta oportunidades de negocio." },
    { nombre: "Producción", tipo: "operativo", feedback: "¡Exacto! Fabrica el producto (el termo)." },
    { nombre: "Venta", tipo: "operativo", feedback: "¡Correcto! Procesa los pedidos y genera ingresos." },
    { nombre: "Distribución", tipo: "operativo", feedback: "¡Bien! Entrega el producto al cliente." },
    { nombre: "Gestión de RRHH", tipo: "soporte", feedback: "¡Correcto! Gestiona el recurso humano." },
    { nombre: "Compras", tipo: "soporte", feedback: "¡Bien! Adquiere materias primas." },
    { nombre: "Control de Calidad", tipo: "soporte", feedback: "¡Correcto! Verifica estándares." },
    { nombre: "Mantenimiento", tipo: "soporte", feedback: "¡Bien! Repara maquinaria." }
];

let selectedProcess = null;

function initProcessLab() {
    const pool = document.getElementById('process-pool');
    if (!pool) {
        console.log('No se encontró el elemento process-pool');
        return;
    }
    
    const shuffled = [...procesosData].sort(() => 0.5 - Math.random());
    
    shuffled.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'process-card';
        card.textContent = p.nombre;
        card.dataset.tipo = p.tipo;
        card.dataset.index = index;
        card.style.cssText = "background: white; color: #1e293b; padding: 8px 14px; border-radius: 6px; border: 2px solid #cbd5e1; cursor: pointer; transition: all 0.3s; font-size: 13px; font-weight: 500;";
        card.onclick = () => selectProcess(card);
        pool.appendChild(card);
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.onclick = () => dropProcess(zone);
    });
    
    console.log('Laboratorio inicializado correctamente');
}

function selectProcess(card) {
    document.querySelectorAll('.process-card').forEach(c => {
        c.style.border = "2px solid #cbd5e1";
        c.style.background = "white";
        c.style.color = "#1e293b";
        c.classList.remove('selected');
    });
    
    card.style.border = "3px solid #0ea5e9";
    card.style.background = "#e0f2fe";
    card.style.color = "#0c4a6e";
    card.classList.add('selected');
    selectedProcess = card;
}

function dropProcess(zone) {
    if (!selectedProcess) {
        const feedback = document.getElementById('lab-feedback');
        if (!feedback) return;
        feedback.textContent = "⚠️ Primero hacé clic en un proceso de la lista.";
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50 text-center font-medium";
        feedback.classList.add('error-animation');
        setTimeout(() => feedback.classList.remove('error-animation'), 500);
        return;
    }

    const feedback = document.getElementById('lab-feedback');
    const correctType = selectedProcess.dataset.tipo;
    const zoneType = zone.id.replace('zone-', '');
    const processData = procesosData.find(p => p.nombre === selectedProcess.textContent);

    if (zoneType === correctType) {
        feedback.textContent = "✅ " + processData.feedback;
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50 text-center font-medium";
        
        const droppedCards = zone.querySelector('.dropped-cards');
        selectedProcess.style.background = "#d1fae5";
        selectedProcess.style.borderColor = "#10b981";
        selectedProcess.style.color = "#065f46";
        selectedProcess.style.cursor = "default";
        selectedProcess.onclick = null;
        selectedProcess.classList.add('success-animation');
        droppedCards.appendChild(selectedProcess);
        selectedProcess = null;
    } else {
        feedback.textContent = "❌ Incorrecto. Pensá: ¿Genera el producto directamente o es apoyo interno?";
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900/50 text-center font-medium";
        feedback.classList.add('error-animation');
        setTimeout(() => feedback.classList.remove('error-animation'), 500);
        
        selectedProcess.style.border = "2px solid #cbd5e1";
        selectedProcess.style.background = "white";
        selectedProcess.style.color = "#1e293b";
        selectedProcess.classList.remove('selected');
        selectedProcess = null;
    }
}

// ==========================================
// TRIVIA DE AUTOEVALUACIÓN
// ==========================================
const triviaProcesos = [
    {
        q: "Según ISO 9000, ¿qué es un proceso?",
        options: [
            "Un conjunto de departamentos con responsabilidades propias",
            "Una serie de actividades mutuamente relacionadas que transforman entradas en salidas",
            "La cadena de valor de Porter",
            "La estructura orgánica de Mintzberg"
        ],
        correct: 1,
        explanation: "Correcto. ISO 9000 define un proceso como actividades relacionadas que transforman elementos de entrada en elementos de salida."
    },
    {
        q: "¿Cuál es la principal diferencia entre Macroproceso y Proceso?",
        options: [
            "El macroproceso tiene actividades concretas",
            "El macroproceso es una agrupación sin actividades concretas; el proceso SÍ las tiene",
            "No hay diferencia, son sinónimos",
            "El proceso es estratégico y el macroproceso es operativo"
        ],
        correct: 1,
        explanation: "¡Exacto! El macroproceso agrupa procesos sin tener actividades concretas (ej: 'Gestión de Ventas'), mientras que el proceso sí las define (ej: 'Realizar una venta')."
    },
    {
        q: "En Termilagro, el proceso 'Liquidación de sueldos' (RRHH) es de tipo:",
        options: [
            "Estratégico",
            "Operativo",
            "Soporte/Apoyo",
            "Declaración organizacional"
        ],
        correct: 2,
        explanation: "Correcto. RRHH es un proceso de soporte porque gestiona recursos internos y apoya a los operativos, pero no genera valor directamente."
    },
    {
        q: "La visión que observa la organización desde departamentos aislados se denomina:",
        options: [
            "Visión por procesos",
            "Cadena de valor",
            "Visión funcional o departamental",
            "Modelo de gestión industrial"
        ],
        correct: 2,
        explanation: "¡Bien! La visión funcional (Henry Fayol) mira los 'silos' departamentales."
    },
    {
        q: "¿Qué significa SIPOC?",
        options: [
            "Sistemas, Inputs, Procesos, Outputs, Clientes",
            "Suppliers, Inputs, Process, Outputs, Customers",
            "Strategies, Ideas, Plans, Operations, Controls",
            "Standards, Implementation, Procedures, Operations, Quality"
        ],
        correct: 1,
        explanation: "Exacto. SIPOC: Suppliers (Proveedores), Inputs (Entradas), Process (Proceso), Outputs (Salidas), Customers (Clientes)."
    },
    {
        q: "¿En qué etapa de la Metodología de Sistemas se identifican las declaraciones, macroprocesos y procesos?",
        options: [
            "Etapa de Relevamiento",
            "Etapa de Análisis",
            "Etapa de Reconocimiento",
            "Etapa de Diseño"
        ],
        correct: 2,
        explanation: "Correcto. El reconocimiento es la primera aproximación a la organización, donde se identifican declaraciones, macroprocesos y procesos."
    }
];

let currentTrivia = 0;
let scoreTrivia = 0;

function loadTriviaQuestion() {
    const container = document.getElementById('contenedor-examen-teorico');
    if (!container) return;

    if (currentTrivia >= triviaProcesos.length) {
        const percentage = Math.round((scoreTrivia / triviaProcesos.length) * 100);
        let message = '';
        let color = '';
        let emoji = '';
        
        if (percentage === 100) {
            message = '¡Perfecto! Dominás completamente el tema de Procesos de Negocio.';
            color = 'text-emerald-600 dark:text-emerald-400';
            emoji = '🏆';
        } else if (percentage >= 80) {
            message = '¡Muy bien! Tenés un buen entendimiento del tema.';
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
                <p class="text-lg text-slate-700 dark:text-slate-300 mb-2">Puntuación: ${scoreTrivia} de ${triviaProcesos.length} (${percentage}%)</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">${message}</p>
                <button onclick="resetTrivia()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">Reiniciar Trivia</button>
            </div>
        `;
        return;
    }

    const data = triviaProcesos[currentTrivia];
    container.innerHTML = `
        <div class="mb-4">
            <span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Pregunta ${currentTrivia + 1} de ${triviaProcesos.length}</span>
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
    const data = triviaProcesos[currentTrivia];
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

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-siguiente-trivia') {
        currentTrivia++;
        loadTriviaQuestion();
    }
});

function resetTrivia() {
    currentTrivia = 0;
    scoreTrivia = 0;
    loadTriviaQuestion();
}

// ==========================================
// EXAMEN FINAL
// ==========================================
const examenFinal = [
    {
        q: "¿Cuál de las siguientes afirmaciones sobre los procesos de negocio es CORRECTA según ISO 9000?",
        options: [
            "Un proceso es un departamento de la organización",
            "Un proceso es una serie de actividades mutuamente relacionadas que transforman entradas en salidas",
            "Un proceso es exclusivamente una tarea administrativa",
            "Un proceso solo puede ser operativo"
        ],
        correct: 1,
        explanation: "ISO 9000 define proceso como actividades relacionadas que transforman elementos de entrada en elementos de salida."
    },
    {
        q: "En el caso Termilagro, 'Análisis de mercado' se clasifica como:",
        options: [
            "Proceso operativo",
            "Proceso de soporte",
            "Proceso estratégico",
            "Declaración organizacional"
        ],
        correct: 2,
        explanation: "Análisis de mercado es estratégico porque detecta oportunidades de negocio y define el rumbo a largo plazo."
    },
    {
        q: "¿Qué diferencia fundamental existe entre un Macroproceso y un Proceso?",
        options: [
            "El macroproceso tiene actividades concretas y el proceso no",
            "El macroproceso es una agrupación sin actividades concretas; el proceso SÍ las tiene",
            "Son exactamente lo mismo, solo cambia el nombre",
            "El proceso es más importante que el macroproceso"
        ],
        correct: 1,
        explanation: "El macroproceso agrupa procesos sin tener actividades concretas (ej: 'Gestión de Ventas'), mientras que el proceso sí las define (ej: 'Realizar una venta')."
    },
    {
        q: "Según Porter, las actividades que tienen efecto inmediato sobre la producción y venta se denominan:",
        options: [
            "Actividades de soporte",
            "Actividades primarias",
            "Actividades estratégicas",
            "Actividades administrativas"
        ],
        correct: 1,
        explanation: "Porter clasifica las actividades en primarias (efecto inmediato sobre producción/venta) y de apoyo (complementan a las primarias)."
    },
    {
        q: "En la metodología de sistemas, ¿en qué etapa se identifican las declaraciones, macroprocesos y procesos?",
        options: [
            "Etapa de relevamiento",
            "Etapa de análisis",
            "Etapa de reconocimiento",
            "Etapa de diseño"
        ],
        correct: 2,
        explanation: "El reconocimiento es la primera aproximación a la organización, donde se identifican declaraciones, macroprocesos y procesos."
    },
    {
        q: "¿Qué herramienta tabular se usa para caracterizar un proceso identificando Proveedores, Entradas, Proceso, Salidas y Clientes?",
        options: [
            "BPMN",
            "Cursograma",
            "SIPOC",
            "Diagrama de Gantt"
        ],
        correct: 2,
        explanation: "SIPOC (Suppliers, Inputs, Process, Output, Customers) es la herramienta tabular para caracterizar procesos según ISO 9001:2015."
    },
    {
        q: "En Termilagro, 'Control de calidad' se clasifica como:",
        options: [
            "Proceso estratégico",
            "Proceso operativo",
            "Proceso de soporte",
            "Macroproceso"
        ],
        correct: 2,
        explanation: "Control de calidad es de soporte porque verifica estándares y apoya a los procesos operativos, pero no genera valor directamente."
    },
    {
        q: "¿Cuál de las siguientes NO es una fase de la gestión por procesos?",
        options: [
            "Identificar las declaraciones de la organización",
            "Identificar los macroprocesos",
            "Diseñar la estructura organizacional",
            "Detallar los procesos"
        ],
        correct: 2,
        explanation: "Las 4 fases son: identificar declaraciones, identificar macroprocesos, identificar procesos y detallar los procesos. Diseñar la estructura no es una fase."
    },
    {
        q: "Según Laudon y Laudon, los procesos de negocio pueden ser:",
        options: [
            "Solo una fuente de costos para la empresa",
            "Una fuente de solidez competitiva si permiten innovar",
            "Exclusivamente tareas administrativas",
            "Irrelevantes para el desempeño empresarial"
        ],
        correct: 1,
        explanation: "Laudon afirma que los procesos bien diseñados pueden ser fuente de solidez competitiva si permiten innovar o desempeñarse mejor que los rivales."
    },
    {
        q: "En el modelo de Mintzberg, ¿qué elementos se desacoplan de la estructura central?",
        options: [
            "La cumbre estratégica y la línea media",
            "El núcleo de operaciones",
            "La tecnoestructura y el personal de apoyo",
            "Los departamentos de ventas y marketing"
        ],
        correct: 2,
        explanation: "Mintzberg desacopla la tecnoestructura y el personal de apoyo como elementos diferenciales a la estructura central."
    }
];

let currentExamen = 0;
let scoreExamen = 0;
let respuestasExamen = [];

function loadExamenFinal() {
    const container = document.getElementById('examen-final-container');
    if (!container) return;

    if (currentExamen >= examenFinal.length) {
        const percentage = Math.round((scoreExamen / examenFinal.length) * 100);
        let message = '';
        let color = '';
        let emoji = '';
        
        if (percentage >= 90) {
            message = '¡Excelente! Dominás completamente el tema de Procesos de Negocio.';
            color = 'text-emerald-600 dark:text-emerald-400';
            emoji = '🏆';
        } else if (percentage >= 70) {
            message = '¡Muy bien! Tenés un buen entendimiento, pero hay algunos conceptos para reforzar.';
            color = 'text-sky-600 dark:text-sky-400';
            emoji = '👏';
        } else if (percentage >= 50) {
            message = 'Aprobado, pero te conviene repasar el material teórico.';
            color = 'text-amber-600 dark:text-amber-400';
            emoji = '📚';
        } else {
            message = 'No aprobado. Te recomendamos estudiar más el material y volver a intentar.';
            color = 'text-red-600 dark:text-red-400';
            emoji = '💪';
        }
        
        container.innerHTML = `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">${emoji}</div>
                <h3 class="text-2xl font-bold ${color} mb-3">Examen Finalizado</h3>
                <p class="text-lg text-slate-700 dark:text-slate-300 mb-2">Puntuación: ${scoreExamen} de ${examenFinal.length} (${percentage}%)</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">${message}</p>
                <div class="mb-6">
                    <button onclick="verRespuestasExamen()" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors mr-2">Ver respuestas</button>
                    <button onclick="resetExamenFinal()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">Reiniciar Examen</button>
                </div>
            </div>
        `;
        return;
    }

    const data = examenFinal[currentExamen];
    container.innerHTML = `
        <div class="mb-4">
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Pregunta ${currentExamen + 1} de ${examenFinal.length}</span>
                <span class="text-xs text-slate-400">Aciertos: ${scoreExamen}</span>
            </div>
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-200 mt-1">${data.q}</h3>
        </div>
        <div id="examen-options" class="space-y-2"></div>
        <div id="examen-feedback" class="mt-4 p-3 text-sm rounded-lg hidden"></div>
        <div class="mt-4 flex justify-end">
            <button id="btn-siguiente-examen" class="px-3 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs font-semibold rounded-md shadow-xs hover:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer hidden">Siguiente ➔</button>
        </div>
    `;

    const optionsContainer = document.getElementById('examen-options');
    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = "w-full p-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-left text-sm font-medium text-slate-700 dark:text-slate-200 transition-all cursor-pointer";
        btn.onclick = () => checkExamenAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkExamenAnswer(selectedIndex, btn) {
    const data = examenFinal[currentExamen];
    const feedback = document.getElementById('examen-feedback');
    const buttons = document.getElementById('examen-options').children;
    
    for (let b of buttons) b.disabled = true;

    respuestasExamen.push({
        pregunta: data.q,
        seleccionada: selectedIndex,
        correcta: data.correct,
        correctaTexto: data.options[data.correct]
    });

    if (selectedIndex === data.correct) {
        scoreExamen++;
        btn.style.background = "#d1fae5";
        btn.style.borderColor = "#10b981";
        feedback.textContent = "✅ " + data.explanation;
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50";
        btn.classList.add('success-animation');
    } else {
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#ef4444";
        buttons[data.correct].style.background = "#d1fae5";
        buttons[data.correct].style.borderColor = "#10b981";
        feedback.textContent = "❌ Incorrecto. " + data.explanation;
        feedback.className = "mt-4 p-3 text-sm rounded-lg bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900/50";
        btn.classList.add('error-animation');
    }
    
    document.getElementById('btn-siguiente-examen').classList.remove('hidden');
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-siguiente-examen') {
        currentExamen++;
        loadExamenFinal();
    }
});

function resetExamenFinal() {
    currentExamen = 0;
    scoreExamen = 0;
    respuestasExamen = [];
    loadExamenFinal();
}

function verRespuestasExamen() {
    const container = document.getElementById('examen-final-container');
    let html = `
        <div style="animation: fadeInUp 0.4s ease-out;">
            <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4"> Revisión de Respuestas</h3>
            <div class="space-y-4">
    `;
    
    respuestasExamen.forEach((resp, index) => {
        const esCorrecta = resp.seleccionada === resp.correcta;
        html += `
            <div class="p-4 rounded-lg border ${esCorrecta ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50' : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50'}">
                <div class="flex items-start gap-2 mb-2">
                    <span class="text-lg">${esCorrecta ? '✅' : '❌'}</span>
                    <div>
                        <p class="font-medium text-slate-800 dark:text-slate-200 text-sm">${index + 1}. ${resp.pregunta}</p>
                        ${!esCorrecta ? `<p class="text-xs text-slate-600 dark:text-slate-400 mt-1"><strong>Tu respuesta:</strong> ${examenFinal[index].options[resp.seleccionada]}</p>` : ''}
                        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1"><strong>Respuesta correcta:</strong> ${resp.correctaTexto}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="mt-6 flex justify-center">
                <button onclick="resetExamenFinal()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">Volver a intentar</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

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
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando...');
    initProcessLab();
    loadTriviaQuestion();
    loadExamenFinal();
});
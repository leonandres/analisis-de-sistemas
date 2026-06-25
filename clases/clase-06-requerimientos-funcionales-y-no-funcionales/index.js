// ==========================================
// CLASE 02: PROCESOS DE NEGOCIO
// Laboratorio de clasificación + Trivia
// ==========================================

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
    if (!pool) return;
    
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
    initProcessLab();
    loadTriviaQuestion();
});
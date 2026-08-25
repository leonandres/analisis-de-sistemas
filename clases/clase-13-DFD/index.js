// ==========================================
// CLASE 13: DIAGRAMAS DE FLUJO DE DATOS (DFD)
// Lógica interactiva para laboratorios, trivia y visor
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    initLabErrores();
    initQuiz();
    initPdfViewer();
});

// ==========================================
// 1. LABORATORIO: CAZADOR DE ERRORES EN DFD
// ==========================================
const escenariosLab = [
    {
        titulo: "Caso 1: Conexión entre áreas",
        descripcion: "En un DFD de compras, el analista dibuja un flujo de datos rotulado como 'Orden de compra solicitada' que va directamente desde la entidad externa 'Departamento de Ventas' hacia la entidad externa 'Proveedor'.",
        opciones: [
            "Es correcto, modela la comunicación interdepartamental",
            "Error: Conexión directa entre dos entidades externas (EE a EE)",
            "Error: El nombre del flujo debe estar en plural",
            "Error: Falta una demora intermedia entre ambas entidades"
        ],
        correcta: 1,
        explicacion: "¡Correcto! En un DFD nunca se conectan dos entidades externas entre sí. La comunicación directa entre actores externos ocurre fuera del alcance del sistema y no forma parte de su lógica interna."
    },
    {
        titulo: "Caso 2: Registro directo en base de datos",
        descripcion: "Un analista dibuja un flujo llamado 'Datos del cliente' que va directo desde el rectángulo 'Cliente' hacia las dos líneas paralelas de la demora 'D1 Clientes'.",
        opciones: [
            "Es correcto si el cliente completa un formulario web",
            "Error: Una entidad externa no puede conectarse directamente a una demora",
            "Error: Las demoras no pueden tener nombres en plural",
            "Error: El flujo debería ser bidireccional"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Una entidad externa jamás accede de manera directa a un almacén de datos (demora). Siempre debe mediar un proceso que valide, transforme o controle la persistencia de la información."
    },
    {
        titulo: "Caso 3: El proceso misterioso",
        descripcion: "El proceso 1.2 'Facturar pedido' recibe el flujo 'Pedido validado' y consulta la demora 'D2 Precios', pero no posee ningún flujo saliente hacia entidades, demoras u otros procesos.",
        opciones: [
            "Error: Agujero negro (Black hole) — los datos entran pero nada sale",
            "Error: Generación espontánea (Miracle)",
            "Es correcto si el proceso solo realiza verificaciones internas",
            "Error: No se pueden consultar precios en un proceso de facturación"
        ],
        correcta: 0,
        explicacion: "¡Correcto! Se trata de un 'Agujero negro' (Black hole). Todo proceso debe generar al menos una salida útil (un comprobante, una actualización en una demora, un mensaje de error). Si no produce nada, no tiene razón de existir."
    },
    {
        titulo: "Caso 4: Traspaso entre almacenes",
        descripcion: "Para archivar facturas antiguas, el analista traza una flecha directa desde la demora 'D1 Facturas activas' hacia la demora 'D4 Histórico de facturas'.",
        opciones: [
            "Es correcto para procesos de backup automático",
            "Error: Conexión directa entre demoras sin proceso mediador",
            "Error: Solo se permite si la flecha es bidireccional",
            "Error: Las demoras históricas no llevan número 'D'"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Los datos en reposo no se mueven solos. Siempre se requiere un proceso activo (ej. 'Archivar facturas históricas') que lea de una demora y escriba en la otra."
    },
    {
        titulo: "Caso 5: Nomenclatura ambigua",
        descripcion: "Un analista rotula un proceso como 'Archivo de clientes' y a un flujo de datos que sale de él como 'Información'.",
        opciones: [
            "Es correcto según la notación Gane & Sarson",
            "Error de nomenclatura: El proceso debe ser verbo + objeto y el flujo debe ser sustantivo + adjetivo representativo",
            "Error: Los procesos no pueden conectarse con flujos",
            "Es correcto si el flujo está documentado en el diccionario de datos"
        ],
        correcta: 1,
        explicacion: "¡Correcto! Un proceso representa una acción transformadora y debe nombrarse con frase verbal (ej. 'Gestionar clientes'). Los flujos deben indicar la naturaleza específica de los datos (ej. 'Cliente registrado') y nunca palabras genéricas como 'Información' o 'Datos'."
    }
];

let indiceLabActual = 0;
let aciertosLab = 0;

function initLabErrores() {
    const cardTitle = document.getElementById('lab-scenario-title');
    if (!cardTitle) return;
    mostrarEscenarioLab();

    const btnNext = document.getElementById('btn-next-scenario');
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            indiceLabActual++;
            if (indiceLabActual < escenariosLab.length) {
                mostrarEscenarioLab();
            } else {
                mostrarFinLab();
            }
        });
    }
}

function mostrarEscenarioLab() {
    const escenario = escenariosLab[indiceLabActual];
    document.getElementById('lab-progress-text').textContent = `Caso ${indiceLabActual + 1} de ${escenariosLab.length}`;
    document.getElementById('lab-scenario-title').textContent = escenario.titulo;
    document.getElementById('lab-scenario-desc').textContent = escenario.descripcion;

    const feedbackEl = document.getElementById('lab-feedback');
    feedbackEl.className = 'hidden mt-4 p-4 rounded-xl text-xs';
    feedbackEl.innerHTML = '';

    const btnNext = document.getElementById('btn-next-scenario');
    btnNext.classList.add('hidden');

    const grid = document.getElementById('lab-options-grid');
    grid.innerHTML = '';

    escenario.opciones.forEach((opcion, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'p-3 text-left text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:border-cyan-400 dark:hover:border-cyan-700 text-slate-700 dark:text-slate-300 font-medium transition-all cursor-pointer';
        btn.textContent = opcion;
        btn.onclick = () => verificarOpcionLab(i, btn);
        grid.appendChild(btn);
    });
}

function verificarOpcionLab(opcionSeleccionada, botonClickeado) {
    const escenario = escenariosLab[indiceLabActual];
    const esCorrecto = opcionSeleccionada === escenario.correcta;
    const feedbackEl = document.getElementById('lab-feedback');
    const grid = document.getElementById('lab-options-grid');

    // Deshabilitar botones
    grid.querySelectorAll('button').forEach((b, idx) => {
        b.disabled = true;
        b.classList.remove('hover:bg-cyan-50', 'hover:border-cyan-400', 'cursor-pointer');
        if (idx === escenario.correcta) {
            b.classList.add('bg-emerald-100', 'dark:bg-emerald-950/50', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300', 'font-bold');
        } else if (idx === opcionSeleccionada && !esCorrecto) {
            b.classList.add('bg-rose-100', 'dark:bg-rose-950/50', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        }
    });

    if (esCorrecto) {
        aciertosLab++;
        document.getElementById('lab-score-text').textContent = `Aciertos: ${aciertosLab}`;
        feedbackEl.className = 'mt-4 p-4 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-200';
        feedbackEl.innerHTML = `<strong>✅ ¡Diagnóstico acertado!</strong><p class="mt-1">${escenario.explicacion}</p>`;
    } else {
        feedbackEl.className = 'mt-4 p-4 rounded-xl text-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-900 dark:text-rose-200';
        feedbackEl.innerHTML = `<strong>❌ Respuesta incorrecta.</strong><p class="mt-1">${escenario.explicacion}</p>`;
    }

    feedbackEl.classList.remove('hidden');
    document.getElementById('btn-next-scenario').classList.remove('hidden');
}

function mostrarFinLab() {
    const card = document.getElementById('lab-scenario-card');
    card.innerHTML = `
        <div class="text-center py-4 space-y-2">
            <span class="text-3xl">🏆</span>
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">¡Laboratorio completado!</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400">Puntaje obtenido: <strong class="text-cyan-600 dark:text-cyan-400 font-extrabold text-sm">${aciertosLab} de ${escenariosLab.length}</strong> aciertos.</p>
        </div>
    `;
    document.getElementById('lab-options-grid').innerHTML = '';
    document.getElementById('lab-feedback').classList.add('hidden');
    const btnNext = document.getElementById('btn-next-scenario');
    btnNext.textContent = 'Reiniciar laboratorio';
    btnNext.classList.remove('hidden');
    btnNext.onclick = () => {
        indiceLabActual = 0;
        aciertosLab = 0;
        document.getElementById('lab-score-text').textContent = `Aciertos: 0`;
        mostrarEscenarioLab();
    };
}


// ==========================================
// 2. TRIVIA DE AUTOEVALUACIÓN TEÓRICA
// ==========================================
const preguntasQuiz = [
    {
        pregunta: "¿Qué elementos NO deben representarse nunca en un Diagrama de Contexto (DC / DFD Nivel 0)?",
        opciones: [
            "Las entidades externas puras",
            "Los flujos de datos entrantes desde el entorno",
            "Las demoras o almacenes de datos internos del sistema",
            "El nombre general del sistema"
        ],
        correcta: 2,
        explicacion: "En el Diagrama de Contexto el sistema es una 'caja negra'. Todos los almacenes internos quedan encapsulados dentro del proceso principal y no se grafican."
    },
    {
        pregunta: "¿Cómo se identifica a un evento de tipo 'Temporal' en la Tabla de Eventos?",
        opciones: [
            "Se activa por una entidad externa y su estímulo es un archivo",
            "Se activa por una condición de tiempo/calendario y su estímulo se indica con un guion (--)",
            "No produce ningún flujo de respuesta",
            "Requiere obligatoriamente dos flujos activadores simultáneos"
        ],
        correcta: 1,
        explicacion: "Los eventos temporales surgen por el paso del tiempo (fechas, cierres periódicos). No tienen un flujo activador proveniente de una entidad externa, por lo que su estímulo es '--'."
    },
    {
        pregunta: "¿Cuál es la convención gráfica reglamentaria para indicar que una Entidad Externa está duplicada en el diagrama?",
        opciones: [
            "Una doble línea en el borde superior",
            "Una línea vertical doble en el extremo izquierdo",
            "Una raya diagonal cruzada en el borde inferior derecho",
            "Un círculo punteado alrededor del rectángulo"
        ],
        correcta: 2,
        explicacion: "Para evitar cruces de líneas y mantener la legibilidad, las entidades externas repetidas llevan una raya diagonal en su esquina inferior derecha. (La doble barra vertical izquierda es para demoras duplicadas)."
    },
    {
        pregunta: "Si en el Diagrama de Contexto ingresa el flujo 'Solicitud de afiliación' y sale 'Carnet emitido', ¿qué exige la regla de balanceo en el DFD Nivel 1?",
        opciones: [
            "Que ambos flujos figuren con exactamente el mismo nombre y sentido en el DFD Nivel 1",
            "Que se puedan renombrar libremente según la tecnología a utilizar",
            "Que las salidas del DC se reemplacen por una base de datos",
            "Que se agrupen en un único flujo llamado 'Datos'"
        ],
        correcta: 0,
        explicacion: "La regla de balanceo y conservación de flujos exige estricta correspondencia 1 a 1 en nombres y direcciones de flujos entre el DC, la Tabla de Eventos y el DFD Nivel 1."
    },
    {
        pregunta: "¿Qué significa un flujo de datos que va desde una Demora hacia un Proceso?",
        opciones: [
            "Creación o inserción de un nuevo registro",
            "Eliminación física de la base de datos",
            "Consulta o lectura de información disponible",
            "Modificación de la estructura de la tabla"
        ],
        correcta: 2,
        explicacion: "Una flecha que sale de una demora hacia un proceso representa una operación de lectura o consulta de datos demorados."
    },
    {
        pregunta: "¿Por qué el DFD favorece el mantenimiento evolutivo del software?",
        opciones: [
            "Porque genera código fuente autoejecutable",
            "Porque descompone el sistema en procesos independientes y cohesivos, reduciendo el impacto de cambios",
            "Porque elimina la necesidad de contar con bases de datos relacionales",
            "Porque reemplaza a las historias de usuario y casos de uso"
        ],
        correcta: 1,
        explicacion: "Al aislar las funciones en procesos desacoplados con entradas y salidas bien definidas, si cambia una regla de negocio solo se altera el proceso correspondiente sin afectar al resto."
    }
];

let respuestasUsuario = {};

function initQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = '';
    respuestasUsuario = {};

    preguntasQuiz.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'p-5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3';
        card.id = `quiz-card-${index}`;

        const header = document.createElement('div');
        header.className = 'flex items-start gap-2.5';
        header.innerHTML = `
            <span class="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-bold text-xs flex-shrink-0 mt-0.5">${index + 1}</span>
            <h4 class="font-bold text-slate-800 dark:text-slate-100 text-sm leading-snug">${item.pregunta}</h4>
        `;
        card.appendChild(header);

        const optionsList = document.createElement('div');
        optionsList.className = 'space-y-2 mt-3 pl-8';

        item.opciones.forEach((opcion, optIndex) => {
            const label = document.createElement('label');
            label.className = 'flex items-center gap-3 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 cursor-pointer transition-colors';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `pregunta-${index}`;
            radio.value = optIndex;
            radio.className = 'radio radio-cyan radio-sm text-cyan-600';
            radio.onchange = () => responderQuiz(index, optIndex);

            label.appendChild(radio);
            const spanText = document.createElement('span');
            spanText.textContent = opcion;
            label.appendChild(spanText);
            optionsList.appendChild(label);
        });

        card.appendChild(optionsList);

        const feedback = document.createElement('div');
        feedback.id = `quiz-feedback-${index}`;
        feedback.className = 'hidden mt-3 p-3 rounded-lg text-xs';
        card.appendChild(feedback);

        container.appendChild(card);
    });

    const btnRetry = document.getElementById('btn-retry-quiz');
    if (btnRetry) {
        btnRetry.onclick = () => {
            document.getElementById('quiz-results').classList.add('hidden');
            initQuiz();
        };
    }
}

function responderQuiz(preguntaIndex, opcionSeleccionada) {
    respuestasUsuario[preguntaIndex] = opcionSeleccionada;
    const item = preguntasQuiz[preguntaIndex];
    const esCorrecto = opcionSeleccionada === item.correcta;
    const feedback = document.getElementById(`quiz-feedback-${preguntaIndex}`);
    const card = document.getElementById(`quiz-card-${preguntaIndex}`);

    // Deshabilitar radios de esta pregunta
    card.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);

    if (esCorrecto) {
        feedback.className = 'mt-3 p-3 rounded-lg text-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-200';
        feedback.innerHTML = `<strong>✅ ¡Correcto!</strong> ${item.explicacion}`;
    } else {
        feedback.className = 'mt-3 p-3 rounded-lg text-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-900 dark:text-rose-200';
        feedback.innerHTML = `<strong>❌ Incorrecto.</strong> ${item.explicacion}`;
    }
    feedback.classList.remove('hidden');

    // Verificar si se respondieron todas
    if (Object.keys(respuestasUsuario).length === preguntasQuiz.length) {
        let totalAciertos = 0;
        preguntasQuiz.forEach((p, idx) => {
            if (respuestasUsuario[idx] === p.correcta) totalAciertos++;
        });

        const resultsEl = document.getElementById('quiz-results');
        const scoreEl = document.getElementById('quiz-score');
        resultsEl.classList.remove('hidden');
        scoreEl.textContent = `Puntaje final: ${totalAciertos} de ${preguntasQuiz.length} respuestas correctas (${Math.round((totalAciertos / preguntasQuiz.length) * 100)}%)`;
    }
}


// ==========================================
// 3. VISOR DE PDFs Y PESTAÑAS
// ==========================================
function initPdfViewer() {
    const tabs = document.querySelectorAll('.pdf-tab-btn');
    const panels = document.querySelectorAll('.pdf-panel');
    if (!tabs.length || !panels.length) return;

    function activarPanel(targetId) {
        panels.forEach(panel => {
            const esTarget = panel.id === targetId;
            panel.classList.toggle('hidden', !esTarget);
            panel.style.display = esTarget ? '' : 'none';

            if (esTarget) {
                const iframe = panel.querySelector('iframe[data-src]');
                if (iframe) {
                    iframe.src = iframe.getAttribute('data-src');
                    iframe.removeAttribute('data-src');
                }
            }
        });
    }

    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(b => {
                b.classList.remove('active-tab', 'bg-cyan-600', 'text-white', 'border-cyan-600', 'shadow-xs');
                b.classList.add('bg-slate-50', 'dark:bg-slate-800/60', 'text-slate-600', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active-tab', 'bg-cyan-600', 'text-white', 'border-cyan-600', 'shadow-xs');
            btn.classList.remove('bg-slate-50', 'dark:bg-slate-800/60', 'text-slate-600', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
            btn.setAttribute('aria-selected', 'true');

            activarPanel(btn.getAttribute('data-pdf-target'));
        });
    });
}

// script.js

// ==========================================
// 🌗 MANEJO DEL SWITCH DE TEMA CLARO/OSCURO
// ==========================================
document.getElementById('btn-tema').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// ==========================================
// ⚡ LABORATORIO 1: CLASIFICACIÓN DE ENUNCIADOS
// ==========================================
const itemsClasificacion = [
    { 
        texto: '"El sistema debe generar el comprobante de inscripción automáticamente al finalizar el proceso."', 
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong> porque describe una función operativa directa y un comportamiento específico que el sistema debe ejecutar de forma automatizada transformando una entrada (el fin de la inscripción) en una salida concreta (el comprobante).'
    },
    { 
        texto: '"Todas las comunicaciones externas entre los servidores de datos deben estar cifradas utilizando RSA."', 
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional (De Producto / Calidad y Seguridad)</strong>. No representa un servicio que el usuario use de forma directa, sino una restricción de seguridad obligatoria sobre cómo deben implementarse y protegerse los flujos de datos del sistema.'
    },
    { 
        texto: '"El sistema debe controlar la superposición de horarios en los cursos."', 
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Define una regla de negocio y validación que el sistema debe ejecutar obligatoriamente sobre los datos de entrada para evitar conflictos de asignación antes de guardar un registro.'
    },
    { 
        texto: '"La solución tecnológica del sistema de inscripciones se debe realizar utilizando una Base de Datos Oracle."', 
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Organizacional</strong>. Dictamina una restricción tecnológica e institucional absoluta para el equipo de desarrollo, delimitando la infraestructura sobre la cual operará el software sin cambiar las funciones lógicas del usuario.'
    },
    { 
        texto: '"El sistema debe validar los usuarios concurrentes antes de permitir modificaciones en las actas de examen."', 
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Representa un control de acceso y una secuencia lógica obligatoria de validación que el sistema debe efectuar antes de dar curso a una transacción de modificación de datos.'
    },
    {
        texto: '"El sistema debe estar hecho en Java."',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Organizacional (Criterio de Desarrollo)</strong>. Define una restricción estricta de la tecnología a emplear. El usuario final no percibe una funcionalidad operativa directa por el uso de Java, sino que limita las herramientas elegibles para el desarrollo de todo el entorno.'
    }
];

let indiceActual = 0;

const textoEnunciado = document.getElementById('texto-enunciado');
const feedbackClasificacion = document.getElementById('feedback-clasificacion');
const textFeedbackClasificacion = document.getElementById('text-feedback-clasificacion');
const btnFuncional = document.getElementById('btn-funcional');
const btnNoFuncional = document.getElementById('btn-no-funcional');
const btnSiguienteClasificacion = document.getElementById('btn-siguiente-clasificacion');
const closeFeedbackClasificacion = document.getElementById('close-feedback-clasificacion');

function inicializarClasificacion() {
    feedbackClasificacion.classList.add('hidden');
    textoEnunciado.innerHTML = itemsClasificacion[indiceActual].texto;
}

function verificarClasificacion(respuestaUsuario) {
    const itemActual = itemsClasificacion[indiceActual];
    feedbackClasificacion.classList.remove('hidden');
    
    if (respuestaUsuario === itemActual.tipo) {
        feedbackClasificacion.className = "mt-5 p-4 text-sm rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 block text-left leading-relaxed relative";
        textFeedbackClasificacion.innerHTML = `<strong>¡Correcto!</strong> ${itemActual.justificacion}`;
    } else {
        feedbackClasificacion.className = "mt-5 p-4 text-sm rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-800 block text-left leading-relaxed relative";
        textFeedbackClasificacion.innerHTML = `<strong>Respuesta incorrecta.</strong> Analicemos el porqué: ${itemActual.justificacion}`;
    }
}

btnFuncional.addEventListener('click', () => verificarClasificacion('funcional'));
btnNoFuncional.addEventListener('click', () => verificarClasificacion('no-funcional'));
closeFeedbackClasificacion.addEventListener('click', () => feedbackClasificacion.classList.add('hidden'));
btnSiguienteClasificacion.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % itemsClasificacion.length;
    inicializarClasificacion();
});

// ==========================================
// ⚡ LABORATORIO 2: CARACTERÍSTICAS DE CALIDAD
// ==========================================
const btnsCaracteristica = document.querySelectorAll('.btn-caracteristica');
const feedbackCaracteristica = document.getElementById('feedback-caracteristica');
const textFeedbackCaracteristica = document.getElementById('text-feedback-caracteristica');
const closeFeedbackCaracteristica = document.getElementById('close-feedback-caracteristica');

btnsCaracteristica.forEach(btn => {
    btn.addEventListener('click', function() {
        const tipo = this.getAttribute('data-tipo');
        verificarCaracteristica(tipo);
    });
});

closeFeedbackCaracteristica.addEventListener('click', () => feedbackCaracteristica.classList.add('hidden'));

function verificarCaracteristica(tipo) {
    feedbackCaracteristica.classList.remove('hidden');

    if (tipo === 'verificable' || tipo === 'ambiguo') {
        feedbackCaracteristica.className = "mt-4 p-4 text-sm bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-left leading-relaxed block relative";
        textFeedbackCaracteristica.innerHTML = `
            <strong>¡Excelente elección! Es correcto.</strong> El requerimiento analizado viola de forma directa las pautas de calidad de la cátedra por dos motivos interconectados:
            <br><br>
            1. <strong>Es Ambiguo:</strong> Utiliza términos subjetivos ("muy amigable", "rápida", "fácil de usar") que quedan abiertos a múltiples interpretaciones libres por parte del programador. Lo que es "rápido" para un usuario puede ser lento para otro.
            <br>
            2. <strong>No es Verificable:</strong> Al carecer de una escala cuantitativa, es imposible para el equipo de Testing diseñar un caso de prueba objetivo que demuestre de forma matemática si el requerimiento se cumplió o no.
            <br><br>
            <span class="text-xs text-emerald-800 dark:text-emerald-400 font-semibold">💡 Corrección según los apuntes:</span> 
            Se debe reformular usando métricas concretas. Por ejemplo: <em>"El tiempo de respuesta del sistema ante consultas concurrentes de alumnos no deberá exceder los 2 segundos bajo una carga de hasta 100 usuarios simultáneos."</em>
        `;
    } else if (tipo === 'completo') {
        feedbackCaracteristica.className = "mt-4 p-4 text-sm bg-amber-50 dark:bg-amber-950/30 text-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800 rounded-lg text-left leading-relaxed block relative";
        textFeedbackCaracteristica.innerHTML = `
            <strong>Respuesta parcial / Incorrecta:</strong> Aunque la completitud es una regla fundamental (el requerimiento debe contener toda la información sin necesidad de ser expandido), el error de fondo aquí no es que falte información del proceso, sino que la información suministrada es puramente cualitativa y subjetiva.
        `;
    } else if (tipo === 'consistente') {
        feedbackCaracteristica.className = "mt-4 p-4 text-sm bg-amber-50 dark:bg-amber-950/30 text-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800 rounded-lg text-left leading-relaxed block relative";
        textFeedbackCaracteristica.innerHTML = `
            <strong>Respuesta incorrecta:</strong> Un requerimiento es consistente cuando no entra en contradicción con ningún otro requerimiento previamente aprobado en la documentación de la SRS. En este enunciado aislado, no hay elementos para determinar una contradicción cruzada, sino un problema grave de definición cualitativa interna.
        `;
    }
}

// ==========================================
// 📋 TRIVIA DE AUTOEVALUACIÓN TEÓRICA
// ==========================================
const bancoPreguntasExamen = [
    {
        id: 1,
        enunciado: "¿La arquitectura global de un sistema puede verse afectada más por cuál tipo de requerimiento?",
        opciones: [
            { texto: "Requerimientos funcionales", correcta: false, feedback: "Incorrecto. Los funcionales suelen impactar en componentes o módulos aislados (ej. un algoritmo de cálculo), pero rara vez condicionan la infraestructura completa del software." },
            { texto: "Requerimientos no funcionales", correcta: true, feedback: "¡Correcto! Los requerimientos no funcionales (como rendimiento, seguridad y disponibilidad) son propiedades emergentes. Si un sistema exige alta disponibilidad (99.99%) o cifrado extremo, se debe diseñar toda la arquitectura de servidores, redundancia y bases de datos en función de ello." }
        ]
    },
    {
        id: 2,
        enunciado: "Respecto a los 'Requerimientos del Sistema', ¿cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            { texto: "Un requerimiento funcional describe las características estéticas de la interfaz.", correcta: false, feedback: "Incorrecto. La estética y la usabilidad son atributos de calidad, clasificándose generalmente como requerimientos no funcionales." },
            { texto: "Son descripciones más detalladas que los requerimientos del usuario y pueden formar parte del contrato.", correcta: true, feedback: "¡Correcto! Mientras que el requerimiento de usuario es un enunciado de alto nivel en lenguaje natural, el requerimiento del sistema detalla con precisión técnica las funciones y restricciones, sirviendo como base legal y técnica del contrato de desarrollo." }
        ]
    },
    {
        id: 3,
        enunciado: "Analice el siguiente enunciado: 'El sistema debe estar hecho en Java'. En la práctica, ¿cómo interactúan las metas de los usuarios y las restricciones?",
        opciones: [
            { texto: "Los usuarios siempre proporcionan requerimientos completos y precisos desde el inicio.", correcta: false, feedback: "Incorrecto. En la realidad del relevamiento, los usuarios suelen desconocer las implicancias técnicas y expresan metas vagas o cualitativas." },
            { texto: "Los usuarios hallan difícil traducir metas en requerimientos mensurables, y los no funcionales suelen entrar en conflicto con otros.", correcta: true, feedback: "¡Correcto! Traducir deseos del usuario a métricas exactas es complejo. Además, un requerimiento no funcional (como alta seguridad) suele entrar en conflicto directo con otro (como la velocidad de respuesta o performance)." }
        ]
    }
];

let preguntaExamenActual = 0;

function renderizarPreguntaExamen() {
    const contenedorExamen = document.getElementById('contenedor-examen-teorico');
    if (!contenedorExamen) return;

    const datosPregunta = bancoPreguntasExamen[preguntaExamenActual];
    
    let opcionesHTML = '';
    datosPregunta.opciones.forEach((opcion, index) => {
        opcionesHTML += `
            <button onclick="evaluarRespuestaExamen(${index})" class="w-full p-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl text-left text-sm font-medium text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-xs">
                ${opcion.texto}
            </button>
        `;
    });

    contenedorExamen.innerHTML = `
        <div class="space-y-4">
            <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">Pregunta ${preguntaExamenActual + 1} de ${bancoPreguntasExamen.length}</span>
            <p class="text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">${datosPregunta.enunciado}</p>
            <div class="grid grid-cols-1 gap-3 mt-2">${opcionesHTML}</div>
            <div id="feedback-examen" class="mt-4 p-4 text-sm rounded-lg hidden leading-relaxed border relative">
                <button onclick="cerrarFeedbackExamen()" class="absolute top-2 right-3 font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">✕</button>
                <div id="text-feedback-examen" class="pr-5"></div>
                <div class="mt-3 flex justify-end">
                    <button onclick="avanzarPreguntaExamen()" class="px-3 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs font-semibold rounded-md shadow-xs hover:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer">Siguiente pregunta ➔</button>
                </div>
            </div>
        </div>
    `;
}

window.evaluarRespuestaExamen = function(indiceOpcion) {
    const feedbackEl = document.getElementById('feedback-examen');
    const textFeedbackEl = document.getElementById('text-feedback-examen');
    const opcionSeleccionada = bancoPreguntasExamen[preguntaExamenActual].opciones[indiceOpcion];
    
    feedbackEl.classList.remove('hidden');
    if (opcionSeleccionada.correcta) {
        feedbackEl.className = "mt-4 p-4 text-sm bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg block relative";
        textFeedbackEl.innerHTML = `<strong>Resultado Correcto:</strong> ${opcionSeleccionada.feedback}`;
    } else {
        feedbackEl.className = "mt-4 p-4 text-sm bg-rose-50 dark:bg-rose-950/30 text-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-800 rounded-lg block relative";
        textFeedbackEl.innerHTML = `<strong>Resultado Incorrecto:</strong> ${opcionSeleccionada.feedback}`;
    }
};

window.cerrarFeedbackExamen = function() {
    document.getElementById('feedback-examen').classList.add('hidden');
};

window.avanzarPreguntaExamen = function() {
    preguntaExamenActual = (preguntaExamenActual + 1) % bancoPreguntasExamen.length;
    renderizarPreguntaExamen();
};

// ==========================================
// 🤖 MOTOR DEL ASISTENTE EXPERTO DE IA (SANDBOX)
// ==========================================
const baseConocimientoIA = [
    { claves: ['producto', 'calidad'], r: 'Los <strong>Requerimientos No Funcionales de Producto o Calidad</strong> imponen límites directos sobre el comportamiento operativo del software en ejecución. Ejemplos obligatorios incluyen la performance (procesar peticiones en menos de 2 segundos), la seguridad (cifrado RSA) y la disponibilidad.' },
    { claves: ['organizacional', 'organizacionales'], r: 'Los <strong>Requerimientos No Funcionales Organizacionales</strong> surgen de políticas operativas, del proceso o restricciones de infraestructura tecnológica de la empresa que compra o desarrolla. Ejemplos: "Utilizar Base de Datos Oracle" o "El sistema debe programarse en Java".' },
    { claves: ['externo', 'externos', 'ley', 'reglamento'], r: 'Los <strong>Requerimientos No Funcionales Externos</strong> derivan de factores totalmente exógenos a la solución informática y a la organización misma. Abarca leyes gubernamentales de protección de datos, reglamentaciones impositivas o los estatutos internos de una Facultad.' },
    { claves: ['ambiguo', 'ambigüedad', 'defecto'], r: 'Un requerimiento es <strong>ambiguo</strong> si emplea palabras subjetivas (como "rápido", "fácil", "amigable") que admiten múltiples lecturas. Esto es crítico porque el desarrollador interpretará algo distinto a lo que imagina el cliente, destruyendo la posibilidad de verificación métrica.' },
    { claves: ['requisito', 'diferencia'], r: 'Un <strong>Requerimiento</strong> es la necesidad de alto nivel expresada por el usuario de negocio. Un <strong>Requisito</strong> representa la traducción a capacidades técnicas y restricciones detalladas que el sistema debe cumplir obligatoriamente para satisfacer esa meta.' }
];

const chatBox = document.getElementById('chat-box');
const inputChat = document.getElementById('input-chat');
const btnEnviarChat = document.getElementById('btn-enviar-chat');

function procesarMensajeChat() {
    const textoUsuario = inputChat.value.trim();
    if (!textoUsuario) return;

    // Burbuja del alumno
    chatBox.innerHTML += `
        <div class="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-xl max-w-[85%] self-end shadow-xs">
            <strong>Tú:</strong> ${textoUsuario}
        </div>
    `;

    const consultaLimpia = textoUsuario.toLowerCase();
    let respuestaIA = "Entiendo tu consulta sobre el material, pero recuerda que como consultor de la cátedra estoy restringido a responder de forma estricta sobre: <em>Requerimientos de Producto, Organizacionales, Externos, Ambigüedad o diferencias metodológicas</em>. Intenta usar esos conceptos.";

    // Buscar coincidencia semántica
    for (let item of baseConocimientoIA) {
        if (item.claves.some(clave => consultaLimpia.includes(clave))) {
            respuestaIA = item.r;
            break;
        }
    }

    // Efecto de demora para simular la respuesta
    setTimeout(() => {
        chatBox.innerHTML += `
            <div class="bg-sky-50 dark:bg-sky-950/40 p-3 rounded-xl border border-sky-100 dark:border-sky-900/60 text-slate-700 dark:text-slate-300 max-w-[85%] self-start shadow-xs">
                <strong>Asistente IA:</strong> ${respuestaIA}
            </div>
        `;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 450);

    inputChat.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

btnEnviarChat.addEventListener('click', procesarMensajeChat);
inputChat.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') procesarMensajeChat();
});

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    inicializarClasificacion();
    renderizarPreguntaExamen();
});
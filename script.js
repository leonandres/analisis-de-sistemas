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
        justificacion: 'Es un <strong>Requerimiento Funcional</strong> porque describe una función operativa directa que el sistema debe ejecutar.<br><br><strong>Patrón Entrada-Acción-Salida:</strong><br>• <strong>Entrada:</strong> Fin de inscripción<br>• <strong>Acción:</strong> Generar comprobante<br>• <strong>Salida:</strong> Archivo de comprobante'
    },
    { 
        texto: '"Todas las comunicaciones externas entre los servidores de datos deben estar cifradas utilizando RSA."', 
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional (De Producto / Calidad y Seguridad)</strong>. No describe QUÉ hace el sistema, sino CÓMO debe hacerlo (cifrado RSA). Es una restricción sobre la implementación, no una funcionalidad.'
    },
    { 
        texto: '"El sistema debe controlar la superposición de horarios en los cursos."', 
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Define una acción que el sistema ejecuta: validar y evitar conflictos de horarios.'
    },
    { 
        texto: '"La solución tecnológica del sistema de inscripciones se debe realizar utilizando una Base de Datos Oracle."', 
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Organizacional</strong>. No describe QUÉ funcionalidad, sino QUÉ tecnología usar. Afecta la arquitectura del sistema.'
    },
    { 
        texto: '"El sistema debe validar los usuarios concurrentes antes de permitir modificaciones en las actas de examen."', 
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Describe la acción de validar acceso antes de procesar cambios.'
    },
    {
        texto: '"El sistema debe estar hecho en Java."',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Organizacional</strong>. Dicta la tecnología de desarrollo (restricción), no una funcionalidad del usuario.'
    },
    {
        texto: '"Los tiempos de respuesta no deben superar 2 segundos para consultas con menos de 1000 registros."',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional de Producto/Performance</strong>. No describe QUÉ hace el sistema, sino CÓMO debe responder en términos de velocidad. Afecta arquitectura (caché, índices, servidores).'
    },
    {
        texto: '"El sistema debe permitir que los directores descarguen un reporte mensual en formato Excel."',
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Describe una acción clara: generar y descargar reportes. Entrada: solicitud de reporte → Acción: generar en Excel → Salida: archivo descargado.'
    },
    {
        texto: '"El sistema debe cumplir con la Ley 25.326 de Protección de Datos Personales de Argentina."',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Externo</strong>. No describe funcionalidades, sino obligaciones legales que condicionan cómo se implementa el sistema (cifrado, privacidad, auditoría).'
    },
    {
        texto: '"El sistema debe enviar notificaciones por email a los alumnos cuando se libera una nota."',
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Describe la acción de enviar notificaciones. Patrón: Nota liberada (entrada) → Sistema envía email (acción) → Alumno recibe notificación (salida).'
    },
    {
        texto: '"El sistema debe estar disponible 24/7 con máximo 1 hora de mantenimiento mensual."',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional de Producto/Disponibilidad</strong>. Define restricciones de uptime y redundancia. Afecta arquitectura (servidores redundantes, balanceadores de carga).'
    },
    {
        texto: '"El sistema debe registrar todos los intentos fallidos de login para auditoría."',
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Describe la acción de registrar intentos. Entrada: login fallido → Acción: guardar registro → Salida: bitácora actualizada.'
    },
    {
        texto: ' "El sistema debe implementarse en Python 3.11 o superior. "',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional ORGANIZACIONAL</strong>. Según Sommerville (Cap. 4), restringe el lenguaje/entorno de desarrollo por políticas internas o estándares del equipo. No describe QUÉ hace el sistema, sino CON QUÉ se debe construir.'
    },
    {
        texto: ' "El sistema debe exportar datos a CSV y PDF para análisis posterior. "',
        tipo: 'funcional',
        justificacion: 'Es un <strong>Requerimiento Funcional</strong>. Describe transformación: entrada (solicitud) → acción (exportar) → salida (archicos).'
    },
    {
        texto: ' "El sistema debe operar correctamente en Chrome, Firefox y Edge versiones actuales. "',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional de Producto (Compatibilidad)</strong>. Restringe el entorno de ejecución, no la lógica de negocio.'
    },
    {
        texto: ' "El código debe documentarse con Javadoc y tener pruebas unitarias que cubran el 85% de líneas. "',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Organizacional</strong>. Establece estándares internos de desarrollo y calidad, no una funcionalidad observable.'
    },
    {
        texto: ' "La plataforma debe cumplir con las pautas de accesibilidad WCAG 2.1 nivel AA. "',
        tipo: 'no-funcional',
        justificacion: 'Es un <strong>Requerimiento No Funcional Externo</strong>. Deriva de un estándar regulatorio externo que impone restricciones de diseño ajenas a la empresa.'
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
    },
    {
        id: 4,
        enunciado: "¿Cuál es la diferencia CLAVE entre un Requerimiento Funcional y uno No Funcional respecto al flujo del sistema?",
        opciones: [
            { texto: "Los funcionales tienen patrón Entrada→Acción→Salida; los no funcionales son restricciones sobre CÓMO se ejecuta el sistema", correcta: true, feedback: "¡Exactamente! Los requerimientos funcionales describen QUÉ acciones hace el sistema (transforman datos). Los no funcionales no describen acciones, sino restricciones: cómo debe responder (rápido), cómo proteger datos (cifrado), o qué tecnología usar." },
            { texto: "Los funcionales son más importantes para los usuarios", correcta: false, feedback: "Incorrecto. Ambos son igualmente importantes. Un sistema puede tener excelentes funcionalidades pero ser lento, inseguro o caerse constantemente si no cumple requerimientos no funcionales." },
            { texto: "Los no funcionales solo describen la interfaz gráfica", correcta: false, feedback: "Incorrecto. Los no funcionales abarcan: seguridad, performance, disponibilidad, escalabilidad, tecnología, regulaciones. La interfaz es solo un pequeño aspecto." }
        ]
    },
    {
        id: 5,
        enunciado: "¿Qué sucede cuando un Requerimiento Funcional entra en conflicto con uno No Funcional?",
        opciones: [
            { texto: "El equipo de desarrollo elige cuál cumplir y descarta el otro", correcta: false, feedback: "Incorrecto. No se descarta ninguno. Deben encontrarse soluciones de compromiso (trade-offs) documentadas y acordadas." },
            { texto: "El cliente debe elegir qué es más importante y negociar los términos", correcta: true, feedback: "¡Correcto! Ejemplo real: Un requerimiento funcional exige 'generar un reporte complejo' pero el no funcional dice 'respuesta en menos de 2 segundos'. El cliente debe decidir si espera más o si reduce complejidad del reporte. Estos conflictos se resuelven en la fase de requisitos." },
            { texto: "Automáticamente se prioriza el funcional", correcta: false, feedback: "Incorrecto. La priorización depende del contexto del negocio. A veces el no funcional es más crítico (ej. seguridad en un banco)." }
        ]
    },
    {
        id: 6,
        enunciado: "¿Cuál de los siguientes es un Requerimiento No Funcional EXTERNO?",
        opciones: [
            { texto: "El sistema debe procesar transacciones en menos de 3 segundos", correcta: false, feedback: "Incorrecto. Eso es de PRODUCTO/CALIDAD (Performance)." },
            { texto: "El sistema debe usar PostgreSQL como base de datos", correcta: false, feedback: "Incorrecto. Eso es ORGANIZACIONAL (restricción tecnológica interna)." },
            { texto: "El sistema debe cumplir con la Ley 25.326 de Protección de Datos Personales", correcta: true, feedback: "¡Correcto! Es EXTERNO porque viene de una regulación governamental argentina, ajena a la empresa." }
        ]
    },
    {
        id: 7,
        enunciado: "¿Un requerimiento ambiguo como 'El sistema debe ser fácil de usar' es verificable?",
        opciones: [
            { texto: "Sí, porque todos sabemos qué significa 'fácil'", correcta: false, feedback: "Incorrecto. 'Fácil' es subjetivo. Lo fácil para un experto puede ser difícil para un principiante." },
            { texto: "No, porque no hay métricas objetivas para medirlo", correcta: true, feedback: "¡Correcto! Los requerimientos ambigüos NO son verificables. Debe reescribirse como: 'El 80% de usuarios nuevos debe completar tareas sin ayuda en menos de 3 minutos'." },
            { texto: "Sí, si el cliente está de acuerdo", correcta: false, feedback: "Incorrecto. La verificabilidad no depende de la opinión, sino de poder medir objetivamente en testing." }
        ]
    },
    {
        id: 8,
        enunciado: "En una SRS (Software Requirement Specification), ¿cuál es el propósito principal?",
        opciones: [
            { texto: "Ser un documento hermoso y bien diseñado", correcta: false, feedback: "Incorrecto. La SRS es funcional, no estética." },
            { texto: "Ser un contrato técnico y legal entre cliente y proveedor, base para desarrollo y testing", correcta: true, feedback: "¡Correcto! La SRS integra todos los requerimientos, restricciones y criterios de aceptación. Es legalmente vinculante." },
            { texto: "Solo describir los requerimientos del usuario", correcta: false, feedback: "Incorrecto. Incluye requerimientos del usuario, del sistema, restricciones, criterios de aceptación, y regulaciones." }
        ]
    },
    {
        id: 9,
        enunciado: "¿Cuál es la relación entre 'Requerimiento' y 'Requisito'?",
        opciones: [
            { texto: "Son exactamente lo mismo, se usan como sinónimos", correcta: false, feedback: "Incorrecto. Tienen diferencias de abstracción y nivel técnico." },
            { texto: "Requerimiento es la necesidad del usuario; Requisito es su traducción técnica detallada", correcta: true, feedback: "¡Correcto! Requerimiento = 'Necesito generar reportes' | Requisito = 'El sistema debe generar reportes en PDF y Excel, ordenados por fecha, con máximo 5 segundos de latencia'." },
            { texto: "Requisito es más importante que Requerimiento", correcta: false, feedback: "Incorrecto. Ambos son igual de importantes, solo tienen niveles de abstracción diferentes." }
        ]
    },
    {
        id: 10,
        enunciado: "¿Por qué un requerimiento incompleto es peligroso?",
        opciones: [
            { texto: "Porque ocupa demasiado espacio en el documento", correcta: false, feedback: "Incorrecto. El tamaño no es el problema." },
            { texto: "Porque crea ambigüedad y el desarrollador implementa algo diferente a lo esperado", correcta: true, feedback: "¡Correcto! Si faltan detalles, cada desarrollador interpreta diferente. Ejemplo: 'generar reportes' sin especificar formato, periodicidad o filtros." },
            { texto: "Porque es imposible de programar", correcta: false, feedback: "Incorrecto. Es programable, pero probablemente incorrecto." }
        ]
    },
    {
        id: 11,
        enunciado: "¿Por qué Sommerville recomienda separar 'Requerimientos del Usuario' de 'Requerimientos del Sistema'?",
        opciones: [
            { texto: "Porque los del usuario son técnicos y los del sistema son de marketing", correcta: false, feedback: "Incorrecto. Es al revés." },
            { texto: "Porque tienen distintos lectores: gerentes/usuarios necesitan abstracción de negocio, y desarrolladores necesitan precisión técnica para implementación y contrato", correcta: true, feedback: "¡Correcto! Los del usuario usan lenguaje natural. Los del sistema detallan funciones, restricciones y criterios de aceptación para servir como base técnica y legal." },
            { texto: "Porque los requerimientos del sistema se eliminan al empezar a programar", correcta: false, feedback: "Incorrecto. La SRS es referencia durante todo el desarrollo y testing." }
        ]
    },
    {
        id: 12,
        enunciado: "Según ISO/IEC 9126, ¿a qué característica principal pertenece la subcaracterística 'Facilidad de Aprendizaje' (Learnability)?",
        opciones: [
            { texto: "Eficiencia", correcta: false, feedback: "Incorrecto. La eficiencia mide tiempos y uso de recursos." },
            { texto: "Usabilidad", correcta: true, feedback: "¡Correcto! La Usabilidad en ISO 9126 incluye: Entendimiento, Aprendizaje, Operabilidad, Atractivo y Cumplimiento." },
            { texto: "Mantenibilidad", correcta: false, feedback: "Incorrecto. La mantenibilidad se enfoca en código/desarrollo, no en experiencia del usuario final." }
        ]
    },
    {
        id: 13,
        enunciado: "Durante el relevamiento, se observa que los operadores omiten un paso del manual oficial para trabajar más rápido. ¿Qué técnica de elicitación hubiera revelado esto mejor que una entrevista?",
        opciones: [
            { texto: "Encuesta cerrada con escala Likert", correcta: false, feedback: "Incorrecto. Las encuestas no capturan comportamiento real vs declarado." },
            { texto: "Etnografía / Observación directa en el entorno laboral", correcta: true, feedback: "¡Correcto! Según Goguen y Sommerville, la etnografía descubre 'conocimiento tácito' y prácticas reales que los usuarios no mencionan en entrevistas." },
            { texto: "Diagrama de Casos de Uso UML", correcta: false, feedback: "Incorrecto. Los casos de uso modelan interacciones esperadas, no desviaciones operativas reales." }
        ]
    },
    {
        id: 14,
        enunciado: "Analice: 'El sistema debe proteger los datos personales'. ¿Qué característica de un requerimiento bien definido falla principalmente?",
        opciones: [
            { texto: "Consistencia", correcta: false, feedback: "Incorrecto. No hay contradicción cruzada, el problema es la vaguedad." },
            { texto: "Verificabilidad y No Ambigüedad", correcta: true, feedback: "¡Correcto! 'Proteger' es subjetivo. Sin especificar cómo (cifrado, roles, norma Ley 25.326), Testing no puede validar su cumplimiento." },
            { texto: "Completitud", correcta: false, feedback: "Incorrecto. El defecto raíz es la ambigüedad que impide la verificación." }
        ]
    },
    {
        id: 15,
        enunciado: "Un cliente exige 'disponibilidad 24/7', pero esto duplica el presupuesto por servidores redundantes. ¿Qué actividad de IR debe gestionarse?",
        opciones: [
            { texto: "Especificación técnica del código", correcta: false, feedback: "Incorrecto. Esto ocurre antes del desarrollo." },
            { texto: "Negociación y Validación de Requerimientos", correcta: true, feedback: "¡Correcto! Los NF suelen entrar en conflicto con costos/tecnología. Se debe negociar un SLA realista y documentar el trade-off." },
            { texto: "Programación Ágil con Scrum", correcta: false, feedback: "Incorrecto. El conflicto debe resolverse en la fase de IR, no durante la implementación." }
        ]
    },
    {
        id: 16,
        enunciado: "Según ISO/IEC 9126, ¿cuál de estas NO es una subcaracterística de 'Mantenibilidad'?",
        opciones: [
            { texto: "Analizabilidad, Cambiabilidad, Estabilidad", correcta: false, feedback: "Incorrecto. Estas sí pertenecen a Mantenibilidad." },
            { texto: "Testabilidad", correcta: false, feedback: "Incorrecto. Testabilidad es parte de Mantenibilidad." },
            { texto: "Tolerancia a Fallas (Fault Tolerance)", correcta: true, feedback: "¡Correcto! Pertenece a FIABILIDAD (Reliability), no a Mantenibilidad." }
        ]
    }
];

let preguntaExamenActual = 0;
let respuestasUsuario = [];
let preguntasAleatorias = [];

function barajarPreguntas() {
    preguntasAleatorias = [...bancoPreguntasExamen].sort(() => Math.random() - 0.5);
    respuestasUsuario = new Array(preguntasAleatorias.length).fill(null);
    preguntaExamenActual = 0;
}

function calcularCalificacion() {
    let correctas = respuestasUsuario.filter((resp, idx) => {
        if (resp === null) return false;
        return preguntasAleatorias[idx].opciones[resp].correcta;
    }).length;
    return Math.round((correctas / preguntasAleatorias.length) * 100);
}

function obtenerMensaje(calificacion) {
    if (calificacion === 100) {
        return { titulo: "🏆 ¡EXCELENTE!", mensaje: "¡Dominas perfectamente la Ingeniería de Requerimientos! Estás listo para cualquier desafío.", color: "emerald" };
    } else if (calificacion >= 80) {
        return { titulo: "🌟 ¡MUY BIEN!", mensaje: "Tienes una sólida comprensión de los conceptos. Sigue reforzando los puntos débiles.", color: "sky" };
    } else if (calificacion >= 60) {
        return { titulo: "✅ APROBADO", mensaje: "Entiendes los conceptos básicos. Te recomiendo repasar los materiales para mejorar.", color: "amber" };
    } else {
        return { titulo: "📚 NECESITAS ESTUDIAR MÁS", mensaje: "Revisa los conceptos fundamentales en los materiales. ¡No te desanimes, esto requiere práctica!", color: "rose" };
    }
}

function renderizarPreguntaExamen() {
    const contenedorExamen = document.getElementById('contenedor-examen-teorico');
    if (!contenedorExamen) return;

    if (preguntaExamenActual >= preguntasAleatorias.length) {
        mostrarResultados();
        return;
    }

    const datosPregunta = preguntasAleatorias[preguntaExamenActual];
    
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
            <div class="flex justify-between items-center">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">Pregunta ${preguntaExamenActual + 1} de ${preguntasAleatorias.length}</span>
                <div class="w-24 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div class="bg-sky-500 h-full" style="width: ${((preguntaExamenActual + 1) / preguntasAleatorias.length) * 100}%"></div>
                </div>
            </div>
            <p class="text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">${datosPregunta.enunciado}</p>
            <div class="grid grid-cols-1 gap-3 mt-4">${opcionesHTML}</div>
            <div id="feedback-examen" class="mt-4 p-4 text-sm rounded-lg hidden leading-relaxed border relative">
                <button onclick="cerrarFeedbackExamen()" class="absolute top-2 right-3 font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">✕</button>
                <div id="text-feedback-examen" class="pr-5"></div>
                <div class="mt-3 flex justify-end">
                    <button onclick="avanzarPreguntaExamen()" class="px-3 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs font-semibold rounded-md shadow-xs hover:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer">${preguntaExamenActual + 1 === preguntasAleatorias.length ? 'Ver resultados' : 'Siguiente'} ➔</button>
                </div>
            </div>
        </div>
    `;
}

function mostrarResultados() {
    const contenedorExamen = document.getElementById('contenedor-examen-teorico');
    const calificacion = calcularCalificacion();
    const { titulo, mensaje, color } = obtenerMensaje(calificacion);

    const coloresMap = {
        emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200',
        sky: 'bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 text-sky-950 dark:text-sky-200',
        amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200',
        rose: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-200'
    };

    contenedorExamen.innerHTML = `
        <div class="text-center space-y-6 max-w-md mx-auto">
            <div class="p-6 rounded-xl border ${coloresMap[color]}">
                <div class="text-5xl font-bold mb-2">${calificacion}%</div>
                <div class="text-2xl font-bold mb-2">${titulo}</div>
                <p class="text-base leading-relaxed">${mensaje}</p>
            </div>
            
            <button onclick="reiniciarExamen()" class="w-full px-4 py-3 bg-slate-800 dark:bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors cursor-pointer">
                🔄 Intentar de nuevo (preguntas diferentes)
            </button>
        </div>
    `;
}

window.evaluarRespuestaExamen = function(indiceOpcion) {
    respuestasUsuario[preguntaExamenActual] = indiceOpcion;
    
    const feedbackEl = document.getElementById('feedback-examen');
    const textFeedbackEl = document.getElementById('text-feedback-examen');
    const opcionSeleccionada = preguntasAleatorias[preguntaExamenActual].opciones[indiceOpcion];
    
    feedbackEl.classList.remove('hidden');
    if (opcionSeleccionada.correcta) {
        feedbackEl.className = "mt-4 p-4 text-sm bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg block relative";
        textFeedbackEl.innerHTML = `<strong>✅ Correcto:</strong> ${opcionSeleccionada.feedback}`;
    } else {
        feedbackEl.className = "mt-4 p-4 text-sm bg-rose-50 dark:bg-rose-950/30 text-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-800 rounded-lg block relative";
        textFeedbackEl.innerHTML = `<strong>❌ Incorrecto:</strong> ${opcionSeleccionada.feedback}`;
    }
};

window.cerrarFeedbackExamen = function() {
    document.getElementById('feedback-examen').classList.add('hidden');
};

window.avanzarPreguntaExamen = function() {
    preguntaExamenActual++;
    renderizarPreguntaExamen();
};

window.reiniciarExamen = function() {
    barajarPreguntas();
    renderizarPreguntaExamen();
};

// ==========================================
// 🤖 MOTOR DEL ASISTENTE EXPERTO DE IA (SANDBOX)
// ==========================================
const baseConocimientoIA = [
    // Saludos y meta-preguntas
    { claves: ['hola', 'hola!', 'hey', 'buenos'], r: '¡Hola! 👋 Soy tu asistente especializado en Ingeniería de Requerimientos. Estoy aquí para ayudarte a entender requerimientos funcionales, no funcionales y sus características. ¿Qué tema te gustaría explorar hoy? Puedes preguntarme sobre tipos de requerimientos, ejemplos, diferencias, o cualquier concepto de la cátedra.' },
    
    { claves: ['qué me puedes', 'qué puedes responder', 'qué temas', 'en qué puedo', 'capacidades', 'ayuda'], r: '<strong>📚 Mis capacidades principales:</strong><br><br><strong>1. Taxonomías de Requerimientos</strong> - Qué es un Requerimiento vs Requisito | Funcionales vs No Funcionales<br><br><strong>2. Tipos de Requerimientos No Funcionales</strong> - De Producto/Calidad | Organizacionales | Externos (con ejemplos)<br><br><strong>3. Características de Calidad</strong> - Verificable | Completo | Consistente | No Ambiguo<br><br><strong>4. Ejemplos Concretos</strong> - Para cada tipo, con casos reales en formato "El sistema debe..."<br><br><strong>5. Conceptos Clave</strong> - SRS | Elicitación | Ambigüedad | Conflictos entre requerimientos<br><br>💡 <strong>Prueba preguntarme:</strong> "¿Qué tipos de no funcionales hay?" o "Dame un ejemplo de requerimiento de seguridad"' },

    // Tipos de requerimientos no funcionales - COMPLETO
    { claves: ['tipos de requerimientos no funcionales', 'tipos no funcionales', 'cuáles son los no funcionales', 'categorías no funcionales'], r: '<strong>📊 Los 3 Tipos de Requerimientos No Funcionales:</strong><br><br><strong>1️⃣ DE PRODUCTO/CALIDAD</strong><br>Limitan el comportamiento del software. Incluyen: Performance, Seguridad, Disponibilidad, Escalabilidad, Usabilidad, Compatibilidad.<br><strong>Ejemplo:</strong> "El sistema debe procesar reportes en menos de 5 segundos con 100 usuarios simultáneos"<br><br><strong>2️⃣ ORGANIZACIONALES</strong><br>Políticas de la empresa. Incluyen: Tecnología a usar, Procesos de desarrollo, Estándares internos.<br><strong>Ejemplo:</strong> "El sistema debe desarrollarse en Java con framework Spring Boot"<br><br><strong>3️⃣ EXTERNOS</strong><br>Regulaciones ajenas a la empresa. Incluyen: Leyes (GDPR), Normativas (ISO), Regulaciones gubernamentales.<br><strong>Ejemplo:</strong> "El sistema debe cumplir GDPR para protección de datos personales de usuarios europeos"' },

    // Requerimientos de Producto/Calidad con ejemplos
    { claves: ['producto', 'calidad', 'ejemplo', 'instancia', 'de producto'], r: '<strong>✅ Requerimientos No Funcionales DE PRODUCTO/CALIDAD - Ejemplos:</strong><br><br><strong>🚀 Performance/Rendimiento:</strong><br>"El sistema debe responder a consultas de búsqueda en menos de 2 segundos bajo carga normal"<br><br><strong>🔐 Seguridad:</strong><br>"El sistema debe cifrar todas las contraseñas usando bcrypt con mínimo 12 caracteres"<br><br><strong>📊 Disponibilidad:</strong><br>"El sistema debe estar disponible 99.9% del tiempo anual, con máximo 43 minutos de inactividad"<br><br><strong>⚡ Escalabilidad:</strong><br>"El sistema debe soportar hasta 10,000 usuarios concurrentes sin degradación"<br><br><strong>🎨 Usabilidad:</strong><br>"El 90% de usuarios nuevos deben completar el registro sin ayuda en menos de 3 minutos"<br><br><strong>🔄 Compatibilidad:</strong><br>"El sistema debe funcionar en Chrome, Firefox, Safari y Edge versiones actuales"' },

    // Requerimientos Organizacionales con ejemplos
    { claves: ['organizacional', 'organizacionales', 'ejemplo', 'organización'], r: '<strong>🏢 Requerimientos No Funcionales ORGANIZACIONALES - Ejemplos:</strong><br><br><strong>💻 Tecnología:</strong><br>"El sistema debe implementarse en Python 3.11 o superior"<br><br><strong>🗄️ Infraestructura:</strong><br>"Se debe utilizar PostgreSQL 14 como motor de base de datos principal"<br><br><strong>🏗️ Arquitectura:</strong><br>"El backend debe seguir patrón MVC con separación clara de responsabilidades"<br><br><strong>📋 Proceso de Desarrollo:</strong><br>"Se debe seguir metodología Scrum con sprints de 2 semanas"<br><br><strong>✔️ Control de Calidad:</strong><br>"Todo código debe tener cobertura de pruebas unitarias mínimo del 80%"<br><br><strong>📚 Documentación:</strong><br>"Cada función debe incluir docstring detallado con parámetros, retorno y excepciones"' },

    // Requerimientos Externos con ejemplos locales
    { claves: ['externo', 'externos', 'ley', 'reglamento', 'regulación', 'regulaciones', 'ejemplo'], r: '<strong>⚖️ Requerimientos No Funcionales EXTERNOS - Ejemplos:</strong><br><br><strong>🇦🇷 AFIP (Argentina):</strong><br>"Las facturas electrónicas deben generar XML válido según especificaciones AFIP"<br>"El sistema debe registrar todas las transacciones para auditoría de impuestos"<br><br><strong>🏛️ Regulaciones Bancarias (Argentina):</strong><br>"El sistema debe cumplir con normas del Banco Central de la República Argentina"<br>"Se deben mantener registros de transacciones por mínimo 5 años"<br><br><strong>🔒 Protección de Datos Personales:</strong><br>"El sistema debe cumplir Ley 25.326 de Protección de Datos Personales"<br>"Los usuarios pueden solicitar eliminar sus datos en máximo 30 días"<br><br><strong>🏥 Sistemas de Salud (si aplica):</strong><br>"Las historias clínicas deben cifrarse según normativa del Ministerio de Salud"<br><br><strong>📜 Instituciones Educativas:</strong><br>"Las calificaciones deben guardarse conforme a resoluciones del Consejo Superior"<br>"Los datos de estudiantes deben ser confidenciales según estatutos de la Universidad"<br><br><strong>♿ Accesibilidad Digital:</strong><br>"La plataforma debe ser accesible para personas con discapacidades visuales"' },

    // Diferencia Requerimiento vs Requisito
    { claves: ['requisito', 'diferencia', 'distinción', 'vs', 'versus'], r: '<strong>🔄 ¿Diferencia entre REQUERIMIENTO y REQUISITO?</strong><br><br><strong>📌 REQUERIMIENTO:</strong> Necesidad expresada por el usuario/cliente en lenguaje natural<br>Ejemplo: "Necesitamos un sistema que sea rápido"<br><br><strong>⚙️ REQUISITO:</strong> Traducción técnica y precisa de esa necesidad<br>Ejemplo: "El sistema debe procesar transacciones en menos de 2 segundos con 500 usuarios simultáneos"<br><br>💡 <strong>En resumen:</strong> Requerimiento = lo que el usuario QUIERE | Requisito = lo que el desarrollador DEBE HACER' },

    // Funcionales vs No Funcionales
    { claves: ['funcional', 'functionalidad', 'diferencia', 'funcionales'], r: '<strong>📊 REQUERIMIENTOS FUNCIONALES vs NO FUNCIONALES</strong><br><br><strong>✅ FUNCIONAL:</strong> Describe qué debe HACER el sistema<br>Ejemplo: "El sistema debe generar facturas automáticamente al procesar una venta"<br><br><strong>⚙️ NO FUNCIONAL:</strong> Describe CÓMO debe comportarse el sistema<br>Ejemplo: "Las facturas deben generarse en menos de 1 segundo"<br><br>💡 <strong>Regla simple:</strong> ¿Puedo verlo/usarlo directamente? → Funcional | ¿Es una restricción o característica? → No Funcional' },

    // Características de calidad
    { claves: ['verificable', 'verificabilidad', 'medible', 'métrica'], r: '<strong>✅ VERIFICABLE:</strong> Un requerimiento es verificable si se puede medir objetivamente.<br><br>❌ INCORRECTO: "El sistema debe ser rápido"<br>✅ CORRECTO: "El sistema debe procesar consultas en menos de 2 segundos"<br><br>❌ INCORRECTO: "La interfaz debe ser amigable"<br>✅ CORRECTO: "El 80% de usuarios nuevos debe completar tareas sin ayuda en 5 minutos"<br><br>💡 Si no puedes medirlo, no puedes verificarlo en testing.' },

    { claves: ['completo', 'completitud', 'completa'], r: '<strong>✅ COMPLETO:</strong> Contiene toda la información necesaria sin ambigüedades adicionales.<br><br>❌ INCOMPLETO: "El sistema debe generar reportes"<br>✅ COMPLETO: "El sistema debe generar reportes mensuales en PDF, Excel y JSON, ordenados por fecha, filtrados por departamento, con logo corporativo"<br><br>Debe incluir: QUÉ, QUIÉN, CUÁNDO, CÓMO, CONDICIONES Y EXCEPCIONES' },

    { claves: ['consistente', 'consistencia', 'contradicción'], r: '<strong>✅ CONSISTENTE:</strong> No entra en contradicción con otros requerimientos.<br><br>❌ INCONSISTENTE:<br>- Req 1: "Máxima seguridad con cifrado AES-256"<br>- Req 2: "Respuesta en menos de 100ms"<br>(La encriptación ralentiza, hay conflicto)<br><br>✅ CONSISTENTE:<br>- Req 1: "Cifrado RSA para datos sensibles"<br>- Req 2: "Respuesta en menos de 2 segundos para datos no sensibles"<br>(No hay conflicto, están bien separados)' },

    { claves: ['ambiguo', 'ambigüedad', 'defecto', 'vago', 'subjetivo'], r: '<strong>⚠️ AMBIGUO:</strong> Usa palabras subjetivas que cada persona interpreta diferente.<br><br>❌ AMBIGUO: "El sistema debe ser fácil de usar y responder rápido"<br>✅ CLARO: "El sistema debe tener interfaz con máximo 3 clicks para completar una transacción y responder en menos de 2 segundos"<br><br>Palabras a evitar: "rápido", "fácil", "amigable", "simple", "intuitivo", "bonito"<br><br>Reemplaza por: métricas, tiempos, cantidades, criterios específicos.' },

    { claves: ['srs', 'especificación de requisitos', 'documento'], r: '<strong>📄 SRS (Software Requirement Specification)</strong><br><br>Es el documento formal que contiene:<br>✓ Todos los requerimientos del usuario<br>✓ Todos los requisitos del sistema<br>✓ Restricciones tecnológicas y organizacionales<br>✓ Criterios de aceptación y validación<br><br>Es un <strong>CONTRATO LEGAL</strong> entre cliente y proveedor.<br><br>Si no está en la SRS, no es responsabilidad del desarrollador implementarlo.' },

    // Respuesta por defecto mejorada
    { claves: [], r: 'Interesante pregunta. 🤔 Aunque no tengo respuesta específica sobre ese tema, te recomiendo consultar los materiales en la sección 📚 Materiales de Apoyo. Si tu duda es sobre requerimientos funcionales, no funcionales, características de calidad, o la diferencia entre requerimiento y requisito, cuéntame más detalles y trataré de ayudarte.' }
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
    barajarPreguntas();
    renderizarPreguntaExamen();
});
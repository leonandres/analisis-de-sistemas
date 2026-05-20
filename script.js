// script.js
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
const btnFuncional = document.getElementById('btn-funcional');
const btnNoFuncional = document.getElementById('btn-no-funcional');
const btnsCaracteristica = document.querySelectorAll('.btn-caracteristica');
const feedbackCaracteristica = document.getElementById('feedback-caracteristica');

btnFuncional.addEventListener('click', () => verificarClasificacion('funcional'));
btnNoFuncional.addEventListener('click', () => verificarClasificacion('no-funcional'));

function cargarSiguienteEnunciado() {
    feedbackClasificacion.className = "mt-4 p-4 text-sm rounded-lg hidden text-left leading-relaxed";
    indiceActual = (indiceActual + 1) % itemsClasificacion.length;
    textoEnunciado.innerHTML = itemsClasificacion[indiceActual].texto;
}

function verificarClasificacion(respuestaUsuario) {
    const itemActual = itemsClasificacion[indiceActual];
    
    if (respuestaUsuario === itemActual.tipo) {
        feedbackClasificacion.className = "mt-4 p-4 text-sm rounded-lg bg-emerald-50 text-emerald-950 border border-emerald-200 block text-left leading-relaxed";
        feedbackClasificacion.innerHTML = `<strong>¡Correcto!</strong> ${itemActual.justificacion}`;
        setTimeout(cargarSiguienteEnunciado, 4000);
    } else {
        feedbackClasificacion.className = "mt-4 p-4 text-sm rounded-lg bg-rose-50 text-rose-950 border border-rose-200 block text-left leading-relaxed";
        feedbackClasificacion.innerHTML = `<strong>Respuesta incorrecta.</strong> Analicemos el porqué: ${itemActual.justificacion}`;
    }
}

btnsCaracteristica.forEach(btn => {
    btn.addEventListener('click', function() {
        const tipo = this.getAttribute('data-tipo');
        verificarCaracteristica(tipo);
    });
});

function verificarCaracteristica(tipo) {
    feedbackCaracteristica.classList.remove('hidden');

    if (tipo === 'verificable' || tipo === 'ambiguo') {
        feedbackCaracteristica.className = "mt-4 p-4 text-sm bg-emerald-50 text-emerald-950 border border-emerald-200 rounded-lg text-left leading-relaxed block";
        feedbackCaracteristica.innerHTML = `
            <strong>¡Excelente elección! Es correcto.</strong> El requerimiento analizado viola de forma directa las pautas de calidad de la cátedra por dos motivos interconectados:
            <br><br>
            1. <strong>Es Ambiguo:</strong> Utiliza términos subjetivos ("muy amigable", "rápida", "fácil de usar") que quedan abiertos a múltiples interpretaciones libres por parte del programador. Lo que es "rápido" para un usuario puede ser lento para otro.
            <br>
            2. <strong>No es Verificable:</strong> Al carecer de una escala cuantitativa, es imposible para el equipo de Testing diseñar un caso de prueba objetivo que demuestre de forma matemática si el requerimiento se cumplió o no.
            <br><br>
            <span class="text-xs text-emerald-800 font-semibold">💡 Corrección según los apuntes:</span> 
            Se debe reformular usando métricas concretas. Por ejemplo: <em>"El tiempo de respuesta del sistema ante consultas concurrentes de alumnos no deberá exceder los 2 segundos bajo una carga de hasta 100 usuarios simultáneos."</em>
        `;
    } else if (tipo === 'completo') {
        feedbackCaracteristica.className = "mt-4 p-4 text-sm bg-amber-50 text-amber-950 border border-amber-200 rounded-lg text-left leading-relaxed block";
        feedbackCaracteristica.innerHTML = `
            <strong>Respuesta parcial / Incorrecta:</strong> Aunque la completitud es una regla fundamental (el requerimiento debe contener toda la información sin necesidad de ser expandido), el error de fondo aquí no es que falte información del proceso, sino que la información suministrada es puramente cualitativa y subjetiva.
        `;
    } else if (tipo === 'consistente') {
        feedbackCaracteristica.className = "mt-4 p-4 text-sm bg-amber-50 text-amber-950 border border-amber-200 rounded-lg text-left leading-relaxed block";
        feedbackCaracteristica.innerHTML = `
            <strong>Respuesta incorrecta:</strong> Un requerimiento es consistente cuando no entra en contradicción con ningún otro requerimiento previamente aprobado en la documentación de la SRS. En este enunciado aislado, no hay elementos para determinar una contradicción cruzada, sino un problema grave de definición cualitativa interna.
        `;
    }
}
# Guía Resuelta de Parciales de Análisis de Sistemas (UTN.BA)

Esta guía contiene la recopilación y resolución oficial de los exámenes parciales filtrados, enfocándose exclusivamente en los temas correspondientes a la cursada.

---

## 1° Parcial (08 de Julio de 2024) - K2001 - Tema 1

### I. Teoría y Conceptos

#### 1. Definir qué es un sistema de información. Dar un ejemplo de un sistema de información existente en un laboratorio, explicando claramente dónde se visualizan cada uno de los elementos que utilizó en la definición. Relacione este sistema con el concepto de homeostasis.

*   **Definición de Sistema de Información**: Es un conjunto de elementos interrelacionados (personas, datos, procesos, hardware, software) que recolectan, procesan, almacenan y distribuyen información para apoyar la toma de decisiones, la coordinación y el control en una organización.
*   **Ejemplo en un Laboratorio**: Un Sistema de Gestión de Muestras (LIMS).
    *   *Datos (Entradas)*: Código de barra del tubo, nombre del paciente, tipo de análisis solicitado.
    *   *Procesamiento*: El sistema calcula los promedios y compara con los rangos normales históricos.
    *   *Almacenamiento*: Los resultados se guardan en la base de datos de pacientes.
    *   *Salida (Distribución)*: Envío automático del reporte de resultados en PDF al correo del médico o paciente.
*   **Relación con Homeostasis**: La homeostasis es la propiedad de autorregulación del sistema para mantener un equilibrio dinámico interno ante cambios del entorno. En el laboratorio, el SI actúa enviando alertas automáticas si un valor crítico es detectado (retroalimentación negativa), permitiendo tomar medidas correctivas inmediatas para restablecer el flujo de trabajo normal.

#### 2. Complete el enunciado: "Los procesos de negocio operativos..."
*   **Respuesta**: "...tienen como propósito principal la creación de valor y por lo tanto son los responsables de que el negocio logre sus objetivos."

#### 3. Complete el enunciado: "En CU, un escenario es..."
*   **Respuesta**: "...una posible secuencia de pasos o interacción entre el actor y el sistema. Un Caso de Uso está compuesto por un conjunto de escenarios (exitosos y alternativos/excepciones)."

#### 4. Detalle dos requerimientos no funcionales organizacionales.
*   **Respuesta**:
    1.  *De proceso*: El sistema debe ser programado en lenguaje C++.
    2.  *De entrega*: El sistema debe comunicarse e integrarse con el resto de los sistemas de la organización utilizando un framework y protocolo específico dictado por la gerencia de sistemas.

#### 5. Complete el enunciado: "En el ciclo de vida incremental (ágil)..."
*   **Respuesta**: "...se acepta que los requerimientos cambien incluso en las etapas tardías del desarrollo y se aprovecha el cambio para proporcionar ventaja competitiva al cliente."

---

### II. Verdadero o Falso (Justificado)

#### 6. "En el relevamiento es mejor utilizar siempre preguntas cerradas porque de esa forma el usuario no explaya sobre aspectos de su trabajo que no son relevantes."
*   **Clasificación**: **FALSO**.
*   **Justificación**: No existe una técnica o tipo de pregunta único o mejor por defecto. Depende del analista y la situación. Al inicio es recomendable usar preguntas abiertas para entender el contexto general del negocio. Las preguntas cerradas se usan más adelante para validar datos precisos o confirmar reglas de negocio específicas.

#### 7. "La jerarquía sistémica es la propiedad de un sistema que se define en función del nivel jerárquico establecido en el organigrama de la organización."
*   **Clasificación**: **FALSO**.
*   **Justificación**: La jerarquía sistémica se refiere a que los sistemas están compuestos por subsistemas interrelacionados y, a su vez, forman parte de un suprasistema. No guarda relación directa con el organigrama jerárquico administrativo de la empresa.

#### 8. "En un sistema de inscripciones algunos ejemplos de requerimientos funcionales pueden ser el tiempo de generación del comprobante de inscripción, el tipo de letra utilizado y la definición de los datos a imprimir en el comprobante."
*   **Clasificación**: **FALSO**.
*   **Justificación**: El tiempo de generación del comprobante y el tipo de letra son requerimientos no funcionales (de rendimiento y usabilidad respectivamente), ya que especifican *cómo* debe ser el comprobante. Solo la definición de los datos a imprimir (legajo, materias, etc.) y la acción de generar el comprobante representan requerimientos funcionales.

#### 10. "En el enfoque de gestión por procesos el 'trabajo' de la organización lo define su estructura jerárquica."
*   **Clasificación**: **FALSO**.
*   **Justificación**: La gestión por procesos define el trabajo de forma transversal y horizontal a través del flujo de valor que cruza las áreas funcionales. La estructura jerárquica define la autoridad administrativa tradicional vertical, no el flujo de los procesos.

---

### III. Caso Práctico: Informe de Reconocimiento (InfoLey Web)

#### 1. Objetivo del Mandato
Integrar gradualmente el Sistema de Información Jurídica (SIJ) con el portal InfoLey Web para consolidar toda la información legislativa y judicial en una única plataforma accesible, optimizando los recursos públicos y garantizando búsquedas rápidas y eficaces para los operadores del ministerio y los ciudadanos.

#### 2. Problemas y Necesidades Detectados
*   **Problema**: Tiempos de respuesta lentos en los servidores físicos ante una carga de 500,000 usuarios diarios.
    *   *Necesidad*: Migrar los servidores a infraestructura en la nube para garantizar alta disponibilidad y escalabilidad.
*   **Problema**: Desorganización y falta de consistencia en el contenido jurídico publicado.
    *   *Necesidad*: Automatizar la validación según el Manual de Técnica Legislativa.

#### 3. Datos Faltantes para Relevar
*   *Áreas sin funciones detalladas*: Faltan las responsabilidades específicas de la Secretaría de Derecho Penal, Secretaría de Derecho Administrativo y Secretaría de Derecho Procesal.
*   *Estructura de Doctrina y Resoluciones*: Se mencionan las oficinas pero no sus jerarquías.
*   *Dirección de Sistemas*: Falta relevar la estructura interna y funciones detalladas del área responsable de la infraestructura.

---

### IV. Caso Práctico: Casos de Uso (Generar Expediente)

#### Diagrama de Casos de Uso
*   **Actor Principal**: Secretario
*   **Actor Secundario**: Jefe de Administración de Anteproyectos, Ciudadano
*   **Casos de Uso**:
    *   `Generar expediente` (Iniciado por Secretario) -> `<<include>>` `Iniciar Sesión`
    *   `Consultar proyectos rechazados` (Iniciado por Jefe de Administración de Anteproyectos) -> `<<include>>` `Iniciar Sesión`
    *   `Seguimiento de un proyecto presentado` (Iniciado por Ciudadano)

#### Especificación Narrativa: Generar Expediente
*   **Actor**: Secretario.
*   **Precondición**: El Secretario ha iniciado sesión exitosamente en el sistema.
*   **Curso Normal / Básico**:
    1. Se ejecuta con éxito el Caso de Uso `Iniciar Sesión`.
    2. El sistema solicita seleccionar el tipo de peticionante.
    3. El Secretario selecciona "Poder Ejecutivo" o "Parlamento".
    4. El sistema presenta el link de acceso al módulo de ingreso especial del proyecto.
    5. El sistema solicita ingresar el nombre del proyecto y la materia.
    6. El Secretario ingresa los datos correspondientes.
    7. El sistema verifica que la materia se corresponda con la cámara iniciadora consultando el archivo de Jurisprudencia.
    8. El sistema verifica que el proyecto no haya sido rechazado en el año legislativo actual.
    9. El sistema admite el proyecto y genera la carátula del expediente con número, materia, peticionante y fecha de ingreso.
    10. El sistema asigna el proyecto al módulo de workflow de comisiones.
*   **Curso Alternativo / Excepciones**:
    *   **3.a. El tipo de peticionante seleccionado es "Ciudadano"**:
        1. El sistema solicita Nombre, Apellido, DNI, Fecha y Lugar de Nacimiento.
        2. El Secretario ingresa los datos.
        3. El flujo continúa en el paso 5.
    *   **7.a. La materia no corresponde a la Cámara de Origen**:
        1. El sistema muestra: "No corresponde iniciar el proyecto en esta cámara".
        2. El Secretario confirma la lectura y el sistema regresa al menú principal.
    *   **8.a. El proyecto ya figura en la lista de proyectos rechazados del año actual**:
        1. El sistema muestra: "Proyecto rechazado, no puede presentarse hasta el próximo año legislativo".
        2. El sistema añade el proyecto al archivo "Rechazos año legislativo actual" y notifica a la Oficina de Administración.
        3. El sistema cancela la operación y vuelve al menú principal.

---
---

## 2° Parcial (11 de Noviembre de 2024) - K2001 - Tema 1

### I. Teoría y Conceptos (Ágil / Scrum)

#### 1. El Product Backlog es...
*   **Respuesta Correcta**: Ninguna de las anteriores.
*   **Justificación**: El Product Backlog es la lista única y ordenada de todo lo que se conoce que es necesario para desarrollar el producto. Es gestionado y priorizado de forma exclusiva por el **Product Owner**, no por el Scrum Master o el equipo de desarrollo directamente.

#### 3. ¿Cuáles son los diagramas estructurales en UML?
*   **Respuesta Correcta**: Diagrama de Clases y Diagrama de Despliegue.
*   *(Nota: El diagrama de Casos de Uso y el diagrama de Secuencia son diagramas de comportamiento/interacción).*

---

### II. Verdadero o Falso (Justificado)

#### 1. "En la ceremonia Planning de SCRUM, se analiza qué se va a hacer a lo largo de todo el proyecto."
*   **Clasificación**: **FALSO**.
*   **Justificación**: En la Sprint Planning solo se analiza y planifica el trabajo correspondiente al **Sprint actual** (que dura usualmente entre 1 y 4 semanas). No se planifica el proyecto completo debido al enfoque adaptativo de la agilidad.

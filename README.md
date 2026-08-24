# analisis-de-sistemas

Web de ayuda para el examen de la materia Análisis de Sistemas. Incluye apuntes teóricos y una interfaz dinámica con soporte para múltiples esquemas de diseño interactivo.

### 🌐 URL
» [leonandres.github.io/analisis-de-sistemas/](https://leonandres.github.io/analisis-de-sistemas)

---
### Tecnologías y estructura de color

El diseño de la interfaz aprovecha el espacio de color moderno **OKLCH** y componentes responsivos:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


#### Paleta base de muestra (OKLCH modificado)
GitHub renderiza estos bloques de color directamente en tu pantalla:
* 🟥 `oklch(60% 0.15 20)` — Tono de acento / Alertas primarias
* 🟩 `oklch(75% 0.12 140)` — Fondos y auras ambientales secundarias
* 🟦 `oklch(55% 0.18 260)` — Enlaces y elementos interactivos del selector

---

### › Temario

* **Procesos de negocio**: Macroprocesos, procesos estratégicos, operativos, de soporte.
* **Informe de reconocimiento**: estructura de un informe, carta al sponsor.
* **Ingeniería de requerimientos:** Clasificación de requisitos funcionales y no funcionales, técnicas de obtención y análisis.
* **Planificación**: CPM, pert, camino crítico, fecha temprana inicio, fecha tardía fin, margen libre, margen total.
* **Casos de uso:** Estructura de diagramas, flujos de eventos primarios y secundarios, relaciones e interacciones.
* **Historias de usuario:** Formato estándar, criterios de aceptación y metodologías ágiles de desarrollo.


---

### › Detalles técnicos de la interfaz

* **Soporte de color OKLCH:** Control de paletas y temas globales utilizando variables de luminosidad uniforme en CSS, vinculadas con los estilos nativos de DaisyUI.
* **Selector dinámico:** Selector desplegable con 30 temas de diseño individuales e íconos vectoriales SVG únicos por cada esquema.
* **Persistencia:** Almacenamiento automático del tema de preferencia del usuario mediante la API de `localStorage`.
* **Efectos dinámicos (`theme-glow`):** Capas de fondo con auras ambientales luminosas que adaptan sus matices cromáticos según el tema activo.

---

### › Configuración del entorno de desarrollo

Para clonar la web y trabajar en los archivos de forma local:

```bash
git clone https://github.com/leonandres/analisis-de-sistemas.git
cd analisis-de-sistemas
```

#### Control de versiones y automatización (opcional)
El repositorio utiliza Node.js (`v22.18.0`) únicamente para gestionar los lanzamientos técnicos en el historial de cambios mediante `standard-version`.

1. Instalar la dependencia de desarrollo:
   ```bash
   npm install
   ```
2. Generar un nuevo tag de versión y actualizar el archivo de cambios:
   ```bash
   npm run release
   ```
3. Publicar la versión con sus etiquetas en el servidor:
   ```bash
   git push --follow-tags origin main
   ```

---

### › Nomenclatura de confirmaciones (Git commits)

El proyecto sigue la convención internacional de *Conventional commits*:

* `feat(ui):` Incorporación de nuevas funciones, componentes visuales o secciones de estudio.
* `fix(ui):` Reparación de fallas en scripts de control, enlaces rotos o desajustes estéticos.
* `style(ui):` Ajustes aplicados sobre los archivos de CSS (márgenes, tipografías, colores OKLCH).
* `docs(readme):` Modificaciones y ampliaciones en la documentación escrita del repositorio.

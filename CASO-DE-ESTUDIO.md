# Caso de Estudio: Oeste Vuelos

## Problema

Los usuarios que buscan vuelos nacionales dentro de la Argentina suelen encontrarse con plataformas complejas o sobrecargadas de información. El problema identificado fue la necesidad de contar con una landing page ágil, visual e intuitiva que permitiese buscar vuelos de cabotaje de forma sencilla.

* **¿Quién tiene este problema?** Pasajeros que buscan cotizar o encontrar vuelos nacionales de manera rápida.
* **¿Por qué vale la pena resolverlo?** Simplifica la experiencia de búsqueda y mejora la claridad en la visualización de ofertas destacadas y beneficios de compra.

## Contexto

Este proyecto fue desarrollado en equipo (Enzo Nahuel Carnero Riccardi, Eric Alexis Nahuel Bernal) en el marco del **Curso / Taller de Git y GitHub** de la **Universidad Nacional de Hurlingham (UNAHUR)**. El objetivo central no radicó únicamente en la construcción de la página web ficticia, sino en aplicar un flujo de trabajo colaborativo profesional mediante control de versiones.

## Solución

Se diseñó e implementó la landing page para la agencia ficticia **Oeste Vuelos**. La plataforma incluye:

* Un **encabezado** con logo y menú de navegación.
* Un **buscador interactivo de vuelos** (origen, destino y fecha) con validaciones mediante JavaScript.
* Una grilla de **ofertas destacadas** con destinos nacionales.
* Una sección informativa (**¿Por qué elegirnos?**), una de **Promociones vigentes** y un formulario de **Contacto** con validación.
* Un **pie de página** institucional.
* Un **diseño responsive** adaptado a dispositivos móviles.

## Tecnologías

* **HTML5:** Estructuración semántica del sitio web.
* **CSS3:** Estilos visuales, paleta de colores, variables CSS, Flexbox, CSS Grid y media queries para el diseño responsive.
* **JavaScript (Vanilla):** Lógica del buscador, manipulación del DOM y validaciones de formulario.
* **Git:** Control de versiones local.
* **GitHub:** Repositorio remoto, gestión de tareas mediante *Issues*, ramas independientes y revisión de código a través de *Pull Requests*.
* **Markdown:** Documentación del repositorio (`README.md` y `CASO-DE-ESTUDIO.md`).

## Decisiones Técnicas

### Decisión 1: Estrategia de ramificación por funcionalidades (*Feature Branching*)

* **¿Por qué?** Para evitar trabajar directamente sobre la rama `main` y prevenir que cambios incompletos rompieran la versión estable del proyecto.
* **Alternativas consideradas:** Trabajar todos directamente sobre `main` o sobre una única rama compartida.
* **Resultado:** Se crearon ramas dedicadas (`estructura-html`, `estilo-css`, `funcionalidad-principal`, `docs/readme`, `implementacion-caso-de-estudio`, `implementacion-promociones-contacto`), garantizando que `main` se mantuviera siempre estable.

### Decisión 2: Estándar para mensajes de commit (*Conventional Commits*)

* **¿Por qué?** Para mantener un historial claro, uniforme y fácil de auditar por cualquier integrante del equipo.
* **Alternativas consideradas:** Escribir mensajes libres o informales (ej. "cambios", "fix", "listo").
* **Resultado:** Se adoptaron prefijos estandarizados (`feat:`, `style:`, `docs:`, `fix:`), lo que permitió comprender de forma inmediata la evolución del código en los 33 commits del repositorio.

### Decisión 3: Arquitectura CSS con variables y diseño responsivo

* **¿Por qué?** Para unificar la identidad visual de la agencia y asegurar que el buscador se adapte a pantallas móviles sin romper la maquetación.
* **Alternativas consideradas:** Usar un framework externo como Bootstrap o estilos en línea.
* **Resultado:** Se optó por CSS3 puro mediante variables, Flexbox y media queries (adaptando el buscador a una columna en pantallas menores a 768px), manteniendo el proyecto liviano y sin dependencias externas.

## Dificultades y Soluciones

### Dificultad 1: Coordinación de cambios e integración mediante Pull Requests

* **Problema:** Al trabajar simultáneamente en la estructura HTML y en los estilos CSS, surgieron dudas al momento de integrar las ramas hacia `main` sin sobrescribir el trabajo de los compañeros.
* **Cómo se investigó:** Se analizó el flujo de trabajo sugerido en la guía práctica, repasando la secuencia `git pull origin main` antes de publicar la rama.
* **Solución:** Se implementó la regla obligatoria de abrir una *Pull Request* por cada tarea, asignar un revisor del equipo para validar el código y realizar el *merge* únicamente tras la aprobación.

### Dificultad 2: Validaciones del buscador de vuelos en JavaScript

* **Problema:** El buscador permitía inicialmente seleccionar el mismo origen y destino, o ingresar fechas pasadas.
* **Cómo se investigó:** Se testearon distintos escenarios de entrada en el formulario `index.html` e inspeccionó la consola de JavaScript.
* **Solución:** Se agregaron validaciones en `main.js` para exigir que origen y destino sean distintos y que la fecha elegida sea igual o posterior a la fecha actual.

## Resultado

✅ **El proyecto se da por terminado en su estado final.**

La landing page de **Oeste Vuelos** alcanzó un estado funcional, estable y completo respecto a lo planificado: permite realizar búsquedas simuladas de vuelos con resultados dinámicos y precios de referencia, presenta las secciones de **Ofertas destacadas**, **¿Por qué elegirnos?**, **Promociones vigentes** y **Contacto** con formulario validado, y respeta el diseño responsive en dispositivos móviles. Toda la evolución del proyecto quedó documentada y respaldada por 7 *Issues* cerradas y múltiples *Pull Requests* integradas con éxito, con un total de **33 commits** que siguen la convención de mensajes acordada.

Los requisitos de la entrega —estructura HTML, estilos responsive, funcionalidad del buscador, secciones de Promociones y Contacto, documentación y caso de estudio— se encuentran **todos cumplidos**.

## Aprendizajes

1. **Planificación antes del código:** La importancia de descomponer el trabajo en *Issues* e hitos antes de empezar a programar.
2. **Uso profesional de Git y GitHub:** La dinámica de ramas, revisión entre pares (*code review*) y la integración ordenada con *Pull Requests*.
3. **Comunicación en equipo:** La importancia de acordar convenciones de código y comentarios claros en cada commit para facilitar el trabajo colaborativo.

## Mejoras futuras (fuera del alcance de la entrega)

El proyecto se considera **cerrado**; las siguientes ideas quedan registradas como posibles mejoras para una versión posterior:

* Incorporar la selección de la cantidad de pasajeros y clase de vuelo.
* Integrar una simulación de pasarela de pagos para completar la reserva de pasajes.
* Sumar el envío real del formulario de contacto mediante un servicio de correo electrónico.
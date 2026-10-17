# ✈️ Oeste Vuelos — Proyecto Final Curso de Git y GitHub

Sitio web de una agencia ficticia de vuelos nacionales, desarrollado en equipo como **Proyecto Final** del Curso / Taller de Git y GitHub (UNAHUR — Universidad Nacional de Hurlingham).

El objetivo principal no es la complejidad de la página, sino **utilizar Git y GitHub dentro de un proceso de trabajo colaborativo completo**: planificar, trabajar en ramas, registrar cambios con commits, revisar mediante Pull Requests, integrar y documentar.

---

## 📌 Descripción

**Oeste Vuelos** es una landing page para buscar vuelos dentro de la Argentina. Incluye:

- **Barra de navegación** fija con enlaces a Inicio, Destinos, Promociones y Contacto.
- **Sección principal (hero)** con un buscador de vuelos: origen, destino y fecha de salida.
- **Destinos destacados**: tarjetas de Bariloche, Cataratas del Iguazú y Ushuaia con descripción y precio de referencia.
- **Pie de página** con los derechos de la agencia.
- **Diseño responsive**: en pantallas de menos de 768 px el buscador se acomoda en una columna.

## 🎯 Objetivo

- Aplicar el flujo de trabajo con **ramas** para que cada integrante desarrolle una parte del proyecto sin afectar el trabajo de los demás.
- Integrar los cambios a `main` mediante **Pull Requests** revisados por el equipo.
- Practicar la **resolución de conflictos** y la sincronización con el repositorio remoto.
- **Documentar** el proyecto con Markdown.

## 🗂️ Estructura del proyecto

```
proyecto-final-git-github/
│
├── index.html        → Estructura de la página (HTML)
├── README.md         → Documentación del proyecto
├── .gitignore        → Archivos que Git no debe versionar
│
├── css/
│   └── styles.css    → Estilos, paleta de colores y diseño responsive
│
└── js/
    └── main.js       → Funcionalidad de la página (JavaScript)
```

## 🛠️ Tecnologías y herramientas

| Herramienta | Uso |
|---|---|
| HTML5 | Estructura del sitio |
| CSS3 | Estilos (variables CSS, Flexbox, Grid y media queries) |
| JavaScript | Funcionalidad del buscador |
| Git | Control de versiones |
| GitHub | Repositorio remoto, Pull Requests y trabajo colaborativo |
| Visual Studio Code | Editor de código |
| Markdown | Documentación |

## 🚀 Cómo ver el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EnzoNahuel23/proyecto-final-git-github.git
   ```
2. Entrar a la carpeta:
   ```bash
   cd proyecto-final-git-github
   ```
3. Abrir `index.html` en el navegador (o usar la extensión **Live Server** de VS Code).

## 🌿 Organización del trabajo en ramas

Cada parte del proyecto se desarrolla en su propia rama y se integra a `main` mediante un Pull Request.

| Rama | Contenido |
|---|---|
| `main` | Versión estable e integrada del proyecto |
| `estructura-html` | Estructura de la página en `index.html` |
| `estilo-css` | Estilos y diseño en `css/styles.css` |
| `funcionalidad-principal` | Funcionalidad en `js/main.js` |
| `docs/readme` | Documentación del proyecto (este archivo) |

### Flujo de trabajo del equipo

```bash
# 1. Actualizar main con lo último del remoto
git switch main
git pull origin main

# 2. Crear una rama para la tarea
git switch -c nombre-de-la-rama

# 3. Trabajar y registrar los cambios
git add .
git commit -m "tipo: descripción del cambio"

# 4. Traer lo último de main antes de subir (para evitar conflictos)
git pull origin main

# 5. Subir la rama y abrir un Pull Request en GitHub
git push -u origin nombre-de-la-rama
```

### Convención de commits

| Prefijo | Uso |
|---|---|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de un error |
| `style:` | Cambios de estilos o formato |
| `docs:` | Cambios en la documentación |

## 👥 Integrantes

| `Enzo Nahuel Carnero` |
| `Riccardi Eric` | 
| `Alexis Nahuel Bernal` |

## 📈 Estado

🚧 **En desarrollo.**

- [x] Estructura HTML de la página
- [x] Estilos y diseño responsive
- [ ] Funcionalidad del buscador de vuelos (JavaScript)
- [ ] Secciones de Promociones y Contacto
- [x] Documentación del proyecto

## 📄 Licencia

Proyecto con fines educativos, realizado en el marco del Curso / Taller de Git y GitHub de UNAHUR. **Oeste Vuelos** es una empresa ficticia; los precios y destinos son solo de ejemplo.

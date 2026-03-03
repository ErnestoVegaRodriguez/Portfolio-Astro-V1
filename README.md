# Portfolio-Astro-V1

Este proyecto es la base del portafolio personal de **Ernesto Vega Rodríguez** construido con [Astro](https://astro.build). Se trata de un sitio estático enfocado en mostrar experiencia, proyectos y datos de contacto, con soporte multilenguaje (español / inglés) y despliegue en Cloudflare.

---

## 🧱 Tecnologías principales

- **Astro** (framework de construcción para sitios estáticos)
- **Tailwind CSS** con `@astrojs/tailwind` y `@tailwindcss/typography` para estilos responsivos
- **MDX** para contenido enriquecido
- **Astro-compress** para optimizar activos (CSS/JS)
- **Atropos** para efectos interactivos en tarjetas de portafolio
- **Integración con Cloudflare** mediante `@astrojs/cloudflare` (adaptador híbrido)

Otras dependencias:

```
@floating-ui/dom, cssnano, autoprefixer, sharp, etc.
```

---

## 🌐 Internacionalización (i18n)

El sitio soporta dos locales (`en`, `es`) con la configuración de `astro.config.mjs`:

- `defaultLocale: "en"` y enrutamiento con prefijo del idioma.
- Traducciones de todas las páginas principales (`index`, `about`, `experience`, `portfolio`, 404) dentro de `src/pages/en` y `src/pages/es`.
- `switchLang` component para alternar entre idiomas.

---

## 📁 Estructura del proyecto

- `src/components/` – componentes reutilizables (`Header`, `Footer`, `PortfolioCard`, etc.)
- `src/layouts/Layout.astro` – envoltorio general con cabecera y pie.
- `src/pages/` – rutas del sitio y contenido estático.
- `src/i18n/` – utilidades y textos compartidos.
- `src/styles/` – archivos CSS y configuración Tailwind.
- `public/` – activos públicos (imágenes, CV en PDF, etc.).

---

## ⚙️ Uso local

```bash
# instalar dependencias
npm install

# arrancar servidor de desarrollo con recarga en caliente
npm run dev

# compilar para producción
npm run build

# previsualizar el artefacto generado
npm run preview

# generar CSS con tailwind (watch en paralelo si se desea)
npm run css
```

> El script `dev` ejecuta `astro dev` y `css` puede correr en otra terminal para regenerar estilos.

---

## 🚀 Despliegue

Este proyecto se configura para desplegarse en **Cloudflare Pages / Workers** utilizando el adaptador `@astrojs/cloudflare`.

La configuración de `astro.config.mjs` incluye:

```js
adapter: cloudflare({
  mode: 'directory',
  functionPerRoute: true,
  routes: { strategy: 'auto' }
})
```

Asegúrate de conectar el repositorio de GitHub y ajustar variables de entorno si es necesario.

---

## 📝 Contenido del portafolio

- Secciones de **sobre mí**, **experiencia laboral/educativa**, **proyectos destacados** y **contacto**.
- Cada entrada se renderiza mediante componentes como `ExperienceCard` y `PortfolioCard`.
- El CV en PDF (`public/docs/ernesto-vega-rodriguez-cv.pdf`) se enlaza desde la home.

---

## 🛠 Desarrollo y personalización

Puedes modificar o extender:

1. Los datos de contacto y proyectos editando las constantes dentro de las páginas o componentes.
2. Añadiendo nuevas rutas MDX si necesitas blogs o artículos.
3. Cambiando estilos en `tailwind.config.cjs` o `src/styles/input.css`.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 📌 Notas finales

Este repositorio sirve como plantilla base y demostración de un portafolio personal moderno con Astro y Tailwind. ¡Siente libertad de clonarlo, adaptarlo y desplegarlo!

---

*Generado y mantenido por Ernesto Vega Rodríguez.*

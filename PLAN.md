# Plan de rediseño — wlizama.github.io

Dirección elegida: **B · Dev Terminal** ([canvas de diseño](https://claude.ai/artifact/Xc9PA9bLm4XvikqmDpenNc), artboard `TerminalES.dc.html`).

Leyenda: `[x]` implementado · `[ ]` pendiente

## Decisiones tomadas

| Tema | Decisión |
| --- | --- |
| Estética | B · Dev Terminal: fondo `#0D1117`, acento `#FF6188`, IBM Plex Sans (texto) + JetBrains Mono (acentos) |
| Temas | Solo oscuro. La paleta de B es el nuevo tema por defecto; los 7 temas actuales se conservan, sin selector |
| Idiomas | EN + ES. `/` redirige según `navigator.language` → `/en/` o `/es/`; si no es ES/EN (o sin JS) → inglés |
| Contenido ES | `cv.es.json` aparte con la misma estructura (traducción redactada por Claude, revisada por Wilder) |
| Hero | Copy de B: nuevos campos `headline` y `tagline`; el `summary` largo deja de mostrarse |
| Experiencia | 3 roles recientes con `summary` corto (campo nuevo), sin highlights (igual que B); los 3 roles anteriores tras "Ver {n} roles anteriores" |
| Proyectos | Solo los 4 de B visibles; SUNAT SOAP-Client y Web Coast Pacific Group → `isActive: false` |
| Stack | Todas las skills de `cv.json` |
| Educación / Certificaciones | No se muestran (igual que B); los idiomas solo en la tarjeta `perfil.json` |
| Foto / logo | Igual que B: sin avatar, logo de texto `~/wlizama`. El favicon se queda |
| Nav EN | Estilo terminal: `./experience`, `./projects`, `./stack`, `./contact` |
| Fuentes | Self-host con `@fontsource` (reemplaza Roboto Mono) |
| CV PDF | Un `cv_url` por idioma |
| Plan / PRs | `PLAN.md` en la raíz; rama de integración `redesign-main` (desde `master`). Cada fase sale de `redesign-main` y abre su PR contra ella; al terminar el diseño completo, un PR de `redesign-main` a `master` |

## Pendientes de Wilder

- [x] Enlace del PDF del CV en español (`cv.es.json` tiene su propio `cv_url`; el inglés también se actualizó)
- [ ] Revisar la traducción de `cv.es.json`

## Fase 1 — Fundamentos

- [x] Instalar `@fontsource/ibm-plex-sans` (400–700) y `@fontsource-variable/jetbrains-mono`; quitar Roboto Mono
- [x] Nuevo tema `terminal` con la paleta de B como `DEFAULT_THEME` y su `THEME_ACCENT`
- [x] Tokens base: escala tipográfica, espaciado, radios (8 / 12 / 16 / 999px), bordes (`#21262D`, `#30363D`)
- [x] Componente `Container` (max-width 1120px, padding 24px) que reemplaza los 800px duplicados
- [x] Estilos globales: body sans, utilidades `.mono`, `a`/`:focus-visible` según B, `prefers-reduced-motion`
- [x] `pnpm build` pasa

## Fase 2 — Datos e i18n

- [x] `cv.json`: añadir `basics.headline`, `basics.tagline`, `work[].summary`; `isActive: false` en los 2 proyectos ocultos
- [x] `cv.es.json` con la misma estructura, traducido
- [x] `validate-cv.mjs` valida ambos archivos y que tengan las mismas claves
- [x] Alias `@cv-es` en `tsconfig.json` + loader `getCV(lang)` en `src/i18n/ui.ts`
- [x] Diccionario de textos de UI (`src/i18n/ui.ts`): nav, CTAs, títulos de sección, "Ver {n} roles anteriores", etc.
- [x] Rutas `/en/` y `/es/` con `src/pages/[lang]/index.astro` (config `i18n` de Astro, `prefixDefaultLocale`)
- [x] `src/pages/index.astro`: redirect por el idioma principal (`navigator.language`) con fallback a `/en/`; `<noscript>` con enlaces a ambos idiomas; fuera del sitemap y `noindex`
- [x] `<html lang>`, `hreflang` alternates, canonical y meta description por idioma
- [x] Formato de fechas por idioma (`ago 2024 — actualidad` / `Aug 2024 — Present`)
- [x] Anclas de sección por idioma (`#experiencia`, `#proyectos`, `#contacto` en ES)
- [x] Página 404 con textos del diccionario (en inglés: GitHub Pages sirve un único `404.html`)
- [x] `pnpm build` pasa

## Fase 3 — Estructura

- [x] Header de B (sticky): logo `~/wlizama`, nav con `./`, selector EN/ES (`aria-current`), botón "Descargar CV" con el `cv_url` de cada idioma
- [x] Landmark `<main id="main">`; el skip link apunta a él
- [x] Navegación que se acomoda en móvil (los ítems pasan a la siguiente línea, como en B)
- [x] Footer: © año · nombre, ciudad · zona horaria
- [x] Jerarquía de encabezados: un `h1`, `h2` por sección, `h3` por ítem
- [x] Quitar `Logo.astro` (archivo eliminado) y el avatar
- [x] `pnpm build` pasa

## Fase 4 — Secciones

- [x] Hero: `$ whoami`, `h1` con cursor `_` (nuevo `basics.displayName`), headline, tagline, CTAs (Descargar CV como `<a>`, Contactar)
- [x] Tarjeta `perfil.json` generada desde los datos (nuevo `basics.profile` + ubicación e idiomas de `cv.json`)
- [x] `# Experiencia`: timeline sin el hack `top: -1.875em`, marcador `aria-hidden`, fecha mono, `summary`, skills en línea mono (componente `Role`)
- [x] "Ver {n} roles anteriores" despliega los roles 4–6
- [x] `# Proyectos`: filas de B con hover, solo `isActive`, imágenes con `astro:assets` (movidas a `src/assets/projects`), enlace `código ↗`
- [x] `# Stack`: categorías con chips, todas las skills
- [x] `# Contacto`: tarjeta `$ ./contactar --ahora`, email, LinkedIn, GitHub
- [x] Orden: Hero → Experiencia → Proyectos → Stack → Contacto
- [x] Eliminar `about.astro`, `SectionHead.astro`, `src/icons/` y las claves temporales del diccionario
- [x] `pnpm build` pasa

## Fase 5 — Calidad y verificación

- [x] Imagen OG por idioma (`public/images/og-{en,es}.png`, 1200×630, captura del hero) con `og:image:width/height/alt`; se elimina `banner.webp`
- [x] Contraste AA de todos los textos (mínimo 5.62:1: `muted` sobre `surface`)
- [x] Página 404 con el estilo nuevo; los enlaces del header pasan a `/{lang}/#sección` para funcionar desde la 404
- [ ] Lighthouse móvil y escritorio (rendimiento, accesibilidad, SEO) — Lighthouse no está instalado en el entorno
- [x] Revisión visual a 375, 768 y 1280px en ambos idiomas, y 404
- [x] Actualizar las capturas del README (`docs/screenshots/`)

## Ajustes tras revisar contra B

- [x] Quitar el desplegable de highlights de Experiencia (no está en B)
- [x] Marcadores del timeline a 20px con anillo del fondo, como en B (`box-sizing: content-box`)

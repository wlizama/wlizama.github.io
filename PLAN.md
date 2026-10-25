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
| Experiencia | 3 roles recientes con `summary` corto (campo nuevo) + highlights en desplegable; los 3 roles anteriores tras "Ver {n} roles anteriores" |
| Proyectos | Solo los 4 de B visibles; SUNAT SOAP-Client y Web Coast Pacific Group → `isActive: false` |
| Stack | Todas las skills de `cv.json` |
| Educación / Certificaciones | No se muestran (igual que B); los idiomas solo en la tarjeta `perfil.json` |
| Foto / logo | Igual que B: sin avatar, logo de texto `~/wlizama`. El favicon se queda |
| Nav EN | Estilo terminal: `./experience`, `./projects`, `./stack`, `./contact` |
| Fuentes | Self-host con `@fontsource` (reemplaza Roboto Mono) |
| CV PDF | Un `cv_url` por idioma |
| Plan / PRs | `PLAN.md` en la raíz; un PR por fase, cada rama sale de `master` tras mergear la anterior |

## Pendientes de Wilder

- [ ] Enlace del PDF del CV en español (para `cv_url` en `cv.es.json`)
- [ ] Revisar la traducción de `cv.es.json`

## Fase 1 — Fundamentos

- [x] Instalar `@fontsource/ibm-plex-sans` (400–700) y `@fontsource-variable/jetbrains-mono`; quitar Roboto Mono
- [x] Nuevo tema `terminal` con la paleta de B como `DEFAULT_THEME` y su `THEME_ACCENT`
- [x] Tokens base: escala tipográfica, espaciado, radios (8 / 12 / 16 / 999px), bordes (`#21262D`, `#30363D`)
- [x] Componente `Container` (max-width 1120px, padding 24px) que reemplaza los 800px duplicados
- [x] Estilos globales: body sans, utilidades `.mono`, `a`/`:focus-visible` según B, `prefers-reduced-motion`
- [x] `pnpm build` pasa

## Fase 2 — Datos e i18n

- [ ] `cv.json`: añadir `basics.headline`, `basics.tagline`, `work[].summary`; `isActive: false` en los 2 proyectos ocultos
- [ ] `cv.es.json` con la misma estructura, traducido
- [ ] `validate-cv.mjs` valida ambos archivos y que tengan las mismas claves
- [ ] Alias `@cv-es` en `tsconfig.json` (o loader `getCV(lang)`)
- [ ] Diccionario de textos de UI (`src/i18n/ui.ts`): nav, CTAs, títulos de sección, "Ver {n} roles anteriores", etc.
- [ ] Rutas `src/pages/en/index.astro` y `src/pages/es/index.astro` (config `i18n` de Astro)
- [ ] `src/pages/index.astro`: redirect por `navigator.language` con fallback a `/en/`; `<noscript>` con enlaces a ambos idiomas
- [ ] `<html lang>`, `hreflang` alternates, canonical y meta description por idioma
- [ ] Formato de fechas por idioma (`ago 2024 — actualidad` / `Aug 2024 — Present`)
- [ ] `pnpm build` pasa

## Fase 3 — Estructura

- [ ] Header de B: logo `~/wlizama`, nav con `./`, selector EN/ES (`aria-current`), botón "Descargar CV"
- [ ] Navegación que se acomoda en móvil (los ítems pasan a la siguiente línea, como en B)
- [ ] Footer: © año · nombre, ciudad · zona horaria
- [ ] Jerarquía de encabezados: un `h1`, `h2` por sección, `h3` por ítem
- [ ] Quitar el uso de `Logo.astro` y del avatar en el layout
- [ ] `pnpm build` pasa

## Fase 4 — Secciones

- [ ] Hero: `$ whoami`, `h1` con cursor `_`, headline, tagline, CTAs (Descargar CV como `<a>`, Contactar)
- [ ] Tarjeta `perfil.json` generada desde los datos (rol, experiencia, remoto, stack, ubicación, idiomas)
- [ ] `# Experiencia`: timeline sin el hack `top: -1.875em`, marcador `aria-hidden`, fecha mono, `summary`, highlights en `<details>`, skills en línea mono
- [ ] "Ver {n} roles anteriores" despliega los roles 4–6
- [ ] `# Proyectos`: filas de B con hover, solo `isActive`, imágenes con `astro:assets` (movidas a `src/assets`), enlace `código ↗`
- [ ] `# Stack`: categorías con chips, todas las skills
- [ ] `# Contacto`: tarjeta `$ ./contactar --ahora`, email, LinkedIn, GitHub
- [ ] Orden: Hero → Experiencia → Proyectos → Stack → Contacto
- [ ] `pnpm build` pasa

## Fase 5 — Calidad y verificación

- [ ] Imagen OG actualizada
- [ ] Contraste AA de todos los textos
- [ ] Página 404 con el estilo nuevo
- [ ] Lighthouse móvil y escritorio (rendimiento, accesibilidad, SEO)
- [ ] Revisión visual a 375, 768 y 1280px en ambos idiomas
- [ ] Actualizar las capturas del README

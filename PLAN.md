# Plan: pulir perfil LinkedIn + portafolio web

> Objetivo: que el perfil aparezca y convenza en las búsquedas de reclutadores TI para
> **Senior Frontend Engineer (web + React Native), remoto internacional**, con "Full Stack"
> como palabra clave secundaria. LinkedIn, la web y el CV en PDF deben decir exactamente lo mismo.

## 📍 Estado actual (leer primero al retomar)

Rama de trabajo: **`chore/plan-seguimiento`** (solo actualizaciones de este plan; la web ya está en `master` vía PR #18).

⛔ **Regla de merge:** el merge a `master` se hace **al cerrar las fases 1, 2 y 3** (no antes).
🎯 **Alcance:** solo se modifican este repo y LinkedIn. No se tocan otros repos ni proyectos de GitHub.

| Fase | Estado | Pendientes para cerrarla |
|---|---|---|
| 0 · Preparación | 🟢 Cerrada | — |
| 1 · Portafolio web | 🟢 Cerrada | — |
| 2 · Imágenes y CV | 🟢 Cerrada | — |
| 3 · Publicar web | 🟢 Cerrada | — |
| 4 · LinkedIn | 🟢 Cerrada | — |
| 5 · Verificación | 🟡 En curso | 5.3: puntos 3–6 (🧑) + PDF final (🧑→🤖) |
| 6 · Señales | ⬜ No iniciada | — |

**Siguiente paso:** 5.3 → corregir en LinkedIn los 6 puntos de la verificación (ver bitácora 2026-11-02, Fase 5); luego Fase 6.

Leyenda: ✅ hecho · ⏳ pendiente · ⬜ no iniciado · 🟡 fase con pendientes · 🟢 fase cerrada.
Regla: al terminar una sesión, actualizar esta tabla y marcar cada tarea en su fase.

### Bitácora
- **2026-11-02** · Fase 0: textos del Anexo A aprobados ("empieza"); rama creada. Fase 1: `cv.json`/`cv.es.json`, `ui.ts` e imágenes de proyectos actualizados; `pnpm build` en verde (0 errores, `validate-cv` OK). Sin commit todavía (se hace en Fase 3).
- **2026-11-02** · Fase 2: opción **A** elegida. `scripts/generate-pdf.mjs` implementado (HTML → PDF con Chrome headless, `pnpm generate:pdf`); PDFs EN/ES de 2 páginas en `public/cv/`; `cv_url` apunta a ellos; teléfono agregado como `basics.phone` (solo se muestra en el PDF). OG y capturas del README regeneradas. Build en verde. Regla nueva: sin merge a `master` hasta terminar la web.
- **2026-11-02** · Regla de merge precisada: merge al cerrar fases 1–3. Alcance limitado a este repo y LinkedIn → 6.4, 6.5 y 6.6 descartadas.
- **2026-11-02** · Revisión ATS de los PDFs (2.6). Nuevas tecnologías agregadas a `cv.json`/`cv.es.json` (categorías nuevas *Mobile Development* y *Testing*), PDFs regenerados (siguen en 2 páginas), build en verde. Uso confirmado por trabajo:

  | Tecnología | Rimac | DevBase | GNT |
  |---|:-:|:-:|:-:|
  | Jest | ✅ | ✅ | ✅ |
  | React Testing Library | ✅ | ✅ | |
  | Playwright | ✅ | | |
  | App Store / Google Play | ✅ | ✅ | |
  | EAS Build / Submit · EAS Update | ✅ | | |
  | GitHub Actions | ✅ | ✅ | ✅ |
  | Azure DevOps | ✅ | | ✅ |
  | Jenkins | ✅ | ✅ | |
  | TanStack Query · Zustand | ✅ | ✅ | |
  | Context API · Figma | ✅ | ✅ | ✅ |
  | Firebase (FCM, Crashlytics, Auth, Firestore) | ✅ | | |
  | Jira | ✅ | ✅ | |
- **2026-11-02** · Experiencia (web): solo top 6 tecnologías por puesto (2.7). Top 6 → Rimac: React Native, Expo, TypeScript, React.js, Tamagui UI, Jest · DevBase: React.js, TypeScript, React Native, Next.js, Redux, Storybook · GNT: React.js, Node.js, GraphQL, SQL Server, Java, Kendo UI.
- **2026-11-02** · 1.9 y 2.5 revisadas por ti → fases 1 y 2 cerradas. Fase 3 iniciada: commits + push + PR (sin merge hasta tu revisión).
- **2026-11-02** · PR #18 mergeado y desplegado; sitio publicado verificado (3.3) → Fase 3 cerrada. 0.2 hecho.
- **2026-11-02** · 0.3 hecho → Fase 0 cerrada. 4.11: perfil en español en el Anexo C; "Acerca de" en inglés (Anexo A) actualizado con testing, publicación mobile y CI/CD para que coincida con el español.
- **2026-11-02** · Corrección: resumen de `cv.es.json` con redacción neutra ("Con experiencia en entornos ágiles…" en vez de "Cómodo…") → **PR #19** (pendiente de tu merge; luego Claude verifica el sitio). Fase 4 en modo guiado: tú editas LinkedIn y Claude acompaña paso a paso.
- **2026-11-02** · Certificado de microservicios: fecha real **feb 2024** (no 2022) y nombre oficial con "Design". Corregido en web/PDF dentro del **PR #19**. En LinkedIn: Issue date = February 2024. Fase 4: 4.1–4.8 hechos por ti.
- **2026-11-02** · Nuevo certificado: **Legacy Responsive Web Design V8** (freeCodeCamp, 12-feb-2024) agregado a web/PDF en el **PR #19**; el PDF ahora enlaza los certificados que tienen URL.
- **2026-11-02** · PR #19 mergeado y desplegado; PDFs publicados verificados (idénticos a `master`, 2 páginas, resumen neutro, 7 certificados con freeCodeCamp enlazado). 4.9 hecho.
- **2026-11-02** · Fase 4 cerrada: inglés como idioma principal (descubrimos que el perfil original estaba registrado en español; se creó el perfil en inglés con "Make primary language") y perfil en español con el Anexo C.
- **2026-11-02** · Fase 5 (5.1–5.2): PDF de LinkedIn comparado con `cv.json` y el CV. OK: titular, summary, 3 puestos (cargos, empresas, fechas y bullets), sin freelance. Pendientes para 5.3:
  1. ✅ Ubicación: se corrige con **Postal code** (el formulario ya no tiene campo City) e Industry → Software Development (alta).
  2. ✅ Las 7 certificaciones están en el perfil (el PDF solo mostraba 2) (alta).
  3. About: "insurance &amp; healthcare" → usar "insurance and healthcare" (media).
  4. Idiomas como "Inglés/Español" → *English/Spanish* en el perfil en inglés (media).
  5. Top Skills del PDF = React Query, Jenkins, Firebase → confirmar que el About muestre las 5 elegidas (baja).
  6. Email del perfil *wilder.lizama@* vs *wilderlizama@* en web/CV (opcional).
  La copia del PDF de LinkedIn se borró del repo (datos personales).

---

**Responsables**
- 🧑 **Tú**: lo que requiere tu cuenta, tu criterio o acceso que Claude no tiene (LinkedIn, Google Drive, contactos, exámenes).
- 🤖 **Claude**: cambios en el repo, redacción de textos, generación de archivos y verificación.

**Por qué este orden:** la web (`cv.json`) es la fuente de verdad. Primero se fijan y validan los
textos ahí; después se copian a LinkedIn y al CV. Así un reclutador que salte de LinkedIn al
portafolio o al CV nunca ve datos distintos.

---

## Decisiones tomadas

| Tema | Decisión |
|---|---|
| Rol | Senior Frontend Engineer (web + mobile). "Full Stack" solo como keyword secundaria |
| Mercado | Remoto internacional |
| Experiencia total | **11+ años** (desde 01-abr-2015) |
| Experiencia remota | **6+ años** (GNT mar-2020 → abr-2022 + DevBase abr-2022 → jun-2026) |
| GNT Servicios Generales S.A | Full Stack Developer · **01-abr-2015 → 07-abr-2022** · híbrido (remoto desde 2020) |
| Freelance | **Se elimina por completo**: Home Business, 828 Transporte, Coast Pacific (puestos y proyectos) |
| DevBase | Nombre **DevBase (acquired by Fintech Automation)** · cargo **Senior Frontend Engineer** · remoto |
| Rimac | **Frontend Mobile Expert** (sin cambio) · híbrido |
| Inglés | B2 → "Professional working proficiency" |
| Idioma LinkedIn | Principal **inglés**, secundario **español** |
| Open to Work | **No** activar |
| Métricas | No hay → impacto cualitativo, sin inventar cifras |
| Email | **wilderlizama@gmail.com** |
| Nombre | **Wilder Humberto Lizama Garcia** (se mantiene) |
| Flutter | Fuera del titular y aptitudes; queda solo como certificado |

**Certificados**

| Certificado | Emisor | Fecha |
|---|---|---|
| ReactJS, Redux + ES6 | Udemy | 2019 |
| Legacy Responsive Web Design V8 ([verificar](https://www.freecodecamp.org/certification/wilderlizama/responsive-web-design)) | freeCodeCamp | 2024 (12 feb) |
| Design Microservices Architecture with Patterns & Principles | Udemy | 2024 (feb) |
| Curso Básico de Java SE | Platzi | 2018 |
| Backend Development with Python & Django | Platzi | — |
| Linux Server Administration | Platzi | — |
| Native App Development with Flutter | Udemy | — |

---

## Fase 0 · Preparación

| # | Quién | Tarea |
|---|---|---|
| ✅ 0.1 | 🧑 Tú | Revisar y aprobar los textos del **Anexo A** (titular, Acerca de, experiencia). Cualquier ajuste se hace aquí, antes de tocar nada |
| ✅ 0.2 | 🧑 Tú | LinkedIn → **Configuración → Visibilidad → Compartir actualizaciones del perfil con tu red → Desactivar** |
| ✅ 0.3 | 🧑 Tú | Respaldo del perfil actual movido fuera de Descargas |
| ✅ 0.4 | 🤖 Claude | Rama `feat/perfil-senior` creada (desde `chore/quitar-plan`, ver Estado actual) |

**Salida:** textos aprobados y LinkedIn sin notificaciones a la red.

---

## Fase 1 · Portafolio web (fuente de verdad)

| # | Quién | Tarea |
|---|---|---|
| ✅ 1.1 | 🤖 Claude | `cv.json` y `cv.es.json` → **basics**: `occupation`, `headline`, `profile.role` = Senior Frontend Engineer; `profile.experience` = `11+ years` / `11+ años`; `profile.remote` = `6+ years` / `6+ años`; `summary` reescrito (11+/6+, sin la frase suelta de "Remote experience"); email ya era el correcto |
| ✅ 1.2 | 🤖 Claude | **work**: GNT `2015-04-01 → 2022-04-07`, cargo `Full Stack Developer (Hybrid)` + highlights del Anexo A; DevBase → nuevo nombre y `Senior Frontend Engineer (Remote)`; eliminados Home Business, 828 Transporte y Coast Pacific |
| ✅ 1.3 | 🤖 Claude | **languages**: English → `Professional working proficiency (B2)` / `Competencia profesional (B2)` |
| ✅ 1.4 | 🤖 Claude | **certificates**: agregado Java SE (Platzi, 2018) — EN "Java SE Fundamentals", ES "Curso Básico de Java SE"; orden: React/Redux, Microservices, Java SE, Django, Linux, Flutter |
| ✅ 1.5 | 🤖 Claude | **projects**: eliminados `Home Business Portal` y `Web Coast Pacific Group` + sus imágenes |
| ✅ 1.6 | 🤖 Claude | `src/i18n/ui.ts`: `meta.title`, `meta.description` (11+) y `contact.title` ahora dicen "Senior Frontend Engineer" (EN/ES) |
| ✅ 1.7 | 🤖 Claude | Búsqueda de datos antiguos en todo el repo: no queda ninguno (solo el certificado de Flutter, intencional) |
| ✅ 1.8 | 🤖 Claude | `pnpm build` en verde; HTML generado EN/ES verificado (11+, 6+, GNT 2015, DevBase, sin freelance). La revisión visual queda en 1.9 |
| ✅ 1.9 | 🧑 Tú | Revisar la web en local (`pnpm dev` → http://localhost:4321/en y /es) y dar el visto bueno |

**Salida:** web local con los datos nuevos, build en verde.

---

## Fase 2 · Imágenes y CV descargable

| # | Quién | Tarea |
|---|---|---|
| ✅ 2.1 | 🤖 Claude | `public/images/og-en.png` y `og-es.png` regeneradas (1440×756 @2x → 1200×630, Chrome headless sobre `pnpm preview`) |
| ✅ 2.2 | 🤖 Claude | `docs/screenshots/desktop.webp` (1280×800) y `mobile.webp` (375×812, capturada en un iframe de 375px porque Chrome headless no baja de ~500px de ventana) regeneradas |
| ✅ 2.3 | 🧑 Tú → 🤖 Claude | Elegida la **opción A**: `scripts/generate-pdf.mjs` genera `public/cv/Wilder_Lizama_Senior_Frontend_Engineer_CV.pdf` y `..._CV_ES.pdf` desde `cv.json`/`cv.es.json`; `basics.cv_url` → `/cv/...`. Incluye teléfono (`basics.phone`, solo en el PDF). **Cada vez que cambie `cv.json`: correr `pnpm generate:pdf` y commitear los PDFs** |
| ✅ 2.4 | — | No aplica (era solo para la opción B). Opcional: borrar o dejar de compartir los PDFs viejos de Drive y de `~/Downloads`, que aún tienen los datos anteriores |
| ✅ 2.6 | 🤖 Claude | Revisión ATS de los PDFs (texto extraído con pdfminer/pypdf): texto limpio, orden correcto, fuentes incrustadas, enlaces OK. Mejoras aplicadas: nombre completo **Wilder H. Lizama Garcia** en el encabezado; nuevas tecnologías confirmadas por trabajo (testing, publicación mobile, CI/CD, estado, Firebase, Figma, Jira) en Skills, `Technologies` y bullets. El cargo se mantiene con la modalidad entre paréntesis (decisión tuya) |
| ✅ 2.7 | 🤖 Claude | Experiencia en la web menos cargada: `job.skills` ordenado por relevancia en `cv.json`/`cv.es.json` y `Role.astro` muestra solo las **6 primeras** por puesto (la lista completa sigue en Stack, el PDF y LinkedIn). PDFs regenerados con el nuevo orden |
| ✅ 2.5 | 🧑 Tú | Revisar los dos PDFs en `public/cv/` (regenerados) y las imágenes nuevas (`public/images/og-*.png`, `docs/screenshots/`) |

**Salida:** imágenes de vista previa y CV con los datos nuevos.

---

## Fase 3 · Publicar la web

| # | Quién | Tarea |
|---|---|---|
| ✅ 3.1 | 🤖 Claude | 4 commits + push de `feat/perfil-senior` → **PR #18** (https://github.com/wlizama/wlizama.github.io/pull/18). Incluye el commit del PR #17 |
| ✅ 3.2 | 🧑 Tú | PR #18 mergeado el 2026-11-02 (incluye el commit del #17, que también figura como mergeado). Deploy de GitHub Pages OK |
| ✅ 3.3 | 🤖 Claude | Sitio publicado verificado (EN/ES): title y description con Senior + 11+, `profile.json` con 11+/6+, GNT, DevBase Senior, sin freelance ni enlaces a Drive; PDFs e imágenes OG publicados idénticos a los del repo (mismo hash) |

**Salida:** web pública actualizada. Desde aquí LinkedIn puede enlazar al portafolio sin contradicciones.

---

## Fase 4 · LinkedIn (todo lo haces tú; Claude da los textos)

Hazlo en una sola sesión y en este orden: primero lo que afecta a los filtros de Recruiter, después lo visual.

| # | Quién | Tarea |
|---|---|---|
| ✅ 4.1 | 🧑 Tú | **Experiencia**: eliminar Home Business, 828 Transporte y Coast Pacific |
| ✅ 4.2 | 🧑 Tú | **Experiencia → New Transport S.A**: cambiar empresa a **GNT Servicios Generales S.A**, fechas **abr 2015 – abr 2022**, ubicación Lima, modalidad **Híbrido**, descripción del Anexo A |
| ✅ 4.3 | 🧑 Tú | **Experiencia → DevBase**: cargo **Senior Frontend Engineer**, modalidad **Remoto**, descripción del Anexo A |
| ✅ 4.4 | 🧑 Tú | **Experiencia → Rimac**: modalidad **Híbrido**; descripción sin cambios |
| ✅ 4.5 | 🧑 Tú | Vincular aptitudes a cada puesto (listas en el Anexo A) |
| ✅ 4.6 | 🧑 Tú | **Intro**: titular, ubicación **Lima, Lima, Perú**, email `wilderlizama@gmail.com`, sitio web con etiqueta "Portfolio" |
| ✅ 4.7 | 🧑 Tú | **Acerca de**: texto del Anexo A + 5 aptitudes principales |
| ✅ 4.8 | 🧑 Tú | **Aptitudes**: quitar Flutter; agregar las que falten del Anexo B |
| ✅ 4.9 | 🧑 Tú | **Certificaciones**: completar Java SE (Platzi, 2018) y agregar las 4 que faltan |
| ✅ 4.10 | 🧑 Tú | **Destacados**: agregar wlizama.github.io y github.com/wlizama |
| ✅ 4.11 | 🤖 Claude | Perfil en español redactado → **Anexo C** |
| ✅ 4.12 | 🧑 Tú | **Agregar perfil en otro idioma → Español** y pegar los textos de 4.11 |

**Salida:** LinkedIn alineado con la web.

---

## Fase 5 · Verificación cruzada

| # | Quién | Tarea |
|---|---|---|
| ✅ 5.1 | 🧑 Tú | Exportar el nuevo PDF de LinkedIn (**Más → Guardar como PDF**) y pasar la ruta |
| ✅ 5.2 | 🤖 Claude | Comparar LinkedIn vs `cv.json` vs CV PDF: empresas, cargos, fechas, cifras, certificados, email. Reportar diferencias |
| ⏳ 5.3 | 🧑 Tú | Corregir en LinkedIn lo que salga en 5.2 |
| ⬜ 5.4 | 🧑 Tú | Opcional: pedir a un contacto que busque "Senior Frontend Engineer React Native Peru" en LinkedIn y confirme que apareces |

**Salida:** los tres canales consistentes.

---

## Fase 6 · Señales que suben el perfil (semanas siguientes)

| # | Quién | Tarea | Prioridad |
|---|---|---|---|
| ⬜ 6.1 | 🤖 Claude | Redactar mensajes para pedir recomendaciones (qué destacar: RN, librería de componentes, migración a TS) | Alta |
| ⬜ 6.2 | 🧑 Tú | Pedir 2–3 recomendaciones: líder/compañero de Rimac y de DevBase | Alta |
| ⬜ 6.3 | 🧑 Tú | Hacer el **EF SET** (gratis, ~50 min); si da B2+ agregarlo como certificación | Alta |
| ~~6.4~~ | — | ~~Mejorar READMEs de GitHub~~ · **Descartada** (fuera de alcance: no se tocan otros repos) | — |
| ~~6.5~~ | — | ~~Fijar repos en GitHub~~ · **Descartada** (fuera de alcance) | — |
| ~~6.6~~ | — | ~~Publicar `tournament-organizer` / proyecto RN~~ · **Descartada** (fuera de alcance) | — |
| ⬜ 6.7 | 🧑 Tú | Opcional: certificación reciente (React Native, TypeScript o AWS Cloud Practitioner) | Baja |

---

## Anexo A · Textos para LinkedIn (EN, perfil principal)

### Titular
```
Senior Frontend Engineer | React • React Native • TypeScript • Next.js | Web & Mobile Apps | 11+ years | Remote
```
Se quitan `Software developer`, `Systems engineer`, `Desarrollador frontend`, `Flutter` y `Node`, que diluyen el posicionamiento.

### Acerca de
```
Senior Frontend Engineer with 11+ years of experience building web and mobile applications with React, React Native, TypeScript and Next.js, including 6+ years working remotely with distributed international teams.

At Rimac Seguros I build and ship Expo / React Native apps for healthcare and insurance, maintain a Tamagui component library based on Atomic Design, and led the migration from Expo to React Native CLI. Before that, at DevBase (acquired by Fintech Automation), I migrated a nonprofit grantmaking platform from JavaScript to TypeScript, built React Native features for field technicians and maintained a financial PWA.

What I bring:
• Frontend architecture and reusable UI systems (Storybook, Tamagui, Atomic Design)
• Cross-platform mobile development (React Native, Expo, React Native CLI) and App Store / Google Play releases with EAS
• Legacy modernization: desktop to web, JavaScript to TypeScript
• Testing and delivery: Jest, React Testing Library and Playwright; CI/CD with GitHub Actions, Azure DevOps and Jenkins
• API integrations (REST, GraphQL) and PWAs, backed by full-stack experience with Node.js, SQL Server and PostgreSQL
• Cloud exposure on GCP and AWS, and AI-assisted development workflows

Industries: fintech, insurance and healthcare, ERP, nonprofit.
English: professional working proficiency. Based in Lima, Peru (GMT-5).

Stack: React · React Native · Expo · TypeScript · JavaScript · Next.js · Redux · Zustand · TanStack Query · Node.js · GraphQL · Storybook · Tailwind CSS · Jest · Playwright · GCP · AWS
```
**Aptitudes principales (5):** React.js · React Native · TypeScript · Next.js · Front-End Development

### Rimac Seguros y Reaseguros — Frontend Mobile Expert
ago 2024 – actualidad · Lima, Perú · Híbrido. Descripción: los 7 bullets actuales **más estos 3**, después del primero:
```
• Managed App Store and Google Play releases with EAS Build and EAS Submit, and shipped over-the-air updates with EAS Update.
• Integrated Firebase for push notifications (FCM), crash reporting (Crashlytics), authentication and Firestore.
• Wrote unit, component and end-to-end tests with Jest, React Testing Library and Playwright, and worked with CI/CD pipelines on GitHub Actions, Azure DevOps and Jenkins.
```
Aptitudes: React Native · Expo · TypeScript · React.js · Tamagui · Google Cloud Platform · Atomic Design · Scrum · Jest · React Testing Library · Playwright · Firebase · Zustand · TanStack Query · GitHub Actions · Azure DevOps · Jenkins · Figma · Jira

### DevBase (acquired by Fintech Automation) — Senior Frontend Engineer
abr 2022 – jun 2026 · Remoto
```
• Migrated a nonprofit grantmaking platform from JavaScript to TypeScript, improving maintainability and type safety across the frontend architecture.
• Developed and maintained React Native features for a production mobile app used by HVAC field technicians.
• Maintained and enhanced a Progressive Web App (PWA) for a financial platform handling cash and bank account operations through REST API integrations.
• Published React Native app releases to the App Store and Google Play.
• Wrote unit and component tests with Jest and React Testing Library, and worked with CI/CD pipelines on GitHub Actions and Jenkins.
• Built reusable UI component libraries with Storybook and Atomic Design, reducing UI inconsistencies and speeding up frontend development.
• Collaborated with distributed engineering teams in remote agile environments.
```
Aptitudes: React.js · React Native · TypeScript · Next.js · Redux · Storybook · Tailwind CSS · AWS · PostgreSQL · Jest · React Testing Library · Zustand · TanStack Query · GitHub Actions · Jenkins · Figma · Jira

### GNT Servicios Generales S.A — Full Stack Developer
abr 2015 – abr 2022 · Lima, Perú · Híbrido
```
• Led the migration of desktop software into modern web applications using React.js and Kendo UI.
• Developed and maintained ERP systems and enterprise intranet platforms with Material UI, Bootstrap and GraphQL, focused on operational efficiency and business workflows.
• Designed and maintained T-SQL database structures and optimized SQL Server operations.
• Built Gmail API integrations to automate electronic document registration.
• Built background Java services for asynchronous server-side execution.
• Provided server support for IIS and Ubuntu Linux environments.
• Worked remotely with the team from 2020 onwards.
```
Aptitudes: React.js · Node.js · GraphQL · SQL Server · T-SQL · Java · Kendo UI · Material UI · Linux · Jest · GitHub Actions · Azure DevOps · Figma

Resultado en Recruiter: experiencia calculada desde abr 2015, sin huecos (≈ 11 años 7 meses).

---

## Anexo C · Perfil en español (LinkedIn, perfil secundario)

**Dónde:** Perfil → **Agregar perfil en otro idioma** → Español. LinkedIn pide nombre, titular y "Acerca de". Si también te deja traducir la experiencia, usa los textos de abajo.
Los cargos y la empresa se dejan en inglés, igual que en el perfil principal, porque así los buscan los reclutadores.

### Nombre
Wilder Humberto Lizama Garcia

### Titular
```
Senior Frontend Engineer | React • React Native • TypeScript • Next.js | Apps web y móviles | +11 años | Remoto
```

### Acerca de
```
Senior Frontend Engineer con más de 11 años de experiencia construyendo aplicaciones web y móviles con React, React Native, TypeScript y Next.js, incluidos más de 6 años trabajando en remoto con equipos internacionales distribuidos.

En Rimac Seguros desarrollo y publico apps con Expo / React Native para salud y seguros, mantengo una librería de componentes en Tamagui basada en Atomic Design y lideré la migración de Expo a React Native CLI. Antes, en DevBase (acquired by Fintech Automation), migré una plataforma de subvenciones para organizaciones sin fines de lucro de JavaScript a TypeScript, desarrollé funcionalidades en React Native para técnicos de campo y mantuve una PWA financiera.

Lo que aporto:
• Arquitectura frontend y sistemas de UI reutilizables (Storybook, Tamagui, Atomic Design)
• Desarrollo móvil multiplataforma (React Native, Expo, React Native CLI) y publicación en App Store y Google Play con EAS
• Modernización de sistemas legacy: de escritorio a web y de JavaScript a TypeScript
• Testing y entrega continua: Jest, React Testing Library y Playwright; CI/CD con GitHub Actions, Azure DevOps y Jenkins
• Integraciones de APIs (REST, GraphQL) y PWAs, con experiencia full stack en Node.js, SQL Server y PostgreSQL
• Experiencia en la nube con GCP y AWS, y flujos de desarrollo asistidos por IA

Industrias: fintech, seguros y salud, ERP y organizaciones sin fines de lucro.
Inglés: competencia profesional (B2). Ubicación: Lima, Perú (GMT-5).

Stack: React · React Native · Expo · TypeScript · JavaScript · Next.js · Redux · Zustand · TanStack Query · Node.js · GraphQL · Storybook · Tailwind CSS · Jest · Playwright · GCP · AWS
```

### Experiencia (solo si el editor del perfil en español lo permite)

**Rimac Seguros y Reaseguros — Frontend Mobile Expert**
```
• Desarrollé, publiqué y mantuve aplicaciones móviles con Expo para productos de salud y seguros, asegurando alto rendimiento, estabilidad y ciclos de release confiables.
• Gestioné los releases en App Store y Google Play con EAS Build y EAS Submit, y publiqué actualizaciones over-the-air con EAS Update.
• Integré Firebase para notificaciones push (FCM), reporte de errores (Crashlytics), autenticación y Firestore.
• Escribí pruebas unitarias, de componentes y end-to-end con Jest, React Testing Library y Playwright, y trabajé con pipelines de CI/CD en GitHub Actions, Azure DevOps y Jenkins.
• Diseñé y desarrollé una librería de componentes móviles reutilizables con Tamagui siguiendo la metodología Atomic Design, mejorando la consistencia de la UI, la escalabilidad y la reutilización de código en varios proyectos.
• Lideré la migración de aplicaciones móviles de Expo a React Native CLI, adaptando configuraciones nativas, dependencias y procesos de build para soportar capacidades nativas avanzadas y la mantenibilidad a largo plazo.
• Desarrollé una mini app de salud y la integré en la Super App de Rimac Seguros, ofreciendo una experiencia de usuario fluida dentro del ecosistema móvil de la empresa.
• Gestioné y mantuve infraestructura y servicios en Google Cloud Platform (GCP), dando soporte al despliegue, monitoreo y confiabilidad operativa de las aplicaciones.
• Utilicé herramientas de desarrollo con IA para automatizar tareas repetitivas, acelerar la entrega de funcionalidades, mejorar la calidad del código y la productividad del equipo.
• Colaboré con equipos multidisciplinarios en un entorno ágil (Scrum), participando en sprint plannings, code reviews, discusiones técnicas y prácticas de entrega continua.
```

**DevBase (acquired by Fintech Automation) — Senior Frontend Engineer**
```
• Migré una plataforma de subvenciones para organizaciones sin fines de lucro de JavaScript a TypeScript, mejorando la mantenibilidad y la seguridad de tipos en toda la arquitectura frontend.
• Desarrollé y mantuve funcionalidades en React Native para una aplicación móvil en producción usada por técnicos de campo de HVAC.
• Publiqué releases de la app en React Native en App Store y Google Play.
• Escribí pruebas unitarias y de componentes con Jest y React Testing Library, y trabajé con pipelines de CI/CD en GitHub Actions y Jenkins.
• Mantuve y mejoré una Progressive Web Application (PWA) para una plataforma financiera que gestiona operaciones de caja y cuentas bancarias mediante integraciones con APIs.
• Construí librerías de componentes de UI reutilizables con Storybook y Atomic Design, reduciendo inconsistencias de UI y acelerando el desarrollo frontend.
• Integré APIs REST para el procesamiento de transacciones y la comunicación con el backend.
• Colaboré con equipos de ingeniería distribuidos en entornos ágiles remotos.
```

**GNT Servicios Generales S.A — Full Stack Developer**
```
• Lideré la migración de software de escritorio a aplicaciones web modernas con React.js y Kendo UI.
• Desarrollé y mantuve sistemas ERP e intranets corporativas con Material UI, Bootstrap y GraphQL, enfocadas en la eficiencia operativa y los flujos de negocio.
• Diseñé y mantuve estructuras de base de datos en T-SQL y optimicé operaciones en SQL Server.
• Desarrollé integraciones con las APIs de Gmail para automatizar el registro de documentos electrónicos.
• Construí servicios en segundo plano con Java para la ejecución asíncrona en el servidor.
• Brindé soporte de servidores en entornos IIS y Ubuntu Linux.
• Trabajé en remoto con el equipo desde 2020.
```

---

## Anexo B · Aptitudes de LinkedIn

Usar los nombres estándar del catálogo (Recruiter filtra por coincidencia exacta). Orden sugerido:

React.js · React Native · TypeScript · JavaScript · Next.js · Front-End Development · Expo · Redux ·
HTML5 · CSS · Tailwind CSS · Storybook · Atomic Design · Design Systems · Progressive Web Apps (PWA) ·
REST APIs · GraphQL · Node.js · Mobile Application Development · Cross-Platform Development ·
Web Development · Full-Stack Development · Software Architecture · Git · CI/CD ·
Agile Methodologies · Scrum · Google Cloud Platform (GCP) · Amazon Web Services (AWS) ·
PostgreSQL · MySQL · Microsoft SQL Server · Material UI · Kendo UI · Artificial Intelligence (AI) ·
Jest · React Testing Library · Playwright · Zustand · React Query · Firebase · Expo Application Services (EAS) ·
GitHub Actions · Azure DevOps · Jenkins · Figma · Jira

(Las nuevas de la última línea se confirmaron por trabajo el 2026-11-02; ver tabla en la bitácora.)

Quitar: **Flutter** y cualquier aptitud que no puedas defender en una entrevista.

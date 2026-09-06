#!/usr/bin/env node
// Placeholder for a future task: generate a PDF résumé from cv.json that
// reproduces the structure of Wilder_Lizama_Senior_Frontend_Engineer_CV.pdf
// (header/contact, professional summary, core skills by category,
// professional experience, education, certifications & courses).
//
// cv.json already carries every section needed for that layout — this script
// is intentionally not implemented yet; PDF generation was deprioritized in
// favor of the SEO/performance/accessibility work and the cv.json data sync.
//
// When picked up, this should read cv.json (the single source of truth),
// render it through a template matching the reference PDF, and write the
// output next to it (e.g. public/cv.pdf) so about.astro's "Download CV"
// button can link to it directly instead of the current Google Drive link.

console.error('generate:pdf is not implemented yet — tracked as a follow-up task. See cv.json for the data this should render from.');
process.exit(1);

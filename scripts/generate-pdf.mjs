#!/usr/bin/env node
// Generates the downloadable résumé PDFs (EN/ES) from cv.json / cv.es.json,
// the site's single source of truth, so the CV can never drift from the site.
//
// Output (committed, served as static files and linked from basics.cv_url):
//   public/cv/Wilder_Lizama_Senior_Frontend_Engineer_CV.pdf
//   public/cv/Wilder_Lizama_Senior_Frontend_Engineer_CV_ES.pdf
//
// Renders a single-column, ATS-friendly HTML page (real text, standard section
// headings) and prints it with headless Chrome. Set CHROME_PATH if Chrome is not
// in the default macOS location. Run with: pnpm generate:pdf

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(root, 'public', 'cv');
const FONT_DIR = join(root, 'node_modules', '@fontsource', 'ibm-plex-sans', 'files');

const TARGETS = [
	{ lang: 'en', source: 'cv.json', file: 'Wilder_Lizama_Senior_Frontend_Engineer_CV.pdf' },
	{ lang: 'es', source: 'cv.es.json', file: 'Wilder_Lizama_Senior_Frontend_Engineer_CV_ES.pdf' },
];

const LABELS = {
	en: {
		summary: 'Professional Summary',
		skills: 'Core Skills',
		experience: 'Professional Experience',
		education: 'Education',
		certificates: 'Certifications & Courses',
		languages: 'Languages',
		technologies: 'Technologies',
		present: 'Present',
		country: 'Peru',
		remote: 'Remote',
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	es: {
		summary: 'Resumen profesional',
		skills: 'Habilidades principales',
		experience: 'Experiencia profesional',
		education: 'Educación',
		certificates: 'Certificaciones y cursos',
		languages: 'Idiomas',
		technologies: 'Tecnologías',
		present: 'Actualidad',
		country: 'Perú',
		remote: 'Remoto',
		months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
	},
};

const esc = (value) =>
	String(value ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const monthYear = (date, l) => {
	if (!date) return l.present;
	const [year, month] = date.split('-');
	return month ? `${l.months[Number(month) - 1]} ${year}` : year;
};

const range = (start, end, l) => (start ? `${monthYear(start, l)} – ${monthYear(end, l)}` : monthYear(end, l));

const link = (url, text = url.replace(/^https?:\/\//, '')) => `<a href="${esc(/^(https?:|mailto:)/.test(url) ? url : `https://${url}`)}">${esc(text)}</a>`;

function render(cv, lang) {
	const l = LABELS[lang];
	const b = cv.basics;
	const profile = (network) => b.profiles.find((p) => p.network === network);
	const linkedin = profile('LinkedIn');
	const github = profile('GitHub');

	const contact = [
		[`${esc(b.location.city)}, ${l.country} · ${esc(b.location.timezone)} · ${l.remote}`, b.phone && esc(b.phone), link(`mailto:${b.email}`, b.email)],
		[linkedin && link(linkedin.url), github && link(github.url), link(b.url)],
	].map((line) => line.filter(Boolean));

	const work = cv.work
		.map(
			(job) => `
		<article class="job">
			<header>
				<div><h3>${esc(job.position)}</h3><p class="company">${esc(job.name)}</p></div>
				<p class="dates">${range(job.startDate, job.endDate, l)}</p>
			</header>
			<p class="tech"><strong>${l.technologies}:</strong> ${job.skills.map(esc).join(', ')}</p>
			<ul>${job.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
		</article>`,
		)
		.join('');

	const skills = cv.skills
		.map((group) => `<p><strong>${esc(group.category)}:</strong> ${group.items.map(esc).join(', ')}</p>`)
		.join('');

	const education = cv.education
		.map(
			(e) => `<div class="row"><p><strong>${esc(e.studyType)}</strong> – ${esc(e.area)}<br>${esc(e.institution)}</p><p class="dates">${range(e.startDate, e.endDate, l)}</p></div>`,
		)
		.join('');

	const certificates = cv.certificates
		.map((c) => `<li><strong>${esc(c.name)}</strong> – ${esc(c.issuer)}${c.date ? ` (${esc(c.date)})` : ''}</li>`)
		.join('');

	const languages = cv.languages.map((x) => `${esc(x.language)}: ${esc(x.fluency)}`).join(' · ');

	const font = (weight) =>
		`@font-face{font-family:'IBM Plex Sans';font-weight:${weight};src:url('${pathToFileURL(join(FONT_DIR, `ibm-plex-sans-latin-${weight}-normal.woff2`)).href}') format('woff2');}`;

	return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(b.name)} – ${esc(b.profile.role)} – CV</title>
<style>
${font(400)}${font(600)}${font(700)}
@page { size: A4; margin: 14mm 15mm; }
* { box-sizing: border-box; }
body { margin: 0; font-family: 'IBM Plex Sans', Arial, sans-serif; font-size: 9.6pt; line-height: 1.42; color: #1f2328; }
a { color: #1747a6; text-decoration: none; }
h1 { margin: 0; font-size: 22pt; line-height: 1.1; color: #12306e; }
.occupation { margin: 3px 0 6px; font-size: 11pt; font-weight: 600; color: #3d444d; }
.contact { margin: 0; font-size: 9pt; color: #3d444d; }
.contact span + span::before { content: "  |  "; color: #9198a1; white-space: pre; }
h2 { margin: 14px 0 6px; padding-bottom: 3px; border-bottom: 1.2px solid #c9d1d9; font-size: 11pt; letter-spacing: .06em; text-transform: uppercase; color: #1747a6; }
p { margin: 0 0 4px; }
.job { margin-bottom: 10px; }
.job header, .tech { break-after: avoid; }
li, .row { break-inside: avoid; }
.job header, .row { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; }
h3 { margin: 0; font-size: 10.5pt; }
.company { margin: 0; font-weight: 600; color: #3d444d; }
.dates { margin: 0; white-space: nowrap; font-weight: 600; color: #3d444d; }
.tech { margin: 3px 0 2px; font-size: 9pt; color: #3d444d; }
ul { margin: 2px 0 0; padding-left: 16px; }
li { margin-bottom: 2px; }
section { break-inside: auto; }
h2 { break-after: avoid; }
</style>
</head>
<body>
<header>
	<h1>${esc(b.name)}</h1>
	<p class="occupation">${esc(b.occupation)}</p>
	${contact.map((line) => `<p class="contact">${line.map((c) => `<span>${c}</span>`).join('')}</p>`).join('')}
</header>
<section><h2>${l.summary}</h2><p>${esc(b.summary)}</p></section>
<section><h2>${l.skills}</h2>${skills}</section>
<section><h2>${l.experience}</h2>${work}</section>
<section><h2>${l.education}</h2>${education}</section>
<section><h2>${l.certificates}</h2><ul>${certificates}</ul></section>
<section><h2>${l.languages}</h2><p>${languages}</p></section>
</body>
</html>`;
}

function findChrome() {
	const candidates = [
		process.env.CHROME_PATH,
		'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
		'/Applications/Chromium.app/Contents/MacOS/Chromium',
		'/usr/bin/google-chrome',
		'/usr/bin/chromium',
	].filter(Boolean);
	const chrome = candidates.find((path) => existsSync(path));
	if (!chrome) {
		console.error('✖ Chrome not found. Set CHROME_PATH to a Chrome/Chromium binary.');
		process.exit(1);
	}
	return chrome;
}

const chrome = findChrome();
const work = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
mkdirSync(OUT_DIR, { recursive: true });

try {
	for (const { lang, source, file } of TARGETS) {
		const cv = JSON.parse(readFileSync(join(root, source), 'utf-8'));
		const html = join(work, `cv-${lang}.html`);
		const out = join(OUT_DIR, file);
		writeFileSync(html, render(cv, lang));
		execFileSync(
			chrome,
			['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files', `--print-to-pdf=${out}`, pathToFileURL(html).href],
			{ stdio: 'pipe' },
		);
		console.log(`✓ ${lang}: public/cv/${file}`);
	}
} finally {
	rmSync(work, { recursive: true, force: true });
}

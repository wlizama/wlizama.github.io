#!/usr/bin/env node
// Guards cv.json (EN) and cv.es.json (ES) as the site's single source of truth:
// fails the build if required fields are missing, if known placeholder values
// sneak back in, or if the two files drift apart in shape.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const CV_FILES = ['cv.json', 'cv.es.json'];

const readCV = (file) => JSON.parse(readFileSync(fileURLToPath(new URL(`../${file}`, import.meta.url)), 'utf-8'));

const errors = [];

// Exact-value matches: short generic strings that were used as literal
// placeholders (e.g. issuer: "Company"). Checked as a whole trimmed value so
// legitimate prose like "a real estate company" is never flagged.
const EXACT_PLACEHOLDER_VALUES = new Set(['company', 'certificate', 'publication', 'todo']);
// Substring matches: specific enough that they can't appear in real content.
const SUBSTRING_PLACEHOLDER_PATTERNS = [/my address/i, /999 999 999/, /example\.com/i, /lorem ipsum/i];

function checkPlaceholders(value, path) {
	if (typeof value === 'string') {
		const trimmed = value.trim().toLowerCase();
		if (EXACT_PLACEHOLDER_VALUES.has(trimmed)) {
			errors.push(`Placeholder value at ${path}: "${value}"`);
		}
		for (const pattern of SUBSTRING_PLACEHOLDER_PATTERNS) {
			if (pattern.test(value)) {
				errors.push(`Placeholder-looking value at ${path}: "${value}" (matched ${pattern})`);
			}
		}
	} else if (Array.isArray(value)) {
		value.forEach((item, i) => checkPlaceholders(item, `${path}[${i}]`));
	} else if (value && typeof value === 'object') {
		for (const [key, val] of Object.entries(value)) {
			checkPlaceholders(val, path ? `${path}.${key}` : key);
		}
	}
}

function validateCV(cv, file) {
	const required = (condition, message) => {
		if (!condition) errors.push(`${file}: ${message}`);
	};

	required(cv.basics, 'basics is required');
	if (cv.basics) {
		required(cv.basics.name, 'basics.name is required');
		required(cv.basics.occupation, 'basics.occupation is required');
		required(cv.basics.headline, 'basics.headline is required');
		required(cv.basics.tagline, 'basics.tagline is required');
		required(cv.basics.summary, 'basics.summary is required');
		required(cv.basics.cv_url, 'basics.cv_url is required');
		required(/^\S+@\S+\.\S+$/.test(cv.basics.email ?? ''), 'basics.email must look like a valid email');
	}

	required(Array.isArray(cv.work) && cv.work.length > 0, 'work must be a non-empty array');
	for (const [i, job] of (cv.work ?? []).entries()) {
		required(job.name, `work[${i}].name is required`);
		required(job.position, `work[${i}].position is required`);
		required(job.startDate, `work[${i}].startDate is required`);
		required(job.summary, `work[${i}].summary is required`);
	}

	required(Array.isArray(cv.projects) && cv.projects.length > 0, 'projects must be a non-empty array');
	for (const [i, project] of (cv.projects ?? []).entries()) {
		required(project.name, `projects[${i}].name is required`);
		required(project.description, `projects[${i}].description is required`);
		required(Array.isArray(project.tags), `projects[${i}].tags must be an array`);
		required(project.image, `projects[${i}].image is required`);
		required(typeof project.isActive === 'boolean', `projects[${i}].isActive must be a boolean`);
	}

	required(Array.isArray(cv.skills) && cv.skills.length > 0, 'skills must be a non-empty array');
	for (const [i, group] of (cv.skills ?? []).entries()) {
		required(group.category, `skills[${i}].category is required`);
		required(Array.isArray(group.items) && group.items.length > 0, `skills[${i}].items must be a non-empty array`);
	}

	checkPlaceholders(cv, file);
}

// Same keys and array lengths at every level, so the ES file can be read with
// the EN file's type and no section silently disappears in one language.
function checkSameShape(a, b, path) {
	if (Array.isArray(a) !== Array.isArray(b) || typeof a !== typeof b || (a === null) !== (b === null)) {
		errors.push(`Shape mismatch at ${path || '(root)'} between ${CV_FILES.join(' and ')}`);
		return;
	}
	if (Array.isArray(a)) {
		if (a.length !== b.length) errors.push(`Length mismatch at ${path}: ${a.length} vs ${b.length}`);
		a.slice(0, b.length).forEach((item, i) => checkSameShape(item, b[i], `${path}[${i}]`));
	} else if (a && typeof a === 'object') {
		const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
		for (const key of keys) {
			const childPath = path ? `${path}.${key}` : key;
			if (!(key in a) || !(key in b)) errors.push(`Key ${childPath} is missing in ${key in a ? CV_FILES[1] : CV_FILES[0]}`);
			else checkSameShape(a[key], b[key], childPath);
		}
	}
}

const [cvEn, cvEs] = CV_FILES.map(readCV);
validateCV(cvEn, CV_FILES[0]);
validateCV(cvEs, CV_FILES[1]);
checkSameShape(cvEn, cvEs, '');

if (errors.length > 0) {
	console.error(`\n✖ CV validation failed (${errors.length} issue${errors.length > 1 ? 's' : ''}):\n`);
	for (const error of errors) console.error(`  - ${error}`);
	console.error('\ncv.json / cv.es.json are the single source of truth for the site — fix them before building.\n');
	process.exit(1);
}

console.log('✓ cv.json and cv.es.json look valid: required fields present, no known placeholders, same shape.');

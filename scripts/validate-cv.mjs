#!/usr/bin/env node
// Guards cv.json as the site's single source of truth: fails the build if
// required fields are missing or if known placeholder values sneak back in.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const cvPath = fileURLToPath(new URL('../cv.json', import.meta.url));
const cv = JSON.parse(readFileSync(cvPath, 'utf-8'));

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

function required(condition, message) {
	if (!condition) errors.push(message);
}

required(cv.basics, 'basics is required');
if (cv.basics) {
	required(cv.basics.name, 'basics.name is required');
	required(cv.basics.occupation, 'basics.occupation is required');
	required(cv.basics.summary, 'basics.summary is required');
	required(/^\S+@\S+\.\S+$/.test(cv.basics.email ?? ''), 'basics.email must look like a valid email');
}

required(Array.isArray(cv.work) && cv.work.length > 0, 'work must be a non-empty array');
for (const [i, job] of (cv.work ?? []).entries()) {
	required(job.name, `work[${i}].name is required`);
	required(job.position, `work[${i}].position is required`);
	required(job.startDate, `work[${i}].startDate is required`);
}

required(Array.isArray(cv.projects) && cv.projects.length > 0, 'projects must be a non-empty array');
for (const [i, project] of (cv.projects ?? []).entries()) {
	required(project.name, `projects[${i}].name is required`);
	required(project.description, `projects[${i}].description is required`);
	required(Array.isArray(project.tags), `projects[${i}].tags must be an array`);
	required(project.image, `projects[${i}].image is required`);
}

required(Array.isArray(cv.skills) && cv.skills.length > 0, 'skills must be a non-empty array');
for (const [i, group] of (cv.skills ?? []).entries()) {
	required(group.category, `skills[${i}].category is required`);
	required(Array.isArray(group.items) && group.items.length > 0, `skills[${i}].items must be a non-empty array`);
}

checkPlaceholders(cv, '');

if (errors.length > 0) {
	console.error(`\n✖ cv.json validation failed (${errors.length} issue${errors.length > 1 ? 's' : ''}):\n`);
	for (const error of errors) console.error(`  - ${error}`);
	console.error('\ncv.json is the single source of truth for the site — fix it before building.\n');
	process.exit(1);
}

console.log('✓ cv.json looks valid: required fields present, no known placeholders.');

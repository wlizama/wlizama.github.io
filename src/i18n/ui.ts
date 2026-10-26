import cvEn from '@cv';
import cvEs from '@cv-es';

export const languages = {
	en: 'English',
	es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const isLang = (value: unknown): value is Lang =>
	typeof value === 'string' && value in languages;

// cv.json / cv.es.json share one shape (enforced by scripts/validate-cv.mjs),
// so the English file's inferred type describes both.
export type CV = typeof cvEn;

const cvs: Record<Lang, CV> = { en: cvEn, es: cvEs as CV };

export const getCV = (lang: Lang): CV => cvs[lang];

export const ui = {
	en: {
		'meta.title': 'Wilder Lizama | Frontend Engineer',
		'meta.description':
			'Wilder Lizama — Frontend Engineer with 8+ years building scalable web and mobile apps with React, React Native and TypeScript.',
		'skip': 'Skip to content',
		'nav.label': 'Primary',
		'nav.experience': './experience',
		'nav.projects': './projects',
		'nav.stack': './stack',
		'nav.contact': './contact',
		'lang.label': 'Language',
		'cta.cv': 'Download CV',
		'cta.contact': 'Contact',
		'section.about': 'About',
		'section.experience': 'Experience',
		'section.projects': 'Projects',
		'section.stack': 'Stack',
		'about.follow': 'Follow me on:',
		'experience.intro': 'Here is a list of my work experience:',
		'projects.intro': "Here are some of the projects I've worked on.",
		'experience.present': 'Present',
		'experience.at': 'at',
		'experience.skills': 'Skills:',
		'experience.highlights': 'Highlights',
		'experience.older': 'See {n} earlier roles',
		'projects.source': 'code ↗',
		'contact.command': './contact --now',
		'contact.title': 'Looking for a Frontend Engineer for your team?',
		'notFound.title': 'Page not found',
		'notFound.body': "The page you're looking for doesn't exist or was moved.",
		'notFound.back': 'Back to home',
	},
	es: {
		'meta.title': 'Wilder Lizama | Frontend Engineer',
		'meta.description':
			'Wilder Lizama — Frontend Engineer con más de 8 años construyendo apps web y móviles escalables con React, React Native y TypeScript.',
		'skip': 'Saltar al contenido',
		'nav.label': 'Principal',
		'nav.experience': './experiencia',
		'nav.projects': './proyectos',
		'nav.stack': './stack',
		'nav.contact': './contacto',
		'lang.label': 'Idioma',
		'cta.cv': 'Descargar CV',
		'cta.contact': 'Contactar',
		'section.about': 'Sobre mí',
		'section.experience': 'Experiencia',
		'section.projects': 'Proyectos',
		'section.stack': 'Stack',
		'about.follow': 'Sígueme en:',
		'experience.intro': 'Esta es mi experiencia laboral:',
		'projects.intro': 'Estos son algunos de los proyectos en los que he trabajado.',
		'experience.present': 'actualidad',
		'experience.at': 'en',
		'experience.skills': 'Habilidades:',
		'experience.highlights': 'Logros',
		'experience.older': 'Ver {n} roles anteriores',
		'projects.source': 'código ↗',
		'contact.command': './contactar --ahora',
		'contact.title': '¿Buscas un Frontend Engineer para tu equipo?',
		'notFound.title': 'Página no encontrada',
		'notFound.body': 'La página que buscas no existe o fue movida.',
		'notFound.back': 'Volver al inicio',
	},
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
	return (key: UIKey, params?: Record<string, string | number>) => {
		let text: string = ui[lang][key] ?? ui[defaultLang][key];
		for (const [name, value] of Object.entries(params ?? {})) {
			text = text.replace(`{${name}}`, String(value));
		}
		return text;
	};
}

// Section anchors are localized too, so the URL reads naturally (/es/#proyectos).
export const sectionIds = {
	en: { about: 'about', experience: 'experience', projects: 'projects', stack: 'stack', contact: 'contact' },
	es: { about: 'sobre-mi', experience: 'experiencia', projects: 'proyectos', stack: 'stack', contact: 'contacto' },
} as const satisfies Record<Lang, Record<string, string>>;

const dateLocales: Record<Lang, string> = { en: 'en-US', es: 'es-PE' };

/** "2024-08-01" → "Aug 2024" / "ago 2024"; null → "Present" / "actualidad". */
export function formatMonthYear(date: string | null, lang: Lang): string {
	if (!date) return useTranslations(lang)('experience.present');
	const [year, month] = date.split('-').map(Number);
	return new Intl.DateTimeFormat(dateLocales[lang], { month: 'short', year: 'numeric', timeZone: 'UTC' })
		.format(new Date(Date.UTC(year, month - 1, 1)))
		.replace('.', '');
}

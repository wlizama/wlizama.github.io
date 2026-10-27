import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wlizama.github.io',
  integrations: [sitemap({
    // `/` only redirects to /en/ or /es/ (and is noindex), so keep it out.
    filter: (page) => page !== 'https://wlizama.github.io/',
    i18n: {
      defaultLocale: 'en',
      locales: { en: 'en', es: 'es' },
    },
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      // `/` is a hand-written page that picks the language from the browser.
      redirectToDefaultLocale: false,
    },
  },
  devToolbar: {
		enabled: false,
	},
  build: {
		inlineStylesheets: "always",
	},
  image: {
    remotePatterns: [{ protocol: 'https', hostname: '**.githubusercontent.com' }],
  },
});

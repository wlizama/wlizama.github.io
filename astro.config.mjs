import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wlizama.github.io',
  integrations: [sitemap()],
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

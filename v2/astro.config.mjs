import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'always',
	},
	compressHTML: true,
	prefetch: {
		defaultStrategy: 'viewport',
		prefetchAll: true
	},
	vite: {
		plugins: [tailwindcss()],
	},
	output: 'server',
	devToolbar: {
		enabled: false,
	},
	adapter: vercel(),
	// i18n: {
	// 	defaultLocale: 'en',
	// 	locales: ['en', 'es'],
	// 	routing: {
	// 		redirectToDefaultLocale: true,
	// 		prefixDefaultLocale: false
	// 	},
	// 	fallback: {
	// 		es: 'en',
	// 		en: 'en'
	// 	}
	// }
});

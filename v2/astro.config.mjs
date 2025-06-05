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
	output: 'static',
	devToolbar: {
		enabled: false,
	},
	adapter: vercel(),
});

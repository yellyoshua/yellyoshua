import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwind from '@astrojs/tailwind';

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
	output: 'static',
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind()],
	adapter: vercel(),
});

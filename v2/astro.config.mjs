import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'always',
	},
	compressHTML: true,
	prefetch: true,
	output: 'hybrid',
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind()],
	adapter: vercel(),
});

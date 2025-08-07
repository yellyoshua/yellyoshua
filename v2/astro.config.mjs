import {defineConfig, envField} from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://yoshualopez.com',
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

	env: {
		schema: {
			HYGRAPH_API_URL: envField.string({context: 'server', access: 'secret'}),
			HYGRAPH_API_TOKEN: envField.string({context: 'server', access: 'secret'}),
			SPOTIFY_CLIENT_ID: envField.string({context: 'server', access: 'secret'}),
			SPOTIFY_CLIENT_SECRET: envField.string({context: 'server', access: 'secret'}),
			UPSTASH_REDIS_URL: envField.string({context: 'server', access: 'secret'}),
			UPSTASH_REDIS_TOKEN: envField.string({context: 'server', access: 'secret'})
		}
	},

	integrations: [react()]
});
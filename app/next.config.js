module.exports = {
	env: {
		NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI,
		NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
		NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV, // production, preview, or development
		NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA:
			process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
	},
	optimizeFonts: true,
	images: {
		domains: ['cdn.buymeacoffee.com', 'media.graphcms.com'],
	},
	swcMinify: true,
};

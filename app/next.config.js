const nextjs_config = {
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
		domains: [
			'cdn.buymeacoffee.com',
			'buymeacoffee.com',
			'media.graphcms.com',
			'media.graphassets.com',
		],
	},
	swcMinify: true,
};


// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  nextjs_config,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "yellyoshua",
    project: "yoshua-lopez-website",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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

export default nextConfig;

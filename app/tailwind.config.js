const mdx = require('@mdx-js/mdx');

module.exports = {
	purge: {
		content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
		transform: {
			mdx: (content) => mdx.sync(content),
		},
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				arvo: ['Arvo', 'sans-serif'],
				varela: ['Varela Round', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
	corePlugins: {
		invert: true,
	},
};

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				arvo: ['Arvo', 'sans-serif'],
				varela: ['Varela Round', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	corePlugins: {
		invert: true,
		float: false,
	},
};

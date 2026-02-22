import eslintPluginAstro from 'eslint-plugin-astro';
import stylistic from '@stylistic/eslint-plugin'
import {defineConfig} from 'eslint/config';

export default defineConfig([
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	{ignores: ['.vercel/*', '.astro/*', 'node_modules/*', 'dist/*', '.git/*', '.idea/*', '.vscode/*', '.DS_Store']},
	...eslintPluginAstro.configs.recommended,
	{
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			// override/add rules settings here, such as:
			'astro/no-set-html-directive': 'off',
			'astro/no-unused-css-selector': 'warn',
			'astro/semi': 'error',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
			'@stylistic/arrow-parens': ['error', 'always'],
			'@stylistic/comma-spacing': ['error', {'before': false, 'after': true}],
			'@stylistic/jsx-curly-spacing': ['error', {'when': 'never', 'allowMultiline': false}],
			'@stylistic/object-curly-spacing': ['error', 'never'],
			'no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}]
		}
	}
]);
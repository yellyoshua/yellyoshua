const { resolve } = require('path');
// jest jest-dom @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest

module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	roots: ['<rootDir>', 'src/'],
	moduleNameMapper: {
		'^@/app/(.*)$': resolve(__dirname, './src/$1'),
		'^@/pages/(.*)$': resolve(__dirname, './pages/$1'),
	},
	modulePaths: ['<rootDir>', 'src/'],
	moduleDirectories: ['node_modules'],
};

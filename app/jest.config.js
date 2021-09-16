const { resolve } = require('path');
// jest jest-dom @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^@/components/(.*)$': resolve(__dirname, './components/$1'),
    '^@/config/(.*)$': resolve(__dirname, './config/$1'),
    '^@/pages/(.*)$': resolve(__dirname, './pages/$1'),
    '^@/utils/(.*)$': resolve(__dirname, './utils/$1'),
    '^@/hooks/(.*)$': resolve(__dirname, './hooks/$1'),
    '^@/enums/(.*)$': resolve(__dirname, './enums/$1'),
    '^@/interfaces/(.*)$': resolve(__dirname, './interfaces/$1'),
    '^@/flux/(.*)$': resolve(__dirname, './flux/$1'),
    '^@/ui/(.*)$': resolve(__dirname, './ui/$1'),
    '^@/icons/(.*)$': resolve(__dirname, './icons/$1'),
  },
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules']
};

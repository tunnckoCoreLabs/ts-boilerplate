/**
 * Testing and test coverage.
 * Uses `testMatch` to only run the test files.
 */

const path = require('path');

module.exports = {
  rootDir: path.dirname(__dirname),
  displayName: 'test',
  transform: { '.(ts|tsx)': 'babel-jest' },
  testMatch: ['**/test/**/*', '**/?(*.)+(spec|test)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.{js,jsx,ts,tsx}',
    '!**/test/**',
  ],
};

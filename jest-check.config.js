'use strict';

/**
 * Type-checking (over the whole `src`) while developing,
 * if there is type error, it will not run
 * the tests, because we running `jest --watch --bail`
 */
module.exports = {
  rootDir: __dirname,
  displayName: 'tsc',
  runner: 'jest-runner-tsc',
  testMatch: ['**/src/**/*'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

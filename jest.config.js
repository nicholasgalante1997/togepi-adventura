const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    {
      displayName: 'node-server',
      preset: 'ts-jest',
      testEnvironment: 'node',
      moduleDirectories: ["node_modules", "<rootDir>"],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
      testMatch: ['**/*.test.ts']
    },
    {
      displayName: 'react-web',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      moduleDirectories: ["node_modules", "<rootDir>"],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
      testMatch: ['**/*.webtest.ts?(x)']
    }
  ],
};
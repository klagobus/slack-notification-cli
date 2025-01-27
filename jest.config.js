/* eslint-disable no-undef */
// jest.config.js
module.exports = {
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
};
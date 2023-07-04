module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    'src/**/*.js', // Update with the path to your source code files
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
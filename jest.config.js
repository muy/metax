const base = require('./jest.config.base.js');

module.exports = {
    ...base,
    coverageDirectory: "<rootDir>/coverage/",
    projects: ["<rootDir>", "<rootDir>/packages/*/jest.config.js"],
    roots: ["<rootDir>/__tests__"],
}

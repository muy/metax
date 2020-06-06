/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  babel: {
    optionsFile: "babel.config.js"
  },
  coverageAnalysis: "off",
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "dashboard"],
  testRunner: "jest",
  transpilers: ["babel"],
};

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  //extensionsToTreatAsEsm: [".mjs"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|test).mjs"],
  transform: {},
};

export default config;

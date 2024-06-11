// eslint-disable-next-line no-undef
module.exports = {
  // Configuración para pruebas end-to-end (e2e)
  e2e: {
    "tags": "@e2e",
    "dryRun": false,
    "formatOptions": {
      "snippetInterface": "async-await"
    },
    "paths": [
      "./tests/e2e/features/**/*.feature"
    ],
    "require": [
      "./tests/e2e/steps/**/*.ts",
      "./tests/hooks/hooks.ts"
    ],
    "requireModule": [
      "ts-node/register"
    ],
    "format": [],
    "publishQuiet": false,
    "parallel": 1
  },
  // Configuración para pruebas de API
  api: {
    "tags": "@api",
    "dryRun": false,
    "formatOptions": {
      "snippetInterface": "async-await"
    },
    "paths": [
      "./tests/api/features/**/*.feature"
    ],
    "require": [
      "./tests/api/steps/**/*.ts",
      "./tests/hooks/hooks.ts"
    ],
    "requireModule": [
      "ts-node/register"
    ],
    "format": [],
    "publishQuiet": false,
    "parallel": 1
  }
}
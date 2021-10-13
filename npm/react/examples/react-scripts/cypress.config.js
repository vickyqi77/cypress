const { defineConfig } = require('cypress')

// @ts-check

// load file devServer that comes with this plugin
// https://github.com/bahmutov/cypress-react-unit-test#install
const { devServer } = require('@cypress/react/plugins/react-scripts')

module.exports = defineConfig({
  video: false,
  viewportWidth: 500,
  viewportHeight: 800,
  experimentalFetchPolyfill: true,
  component: {
    devServer,
    componentFolder: 'src',
    testFiles: '**/*cy-spec.js',
  },
})
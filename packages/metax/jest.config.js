const base = require('../../jest.config.base.js')
const {displayName, name} = require('./package')

module.exports = {
    ...base,
    displayName,
    name,
    rootDir: '.',
}

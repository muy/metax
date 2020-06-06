import base from '../../rollup.config.base.js'
import pkg from './package.json'

const outputGlobals = {
    gatsby: "gatsby",
    "prop-types": "PropTypes",
    react: "React",
    "react-helmet": "Helmet",
}

const external = Object.keys(outputGlobals)

export default base({
    external,
    file: {
        cjs: pkg.main,
        es: pkg.module,
        umd: pkg.browser
    },
    name: pkg.name,
    globals: outputGlobals,
    useBabelPlugin: true
})

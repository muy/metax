import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";

const input = 'lib/index.js'

export default ({external, file, globals, name, useBabelPlugin}) => {
    const commonJSOptions = {
        exclude: "lib/**",
    }
    const babelPluginOptions = {
        babelHelpers: 'bundled',
        exclude: /node_modules/,
    }
    const umdOutput = {
        input,
        external,
        output: {
            file: file.umd,
            format: 'umd',
            globals,
            name
        },
        plugins: [nodeResolve(), json(), useBabelPlugin && babel(babelPluginOptions)]
    };

    return [
        {
            input,
            external,
            plugins: [nodeResolve(), commonjs(commonJSOptions), json(), useBabelPlugin && babel(babelPluginOptions)],
            output: [
                {
                    file: file.cjs,
                    format: 'cjs'
                },
                {
                    file: file.es,
                    format: 'es'
                }
            ]
        },
        umdOutput
    ]

}

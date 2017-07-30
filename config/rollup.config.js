import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const packageJSON = require('../package.json');

export default {
    entry: 'src/' + packageJSON.name + '.js',
    format: 'umd',
    moduleName: "ajax",
    plugins: [nodeResolve(),
        convertCJS(),
                 babel({
                presets: [
                    ['es2015', {
                        modules: false
                    }]
                ],
                plugins: ['external-helpers']
            })
	],
    dest: 'dist/' + packageJSON.name + '.js'
};
import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
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
            }),
		uglify()
	],
    dest: 'dist/' + packageJSON.name + '.min.js'
};
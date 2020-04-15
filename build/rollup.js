/**@base rollup config基础配置*/
const babel = require("rollup-plugin-babel")
const resolve = require("rollup-plugin-node-resolve")
const json = require("rollup-plugin-json")
const commonjs = require("rollup-plugin-commonjs")

exports = module.exports = {
    input: 'index.js',
    plugins: [
        resolve({
            jsnext: true, // 该属性是指定将Node包转换为ES2015模块
            // main 和 browser 属性将使插件决定将那些文件应用到bundle中
            main: true, // Default: true 
            browser: true // Default: false
        }),
        commonjs({}),
        json(),
        babel({
            exclude: 'node_modules/**', // 排除node_modules 下的文件
            runtimeHelpers: true
        }),
    ],
    // output: [{
    //     file: 'dist/index.js',
    //     name: 'messRouter',
    //     format: 'umd'
    // }, {
    //     file: 'dist/index.es.js',
    //     format: 'es'
    // }, {
    //     file: 'dist/index.amd.js',
    //     format: 'amd'
    // }, {
    //     file: 'dist/index.cjs.js',
    //     format: 'cjs'
    // }]
    output: {
        file: 'dist/index.es.js',
        format: 'es'
    }
};
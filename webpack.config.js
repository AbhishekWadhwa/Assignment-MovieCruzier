const path = require('path');
let HTML_WEBPACKPLUGIN = require('html-webpack-plugin');

module.exports = {
    entry: './js/container.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        
        
    },
    module: {
        rules: [{
            test: '/\.js$/',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }]
    },
    plugins: [
        new HTML_WEBPACKPLUGIN({
            template: './indexMovie.html'
        })
    ]
};
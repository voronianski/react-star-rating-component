'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
    'react-star-rating-component.min.js' :
    'react-star-rating-component.js';

if (env === 'production') {
    pluginsList.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        })
    );
}

const config = {
    entry: path.join(__dirname, 'src/StarRatingComponent.jsx'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: outputFileName,
        library: 'ReactStarRatingComponent',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    externals: webpackUMDExternal({
        'react': 'React'
    }),

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: pluginsList,

    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loaders: ['eslint'],
            exclude: /node_modules/
        }],

        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    }
};

module.exports = config;

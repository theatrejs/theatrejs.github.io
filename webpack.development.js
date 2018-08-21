const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {

    'plugins': [

        new webpack.SourceMapDevToolPlugin(),
        new UglifyJSPlugin({

            'sourceMap': true
        })
    ]
});

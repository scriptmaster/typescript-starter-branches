var webpack = require('webpack');

var config = require('webpack.config.js');

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({minimize: true})
);

delete config.watch;
delete config.devServer;

module.exports = config;

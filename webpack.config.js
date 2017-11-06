var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        'browser': './web/browser.ts'
    },
    output: {
        filename: './public/[name].js'
    },

    plugins: [
        new NpmInstallPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3031,
            server: { baseDir: ['public'] }
        })
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite'
        }
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};
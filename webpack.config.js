var webpack = require('webpack');

module.exports = {
    watch: true,

    entry: {
        'browser': [
            './web/browser'
        ]
    },
    output: {
        filename: './public/[name].js'
    },

    // webpack-dev-server sucks, Use lite-server and watch mode of webpack
    devServer: {
        contentBase: './public'
    },

    // devtool: 'eval', // Slower build times

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })

        // Does not work with devServer :-S
        // , new webpack.optimize.UglifyJsPlugin({minimize: true})

        // Don't do this
        // , new webpack.HotModuleReplacementPlugin() // No need of this head-ache in react apps

    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            // 'react': 'react-lite',
            // 'react-dom': 'react-lite'
        }
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: ['awesome-typescript-loader']
                // , include: __dirname + '/react', // Adding include: imrpoved the performance of react-loader
                , exclude: /(node_modules|bower_components)/ }
        ]
    }
};

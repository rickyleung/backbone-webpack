var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        app: path.join(__dirname, 'app/main'),
        vendor: ['jquery', 'backbone', 'biz-ui']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        chunkFilename: '[name].js',
        publicPath: '/dist/',
        jsonpFunction: 'ricky'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.html$/,
                loader: 'mustache'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        // https://github.com/webpack/webpack/issues/1315
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'manifest.js',
            chunks: ['vendor']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            bizui: 'biz-ui',
            Backbone: 'backbone'
        }),
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;

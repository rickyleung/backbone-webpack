var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    AssetsPlugin = require('assets-webpack-plugin');

var config = {
    entry: {
        app: path.join(__dirname, 'app/main'),
        vendor: ['jquery', 'backbone', 'biz-ui']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/public/',
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
            filename: 'vendor.[chunkhash].js'
        }),
        // https://github.com/webpack/webpack/issues/1315
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'manifest.[chunkhash].js',
            chunks: ['vendor']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            bizui: 'biz-ui',
            Backbone: 'backbone'
        }),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new HtmlWebpackPlugin({
            filename: '../index.jsp',
            template: 'asset/tpl/index.html'
        }),
        new AssetsPlugin({
            prettyPrint: true
        })
    ]
};

module.exports = config;
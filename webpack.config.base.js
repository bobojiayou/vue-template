
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const config = {
    entry: {
        'script/main': ['./src/main.js', 'event-source-polyfill', 'webpack-hot-middleware/client'],
        'script/vendor': ['jquery', 'vue', 'vue-router']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
        path: `${__dirname}/dist`
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
            exclude: /node_modules/
        },
            {
                test: /\.css/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!`
            },
            {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!sass-loader`
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.png|jpg|gif$/,
                loader: 'file?name=style/image/[name]-[hash:base64:5].[ext]'
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }]
    },
    vue: {
        postcss: [
            require('autoprefixer')({
                browsers: ['last 100 versions']
            })
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.jsx'],
        alias: {
            vue: 'vue/dist/vue.js',
            store: path.resolve(__dirname,'./src/store/'),
            bootstrap: 'bootstrap/dist/css/bootstrap.css'
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CommonsChunkPlugin({
            name: ['script/vendor'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin("style/css/[name].css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            favicon: 'favicon.ico'
        })
    ]
}

module.exports = config;
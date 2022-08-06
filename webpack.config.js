const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    /* Настраиваем среду выполнения через переменную окружения или параметр запуска приложения */
    mode: 'development',
    entry: {
        common: './src/index.js',
        lib: './src/stat.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: [
            '.js'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.tmpl.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png)$/,
                /* в webpack 5 это встроенный модуль, https://webpack.js.org/guides/asset-modules/ */
                type: 'asset/resource'
            },
            {
                test: /\.xml$/,
                loader: 'xml-loader'
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader',
            }
        ]
    },
    devServer: {
        port: 3333
    }
}
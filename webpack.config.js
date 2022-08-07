const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin');


let isDev = process.env.NODE_ENV === 'development';
let isProd = !isDev;

console.log(`–––> development mode: ${isDev}\n`);


module.exports = {
    /* Настраиваем среду выполнения через переменную окружения или параметр запуска приложения */
    mode: 'development',
    entry: {
        common: './src/index.jsx',
        lib: './src/stat.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build')
    },
    devtool: isDev && 'source-map',
    optimization: getOptimization(),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: [
            '.js', '.jsx', '.ts', '.tsx'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon-32x32.png'),
                    to: path.resolve(__dirname, 'build')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.tmpl.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        isDev && new EslintWebpackPlugin(
            {
                extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx']
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    /* extract styles to separate .css file */
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    /* import .css as JS object at import */
                    'css-loader',
                    /* .styl -> .css */
                    'stylus-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: getJsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: getBabelOptions(
                        '@babel/preset-typescript'
                    )
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: getBabelOptions(
                        '@babel/preset-react'
                    )
                }
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
        port: 3333,
        hot: true,
        /* для статики отдельно используем Live reload */
        watchFiles: [
            'src/**/*.html'
        ],
    }
}

function filename(ext) {
    return `[name]${isProd ? '.[contenthash]' : ''}.${ext}`
}

function getJsLoaders() {
    return [
        {
            loader: 'babel-loader',
            options: getBabelOptions()
        },
    ];
}

function getOptimization() {
    let config = {
        /* важно для работы HMR: что бы рантайм и кеш был один иначе HMR упадет с ошибкой при патче */
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        },
    };

    if (isProd) {
        config.minimize = true;
        config.minimizer = [
            '...',
            new CssMinimizerWebpackPlugin(),
            /* в Webpack 5 идет из коробки, но все еще нужно выкачиать для доп. настройки */
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

function getBabelOptions(...presets) {
    return {
        presets: [
            '@babel/preset-env',
            ...presets
        ]
    };
}
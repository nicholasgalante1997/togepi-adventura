const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { EnvironmentPlugin } = webpack;

module.exports = {
    mode: 'development',
    entry: path.resolve(process.cwd(), 'src', 'web', 'dev', 'bootstrap.tsx'),
    devServer: {
        port: 3001,
        https: false,
        historyApiFallback: {
            index: 'index.html'
        },
        open: true,
        allowedHosts: 'all',
        static: ['assets']
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new EnvironmentPlugin({ ...process.env }),
      new HtmlWebpackPlugin({
        template: path.resolve(process.cwd(), 'src', 'web', 'dev', 'dev.html'),
        filename: 'index.html'
      })
    ],
};
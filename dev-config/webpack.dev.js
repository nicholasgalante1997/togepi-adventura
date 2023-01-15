const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const EnvironmentPlugin = webpack.EnvironmentPlugin;

require('dotenv').config();

module.exports = {
    entry: {
        devApp: path.resolve(process.cwd(), 'src', 'web', 'dev-bootstrap.tsx'),
    },
    mode: 'development',
    devServer: {
        port: 4040,
        open: true,
        hot: true,
        https: false,
        historyApiFallback: {
            index: 'index.html'
        }
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
        new HtmlWebpackPlugin({
            template: './html/dev.template.html',
        }),
        new EnvironmentPlugin({ ...process.env })
    ],
};
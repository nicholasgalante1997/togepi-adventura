const path = require('path');
const webpack = require('webpack');

const { EnvironmentPlugin } = webpack;

module.exports = {
    mode: 'production',
    entry: {
        landingPage: path.resolve(process.cwd(), 'src', 'web', 'hydrate-mounts', 'landing-page.tsx')
    },
    output: {
        clean: true,
        path: path.resolve(process.cwd(), 'build', 'static'),
        filename: '[name].bundle.js'
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
    plugins: [new EnvironmentPlugin({ ...process.env })],
};
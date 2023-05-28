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
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: {
            "@web/components": path.resolve(process.cwd(), "src", "web", "components"),
            "@web/pages": path.resolve(process.cwd(), "src", "web", "pages"),
            "@web/contexts": path.resolve(process.cwd(), "src", "web", "contexts"),
            "@web/react-query/hooks": path.resolve(process.cwd(), "src", "web", "react-query-hooks"),
            "@web/styles": path.resolve(process.cwd(), "src", "web", "styles"),
            "@web/utils": path.resolve(process.cwd(), "src", "web", "utils"),
            "@web/hooks": path.resolve(process.cwd(), "src", "web", "hooks"), 
            "@gql/types$": path.resolve(process.cwd(), "src", "__generated__", "graphql.ts"),
            "@server/middleware": path.resolve(process.cwd(), "src", "middleware"),
            "@server/react-query/server": path.resolve(process.cwd(), "src", "react-query-server"),
            "@server/routes": path.resolve(process.cwd(), "src", "route-handlers"),
            "@server/services": path.resolve(process.cwd(), "src", "services"),
            "@server/types": path.resolve(process.cwd(), "src", "types"),
            "@server/utils": path.resolve(process.cwd(), "src", "utils"),
            handlebars: path.resolve(process.cwd(), 'node_modules', 'handlebars/dist/handlebars.min.js'),
        }
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
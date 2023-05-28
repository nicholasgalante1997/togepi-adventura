const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const BundleStatsWebpackPlugin = require('bundle-stats-webpack-plugin').BundleStatsWebpackPlugin;
const { EnvironmentPlugin } = webpack;

dotenv.config();

module.exports = {
    entry: path.resolve(process.cwd(), 'src', 'index.ts'),
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
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
        }
      },
    output: {
        path: path.resolve(process.cwd(), 'build'),
        filename: 'index.js'
    },
    target: 'node',
    node: {
        global: false,
    },
    plugins: [new EnvironmentPlugin({ ...process.env }), new BundleStatsWebpackPlugin({ outDir: 'stats/webpack/server'})],
};
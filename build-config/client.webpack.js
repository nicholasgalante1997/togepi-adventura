const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');
const BundleStatsWebpackPlugin = require('bundle-stats-webpack-plugin').BundleStatsWebpackPlugin;
const { EnvironmentPlugin } = webpack;

dotenv.config();

function titleCase(
    str,
    delimiter
  ) {
    if (Array.isArray(str)) {
      return str.reduce(
        (a, ns) => a + delimiter + ns.slice(0).toUpperCase() + ns.slice(1),
        ''
      );
    } else {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
  }

function camelCase(strArr) {
    return strArr.reduce((a, ns) => {
      if (strArr.indexOf(ns) === 0) {
        return a + ns.toLowerCase();
      } else {
        return a + titleCase(ns);
      }
    }, '');
  }

function cleanFilename(filename) {
    const fileNameDirty = filename.split('.')[0];
    if (!fileNameDirty) {
        throw new Error('Could not parse filename: ' + filename);
    }
    return camelCase(fileNameDirty.split('-'));
}

function getEntryObject() {
  /** Load pages from /hydrate-mounts directory */
    const dirContents = fs.readdirSync(path.resolve(process.cwd(), 'src', 'web', 'hydrate-mounts'), { encoding: 'utf-8' });
    if (dirContents.length < 1) {
        throw new Error('Could not read "hydrate-mounts" directory.')
    }

    /** Map files to entry objects */
    let entryObject = {};
    
    for (const file of dirContents) {
      entryObject[cleanFilename(file)] =  path.resolve(process.cwd(), 'src', 'web', 'hydrate-mounts', file);
    }

    return entryObject;
}

module.exports = {
    mode: 'production',
    entry: getEntryObject(),
    target: ['web', 'es2017'],
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
      new BundleStatsWebpackPlugin({ outDir: 'stats/webpack/client/bundles'})
    ],
};

/**
 * SECTION Related Links
 * https://webpack.js.org/guides/code-splitting/#dynamic-imports (Chunking output for optimization)
 * https://webpack.js.org/configuration/entry-context/#naming (Chunking shared deps in entry object)
 * https://web.dev/publish-modern-javascript/?utm_source=lighthouse&utm_medium=devtools
 */
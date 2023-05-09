const path = require('path');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      "@web/components": path.resolve(process.cwd(), "src", "web", "components"),
      "@web/pages": path.resolve(process.cwd(), "src", "web", "pages"),
      "@web/contexts": path.resolve(process.cwd(), "src", "web", "contexts"),
      "@web/react-query/hooks": path.resolve(process.cwd(), "src", "web", "react-query-hooks"),
      "@web/styles": path.resolve(process.cwd(), "src", "web", "styles"),
      "@web/utils": path.resolve(process.cwd(), "src", "web", "utils"),
      "@gql/types$": path.resolve(process.cwd(), "src", "__generated__", "graphql.ts"),
      "@server/middleware": path.resolve(process.cwd(), "src", "middleware"),
      "@server/react-query/server": path.resolve(process.cwd(), "src", "react-query-server"),
      "@server/routes": path.resolve(process.cwd(), "src", "route-handlers"),
      "@server/services": path.resolve(process.cwd(), "src", "services"),
      "@server/types": path.resolve(process.cwd(), "src", "types"),
      "@server/utils": path.resolve(process.cwd(), "src", "utils"),
      handlebars: path.resolve(process.cwd(), 'node_modules', 'handlebars/dist/handlebars.min.js'),
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              ['react-app', { flow: false, typescript: true }],
              require.resolve('@babel/preset-typescript'),
            ],
          },
        },
      ],
    });
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /node_modules\/(?!@your-org)/,
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

export default config; 
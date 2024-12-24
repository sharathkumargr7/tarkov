import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    return {
      ...config,
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName: '[name]__[local]--[hash:base64:5]',
        },
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./src/styles/variables.scss";`,
          },
        },
      },
    };
  },
};

export default config; 
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import path from "path";
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@icons": path.resolve(__dirname, "src/assets/icons"),
        "@ui-kit": path.resolve(__dirname, "src/components/ui-kit"),
        "@blocks": path.resolve(__dirname, "src/components/blocks"),
        "@mocks": path.resolve(__dirname, "src/mocks"),
        "@style-fragments": path.resolve(__dirname, "src/style-fragments"),
        "@styled-tags": path.resolve(__dirname, "src/styled-tags"),
        "@utils": path.resolve(__dirname, "src/utils"),
      };
    }
    return config;
  },
};
export default config;

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "@storybook/addon-cssresources",
  ],
  // refs: {
  //   consumerUi: {
  //     title: "Consumer UI",
  //     url: "https://5eab4f5d1a0d650022a919d6-bckvdgwpzr.chromatic.com/",
  //   },
  // },
};

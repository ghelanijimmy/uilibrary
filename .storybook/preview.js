import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme/theme";
import LibraryProvider from "../src/store/Context";
import { withCssResources } from "@storybook/addon-cssresources";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  cssresources: [
    {
      id: "default",
      code: `
        <style>
          body {
            background-color: #ededed
          }
        </style>
      `,
      picked: false,
      hideCode: false,
    },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    theme: themes.light,
  },
};

export const decorators = [
  withCssResources,
  (Story) => (
    <LibraryProvider>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </LibraryProvider>
  ),
];

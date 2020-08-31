import React from "react";
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import {theme} from "../src/styles/theme/theme";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [
  withInfo,
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
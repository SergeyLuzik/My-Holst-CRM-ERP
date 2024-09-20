import React from "react";
import { GlobalStyle } from "../src/components/App/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/themes/light";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

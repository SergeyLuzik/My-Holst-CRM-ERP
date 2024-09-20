import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/themes/light";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
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

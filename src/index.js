import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);

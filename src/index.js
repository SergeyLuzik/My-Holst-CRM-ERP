import { createRoot } from "react-dom/client";

import App from "./components/App/App.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);

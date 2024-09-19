import { createGlobalStyle } from "styled-components";
import Nunito from "../../assets/fonts/Nunito-ExtraLight.woff2";
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Nunito";
  src: url(${Nunito})
    format("woff2-variations");
}
body {
  font-family: "Nunito", "Arial", sans-serif;
}
input,
textarea,
select,
button {
  font: inherit;
}
`;

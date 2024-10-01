import styled, { createGlobalStyle } from "styled-components";
import Nunito from "../../assets/fonts/Nunito-VariableFont_wght.woff2";
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Nunito";
  src: url(${Nunito})
    format("woff2-variations");
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Nunito", "Arial", sans-serif;
  margin: 0;


}

input,
textarea,
select,
button {
  font: inherit;
}
`;

export const App = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 100%;
  gap: ${({ theme }) => theme.spacings.l};
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacings.l};

  background-color: ${({ theme }) => theme.colors.extraLiteMain};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xl};
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

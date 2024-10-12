import styled, { createGlobalStyle } from "styled-components";
import Nunito from "../../assets/fonts/Nunito-VariableFont_wght.woff2";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Nunito";
  src: url(${Nunito})
    format("woff2-variations");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  margin: 0;


}

img,
picture {
  /*добавляет picture для работы стилей с picture, и в браузерах без picture*/
  display: block;
  max-width: 100%;
  border-radius: inherit; /* для работы border-radius при picture*/
}

input,
textarea,
select,
button {  
  font: inherit;
  color: inherit;
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
  display: grid;
  gap: ${({ theme }) => theme.spacings.xl};
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Table = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
`;

import React from "react";
import { GlobalStyle } from "./styles";

import * as S from "./styles";
import { Menu } from "../blocks/Menu/Menu";
import { SearchOrderButton } from "../ui/SearchOrderButton/SearchOrderButton";
import { AdditionalControls } from "../blocks/AdditionalControls/AdditionalControls";
import { DaysRange } from "../blocks/DaysRange/DaysRange";
import { Orders } from "../blocks/Orders/Orders";

export const App = () => (
  <S.App>
    <GlobalStyle />
    <Menu />
    <S.Content>
      <S.HeaderButtons>
        <SearchOrderButton />
        <AdditionalControls />
      </S.HeaderButtons>
      <DaysRange />
      <Orders />
    </S.Content>
  </S.App>
);

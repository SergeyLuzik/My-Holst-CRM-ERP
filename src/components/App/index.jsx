import React from "react";
import { GlobalStyle } from "./styles";

import * as S from "./styles";
import { Menu } from "../blocks/Menu";
import { SearchOrderButton } from "../ui/SearchOrderButton";
import { AdditionalControls } from "../blocks/AdditionalControls";
import { DaysRange } from "../blocks/DaysRange";
import { Orders } from "../blocks/Orders";
import { ColumnHeaders } from "../blocks/ColumnHeaders";

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
      <S.Table>
        <ColumnHeaders />
        <Orders />
      </S.Table>
    </S.Content>
  </S.App>
);

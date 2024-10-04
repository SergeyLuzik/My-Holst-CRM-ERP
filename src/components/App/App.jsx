import React from "react";
import { GlobalStyle } from "./styles";

import * as S from "./styles";
import { Menu } from "../blocks/Menu/Menu";
import { SearchOrderButton } from "../ui/SearchOrderButton/SearchOrderButton";
import { AdditionalControls } from "../blocks/AdditionalControls/AdditionalControls";
import { DaysRange } from "../blocks/DaysRange/DaysRange";
import { Orders } from "../blocks/Orders/Orders";
import { ColumnHeaders } from "../blocks/ColumnHeaders/ColumnHeaders";
import SelectApp from "../CustomSelect/SelectApp";

export const App = () => <SelectApp />;

/*
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
 */

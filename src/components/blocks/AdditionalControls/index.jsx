import React from "react";

import * as S from "./styles";
import { FilterButton } from "../../ui/FilterButton";
import { YearSelect } from "../../ui/YearSelect";

export const AdditionalControls = () => (
  <S.AdditionalControls>
    <FilterButton />
    <S.DayButton $type="selected">Сегодня</S.DayButton>
    <S.DayButton>Завтра</S.DayButton>
    <YearSelect />
  </S.AdditionalControls>
);

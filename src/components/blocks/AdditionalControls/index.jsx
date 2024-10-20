import React from "react";

import * as S from "./styles";
import { FilterButton } from "../../ui-kit/FilterButton";
import { YearSelect } from "../../ui-kit/YearSelect";

export const AdditionalControls = () => (
  <S.AdditionalControls>
    <FilterButton />
    <S.DayButton $type="selected">Сегодня</S.DayButton>
    <S.DayButton>Завтра</S.DayButton>
    <YearSelect />
  </S.AdditionalControls>
);

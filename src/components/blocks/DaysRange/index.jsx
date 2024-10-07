import React from "react";
import * as S from "./styles";
import { Day } from "../../ui/Day";
import { MonthSelect } from "../../ui/MonthSelect";

import { days } from "../../../mocks/days";
export const DaysRange = ({ children }) => (
  <S.DaysRange>
    <MonthSelect />
    <S.DaysList>
      {days.map(({ day, type }) => (
        <S.Day key={day}>
          <Day day={day} type={type} />
        </S.Day>
      ))}
    </S.DaysList>
  </S.DaysRange>
);

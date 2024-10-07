import React, { useState, useRef } from "react";
import * as S from "./styles";
import { Day } from "../../ui/Day";
import { MonthSelect } from "../../ui/MonthSelect";

import { days } from "../../../mocks/days";

export const DaysRange = ({ children }) => {
  const daysRef = useRef(null);
  const [daysPosition, setDaysPosition] = useState(0);
  const handleDaysScroll = (e) => {
    //setDaysPosition(e.target);
    console.log(e);
  };
  return (
    <S.DaysRange>
      <MonthSelect />
      <S.DaysList onWheel={handleDaysScroll}>
        {days.map(({ day, type }) => (
          <S.Day key={day}>
            <Day day={day} type={type} />
          </S.Day>
        ))}
      </S.DaysList>
    </S.DaysRange>
  );
};

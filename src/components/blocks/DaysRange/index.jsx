import React, { useState, useRef } from "react";
import * as S from "./styles";
import { Day } from "../../ui/Day";
import { MonthSelect } from "../../ui/MonthSelect";

import { days } from "../../../mocks/days";

export const DaysRange = ({ children }) => {
  const daysRef = useRef(null);
  const [daysPosition, setDaysPosition] = useState(0);
  const handleDaysScroll = (e) => {
    setDaysPosition((prev) => prev + e.deltaX);
  };
  return (
    <S.DaysRange>
      <MonthSelect />
      <S.DaysWrapper>
        <S.DaysList
          onWheel={handleDaysScroll}
          style={{ transform: `translateX(${daysPosition}px)` }}
        >
          {days.map(({ day, type }) => (
            <S.Day key={day}>
              <Day day={day} type={type} />
            </S.Day>
          ))}
        </S.DaysList>
      </S.DaysWrapper>
    </S.DaysRange>
  );
};

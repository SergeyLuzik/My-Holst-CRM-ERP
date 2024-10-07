import React, { useState, useRef } from "react";
import * as S from "./styles";
import { Day } from "../../ui/Day";
import { MonthSelect } from "../../ui/MonthSelect";

import { futureDays } from "../../../mocks/futureDays";

const setDay = () => ({ day: Date.now(), type: "past" });

export const DaysRange = ({ children }) => {
  const daysRef = useRef(null);
  const [daysPosition, setDaysPosition] = useState(0);

  const [days, setDays] = useState(futureDays);
  const handleDaysScroll = (e) => {
    setDaysPosition((prev) => {
      if (prev > e.deltaY) {
        // при скролле влево добавлять прошедние дни через setDays
        setDays([setDay(prev + e.deltaY), ...days]); //  setDays добавляет в массив дни в начало
      }
      return prev + e.deltaY;
    });
    console.log(e.deltaX, e.deltaY);
  };
  return (
    <S.DaysRange>
      <MonthSelect />
      <S.DaysWrapper onWheel={handleDaysScroll}>
        <S.DaysList style={{ transform: `translateX(${daysPosition}px)` }}>
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

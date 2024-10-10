import React, { useState, useRef } from "react";
import * as S from "./styles";
import { Day } from "../../ui/Day";
import { MonthSelect } from "../../ui/MonthSelect";

import { futureDays } from "../../../mocks/futureDays";
import { getWordDeclension } from "../../../utils";

const setDay = () => ({ day: Date.now(), type: "past" });

export const DaysRange = ({ children }) => {
  const daysWrapperRef = useRef(null);
  const daysRef = useRef(null);

  const [daysPosition, setDaysPosition] = useState(0);
  const [days, setDays] = useState(futureDays);

  const handleDaysScroll = (e) => {
    const wrapperRect = daysWrapperRef.current.getBoundingClientRect();
    const daysRect = daysRef.current.getBoundingClientRect();
    //console.log("wrapperRect", wrapperRect.right);
    //console.log("daysRect", daysRect.right);

    setDaysPosition((prev) => {
      const newDaysPosition = prev + e.deltaY;
      console.log("prev", prev, "new", newDaysPosition);

      if (prev < newDaysPosition) {
        console.log("вправо", e.deltaX, e.deltaY);
        // при скролле вправо добавлять прошедние дни через setDays
        setDays([setDay(prev + e.deltaY), ...days]); //  setDays добавляет в массив дни в начало
        return prev; // вместо смещения дни сдвигает добавление новых дней
      }
      if (prev > newDaysPosition) {
        console.log(
          "влево",
          e.deltaX,
          e.deltaY,
          wrapperRect.right,
          daysRect.right
        );
        if (wrapperRect.left + 400 > daysRect.right) {
          return prev;
        }
      }
      return prev + e.deltaY;
    });
  };

  return (
    <S.DaysRange>
      <MonthSelect />
      <S.DaysWrapper ref={daysWrapperRef} onWheel={handleDaysScroll}>
        <S.DaysList
          ref={daysRef}
          style={{ transform: `translateX(${daysPosition}px)` }}
        >
          {days.map(({ day, type, ordersCount }) => (
            <S.DayWrapper key={day}>
              <S.Today>сегодня</S.Today>
              <S.Day $type={type}>{day}</S.Day>
              {ordersCount && (
                <S.OrdersCount $count={ordersCount}>
                  {`${ordersCount} ${getWordDeclension(ordersCount, [
                    "картина",
                    "картины",
                    "картин",
                  ])}`}
                </S.OrdersCount>
              )}
            </S.DayWrapper>
          ))}
        </S.DaysList>
      </S.DaysWrapper>
    </S.DaysRange>
  );
};

import React from "react";
import * as S from "./styles";
import { Day } from "../../ui/Day";
import { MonthSelect } from "../../ui/MonthSelect";

export const DaysRange = ({ children }) => (
  <S.DaysRange>
    <MonthSelect />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="today" />
    <Day day="Вторник, 31 июля" />
    <Day day="Вторник, 31 июля" type="selected" />
    <Day day="Вторник, 31 июля" />
    <Day day="Вторник, 31 июля" />
  </S.DaysRange>
);

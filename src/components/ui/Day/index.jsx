import React from "react";
import * as S from "./styles";
export const Day = ({ day, type }) => {
  return <S.Day $type={type}>{day}</S.Day>;
};

import React from "react";
import * as S from "./styles";

const TYPES_TEXT = {
  new: "новый",
  approve: "утвержден",
  printed: "напечатан",
  done: "готов",
  complete: "завершен",
};
export const Status = ({ type }) => {
  return <S.Status $type={type}>{TYPES_TEXT[type]}</S.Status>;
};

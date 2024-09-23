import React from "react";
import * as S from "./styles";
export const Status = ({ type }) => {
  const typesText = {
    new: "новый",
    approve: "утвержден",
    printed: "напечатан",
    done: "готов",
    complete: "завершен",
  };

  return <S.Status type={type}>{typesText[type]}</S.Status>;
};

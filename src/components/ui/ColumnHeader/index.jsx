import React from "react";
import * as S from "./styles";

export const ColumnHeader = ({ text, type, mode, active }) => (
  // передача props без значения как true
  <S.ColumnHeader $type={type} $mode={mode}>
    {text}
  </S.ColumnHeader>
);

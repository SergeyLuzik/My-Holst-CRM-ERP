import React from "react";
import * as S from "./styles";

export const ColumnHeader = ({ text, type, mode }) => (
  <S.ColumnHeader $type={type} $mode={mode}>
    {text}
  </S.ColumnHeader>
);

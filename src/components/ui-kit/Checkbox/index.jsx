import React from "react";
import * as S from "./styles";
export const Checkbox = ({ text }) => (
  <S.Label>
    <S.Input />
    <S.Mark />
    {text}
  </S.Label>
);

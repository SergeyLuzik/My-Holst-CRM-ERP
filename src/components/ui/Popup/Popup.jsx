import React from "react";
import * as S from "./styles";
export const Popup = ({ text }) => (
  <S.Popup>
    <S.Pin/>
    <S.Content>{text}</S.Content>
  </S.Popup>
);

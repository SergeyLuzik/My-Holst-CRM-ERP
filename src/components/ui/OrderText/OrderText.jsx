import React from "react";
import * as S from "./styles";
export const OrderText = ({ text, width }) => (
  <S.OrderText defaultValue={text} $width={width} />
);

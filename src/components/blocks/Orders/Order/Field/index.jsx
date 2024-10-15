import React from "react";
import * as S from "./styles";

export const Field = ({ width, children }) => {
  return <S.OrderItem $width={width}>{children}</S.OrderItem>;
};

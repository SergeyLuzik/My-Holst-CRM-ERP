import React from "react";
import * as S from "./styles";
export const OrderItem = ({ width, children }) => (
  <S.OrderItem $width={width}>{children}</S.OrderItem>
);

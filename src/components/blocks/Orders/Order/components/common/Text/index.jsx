import React from "react";
import * as S from "./styles";

export const Text = ({ children, onClick, className }) => (
  <S.Text className={className} onClick={onClick}>
    {children}
  </S.Text>
);

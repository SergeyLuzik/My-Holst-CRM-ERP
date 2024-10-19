import React from "react";
import * as S from "./styles";

export const Text = ({ children, onClick }) => (
  <S.Text onClick={onClick}>{children}</S.Text>
);

import React from "react";
import * as S from "./styles";

export const Tag = ({ text, type }) => (
  <S.Tag defaultValue={text} $type={type} />
);

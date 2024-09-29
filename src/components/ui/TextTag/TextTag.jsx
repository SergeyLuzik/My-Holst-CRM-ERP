import React from "react";
import * as S from "./styles";
import { Li } from "../../../styled-tags";

export const TextTag = ({ text, type }) => (
  <S.TextTag as={Li} $type={type}>
    {text}
  </S.TextTag>
);

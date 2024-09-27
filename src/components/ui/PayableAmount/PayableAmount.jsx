import React from "react";
import * as S from "./styles";
import { P } from "../../../styled-tags";
export const PayableAmount = ({ text, width }) => (
  <S.PayableAmount as={P} $width={width}>
    {text}
  </S.PayableAmount>
);

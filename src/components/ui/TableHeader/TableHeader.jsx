import React from "react";
import * as S from "./styles";

export const TableHeader = ({ text, type, mode }) => (
  <S.TableHeader $type={type} $mode={mode}>
    {text}
  </S.TableHeader>
);

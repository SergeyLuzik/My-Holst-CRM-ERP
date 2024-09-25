import React from "react";
import * as S from "./styles";
import { SqueezeButton } from "../../ui/SqueezeButton/SqueezeButton";
export const Menu = () => (
  <S.Menu>
    <S.MenuHeader>
      <S.Logo />
      <SqueezeButton />
    </S.MenuHeader>
    <S.LinksList>{}</S.LinksList>
  </S.Menu>
);

import React from "react";
import * as S from "./styles";
export const MenuItem = ({ icon, href, text, Option }) => (
  <S.MenuItem $icon={icon} href={href}>
    <>
      {text}
      {Option && Option()}
    </>
  </S.MenuItem>
);

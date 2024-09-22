import React from "react";
import * as S from "./styles";
export const MenuItem = ({ icon, href, text }) => {
  return (
    <S.MenuItem icon={icon} href={href}>
      ${text}
    </S.MenuItem>
  );
};

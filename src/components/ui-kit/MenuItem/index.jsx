import React from "react";
import * as S from "./styles";

import { Li } from "@styled-tags/li";
export const MenuItem = ({ icon, href, text, Option }) => (
  <Li>
    <S.Link $icon={icon} href={href}>
      <>
        {text}
        {Option && Option()}
      </>
    </S.Link>
  </Li>
);

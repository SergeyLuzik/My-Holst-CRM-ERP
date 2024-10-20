import React from "react";
import * as S from "./styles";
import { menuItems } from "@mocks";
import { SqueezeButton } from "@ui-kit/SqueezeButton";
import { MenuItem } from "@ui-kit/MenuItem";
export const Menu = () => (
  <S.Menu>
    <S.MenuHeader>
      <S.Logo />
      <SqueezeButton />
    </S.MenuHeader>
    <S.LinksList>
      {menuItems.map(({ id, icon, href, text, Option }) => (
        <MenuItem
          key={id}
          icon={icon}
          href={href}
          text={text}
          Option={Option}
        />
      ))}
    </S.LinksList>
  </S.Menu>
);

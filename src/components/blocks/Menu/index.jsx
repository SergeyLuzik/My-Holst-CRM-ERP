import React from "react";
import * as S from "./styles";
import { menuItems } from "../../../mocks/menu-items";
import { SqueezeButton } from "../../ui/SqueezeButton";
import { MenuItem } from "../../ui/MenuItem";
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

import React from "react";
import { Status } from "../ui/Status/Status";
import { GlobalStyle } from "./styles";
import { MenuItem } from "../ui/MenuItem/MenuItem";

import icon from "../../assets/icons/picture.svg";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Status type="done" />
      <MenuItem icon={icon} href="#" text="Картины" />
    </>
  );
};

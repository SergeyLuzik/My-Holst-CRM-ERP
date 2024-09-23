import React from "react";
import { Status } from "../ui/Status/Status";
import { GlobalStyle } from "./styles";
import { MenuItem } from "../ui/MenuItem/MenuItem";

import icon from "../../assets/icons/picture.svg";
import { PlusButton } from "../ui/PlusButton/PlusButton";
import { Note } from "../ui/Note/Note";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Status type="done" />
      <MenuItem icon={icon} href="#" text="Картины" Option={PlusButton} />
      <PlusButton />
      <Note text="Текст заметки" />
    </>
  );
};

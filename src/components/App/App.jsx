import React from "react";
import { Status } from "../ui/Status/Status";
import { GlobalStyle } from "./styles";
import { MenuItem } from "../ui/MenuItem/styles";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Status type="done" />
      <MenuItem>Картины</MenuItem>
    </>
  );
};

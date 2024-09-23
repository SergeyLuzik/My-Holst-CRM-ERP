import React from "react";
import { MenuItem } from "./MenuItem";
import picture from "../../../assets/icons/picture.svg";

export default {
  title: "Пункты меню",
};

const Template = (args) => <MenuItem {...args} />;

export const Canvas = Template.bind({});
Canvas.args = {
  icon: picture,
  href: "#",
  text: "Картины",
};

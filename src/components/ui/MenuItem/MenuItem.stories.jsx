import React from "react";
import { MenuItem } from "./MenuItem";

export default {
  title: "Пункты меню",
};

const Template = (args) => <MenuItem {...args} />;

export const Canvas = Template.bind({});
Canvas.args = {
  children: "Картины",
};

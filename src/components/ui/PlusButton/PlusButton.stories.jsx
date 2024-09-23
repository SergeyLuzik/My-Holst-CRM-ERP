import React from "react";
import { PlusButton } from "./PlusButton";
import picture from "../../../assets/icons/picture.svg";

export default {
  title: "Пункты меню",
};

const Template = (args) => <PlusButton {...args} />;

export const Canvas = Template.bind({});
Canvas.args = {
  icon: picture,
};

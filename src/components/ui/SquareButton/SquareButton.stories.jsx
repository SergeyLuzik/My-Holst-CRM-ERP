import React from "react";
import { SquareButton } from "./SquareButton";
import picture from "../../../assets/icons/picture.svg";

export default {
  title: "Квадратные кнопки",
};

const Template = (args) => <SquareButton {...args} />;

export const Orientation = Template.bind({});

Orientation.args = {
  type: "sort",
};

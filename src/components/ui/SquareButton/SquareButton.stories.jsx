import React from "react";
import { SquareButton } from "./SquareButton";
import picture from "../../../assets/icons/picture.svg";

export default {
  title: "Квадратная кнопка",
};

const Template = (args) => <SquareButton {...args} />;

export const Square = Template.bind({});

Square.args = {
  icon: picture,
};

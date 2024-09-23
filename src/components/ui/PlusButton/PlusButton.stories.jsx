import React from "react";
import { PlusButton } from "./PlusButton";
import picture from "../../../assets/icons/picture.svg";

export default {
  title: "Кнопка плюс",
};

const Template = (args) => <PlusButton {...args} />;

export const Plus = Template.bind({});

Plus.args = {
  icon: picture,
};

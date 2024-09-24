import React from "react";
import { CloseButton } from "./CloseButton";
import picture from "../../../assets/icons/picture.svg";

export default {
  title: "Кнопка закрыть",
};

const Template = (args) => <CloseButton {...args} />;

export const Close = Template.bind({});

Close.args = {
  icon: picture,
};

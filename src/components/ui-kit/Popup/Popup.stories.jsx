import React from "react";
import { Popup } from ".";

export default {
  title: "Popup",
};

const Template = (args) => <Popup {...args} />;

export const popup = Template.bind({});
popup.args = {
  text: "Получить фото",
};

import React from "react";
import { OrderText } from "./OrderText";

export default {
  title: "Текст заказа",
};

const Template = (args) => <OrderText {...args} />;

export const Size = Template.bind({});

Size.args = {
  text: "100x100",
  width: "75px",
};

export const Description = Template.bind({});
Description.args = {
  text: "Свадебная пара и мама, на фоне буквы, декарация с цветами",
  width: "432px",
};

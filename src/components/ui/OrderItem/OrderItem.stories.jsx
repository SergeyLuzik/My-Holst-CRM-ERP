import React from "react";
import { OrderItem } from "./OrderItem";

export default {
  title: "Текст заказа",
};

const Template = (args) => <OrderItem {...args} />;

export const Size = Template.bind({});

Size.args = {
  text: "100x100",
  width: "75px",
};

export const Style = Template.bind({});
Style.args = {
  text: "Сканирование",
  width: "114px",
};

export const Description = Template.bind({});
Description.args = {
  text: "Свадебная пара и мама, на фоне буквы, декарация с цветами",
  width: "432px",
};

export const Package = Template.bind({});
Package.args = { text: "ШИР ТЕМНО-ЖЕЛТАЯ", width: "170px" };

export const Client = Template.bind({});
Client.args = { text: "Капуткина Ксения", width: "168px" };

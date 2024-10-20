import React from "react";
import { Day } from ".";

export default {
  title: "День",
};

const Template = (args) => <Day {...args} />;

export const Common = Template.bind({});
Common.args = {
  day: "Вторник, 31 июля",
};

export const Past = Template.bind({});
Past.args = {
  day: "Пятница, 28 июля",
  type: "past",
};
export const Selected = Template.bind({});
Selected.args = {
  day: "Пятница, 28 июля",
  type: "selected",
};

export const Today = Template.bind({});
Today.args = {
  day: "Пятница, 28 июля",
  type: "today",
};

import React from "react";
import { PayableAmount } from ".";

export default {
  title: "Текст заказа",
};

const Template = (args) => <PayableAmount {...args} />;

export const Amount = Template.bind({});

Amount.args = {
  text: "11 050 ₽",
  width: "74px",
};

import React from "react";
import { Status } from "./Status";

export default {
  title: "Статус заказа",
};

const Template = (args) => <Status {...args} />;

export const OrderStatus = Template.bind({});
OrderStatus.args = {
  type: "new",
};

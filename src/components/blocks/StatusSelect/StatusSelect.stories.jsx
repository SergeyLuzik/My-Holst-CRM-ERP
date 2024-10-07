import React from "react";
import { Status } from "./StatusSelect";

export default {
  title: "Статус заказа",
};

const Template = (args) => <Status {...args} />;

export const New = Template.bind({});
New.args = {
  type: "new",
};

export const Approve = Template.bind({});
Approve.args = {
  type: "approve",
};

export const Printed = Template.bind({});
Printed.args = {
  type: "printed",
};

export const Done = Template.bind({});
Done.args = {
  type: "done",
};

export const Complete = Template.bind({});
Complete.args = {
  type: "complete",
};

import React from "react";
import { ColumnHeader } from "./ColumnHeader";

export default {
  title: "Заголовки строк",
};

const Template = (args) => <ColumnHeader {...args} />;

export const Status = Template.bind();
Status.args = {
  text: "Статус",
  type: "sortable",
  mode: "text",
};

export const Active = Template.bind();
Active.args = {
  text: "Статус",
  type: "sortable",
  mode: "text",
  active: true,
};

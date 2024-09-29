import React from "react";
import { TableHeader } from "./TableHeader";

export default {
  title: "Заголовки строк",
};

const Template = (args) => <TableHeader {...args} />;

export const Status = Template.bind();
Status.args = {
  text: "Статус",
  type: "sortable",
  mode: "text",
};

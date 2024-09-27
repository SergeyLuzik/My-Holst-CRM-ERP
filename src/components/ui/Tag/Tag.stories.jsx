import React from "react";
import { Tag } from "./Tag";
export default { title: "Тег" };

const Template = (args) => <Tag {...args} />;

export const CommonTag = Template.bind({});

CommonTag.args = { text: "Комментарий", type: "common" };

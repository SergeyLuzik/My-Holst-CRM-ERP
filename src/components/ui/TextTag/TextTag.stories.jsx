import React from "react";
import { TextTag } from ".";
export default { title: "Теги" };

const Template = (args) => <TextTag {...args} />;

export const CommonTag = Template.bind({});

CommonTag.args = { text: "Комментарий", type: "common" };

export const ImportantTag = Template.bind({});

ImportantTag.args = { text: "Багет 3323", type: "important" };

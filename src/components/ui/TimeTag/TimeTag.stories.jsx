import React from "react";
import { TimeTag } from ".";
export default { title: "Теги" };

const Template = (args) => <TimeTag {...args} />;

export const Time = Template.bind({});

Time.args = { time: "15:00" };

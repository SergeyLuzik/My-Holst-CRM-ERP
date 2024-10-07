import React from "react";
import { Note } from ".";

export default {
  title: "Заметка",
};

const Template = (args) => <Note {...args} />;

export const NewNote = Template.bind({});
NewNote.args = {
  text: "Получить фото",
};

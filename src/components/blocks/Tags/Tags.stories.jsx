import React from "react";

import { Tags } from ".";
import { TimeTag } from "../../ui/TimeTag";
import { TextTag } from "../../ui/TextTag";

export default {
  title: "Blocks",
};

export const TagsList = () => (
  <Tags>
    <TimeTag time="15:00" />
    <TextTag text="Багет 3222" type="important" />
    <TextTag text="Лак" type="important" />
    <TextTag text="Комментарий" type="common" />
  </Tags>
);

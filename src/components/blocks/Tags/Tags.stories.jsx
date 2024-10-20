import React from "react";

import { Tags } from ".";
import { TimeTag } from "../../ui-kit/TimeTag";
import { TextTag } from "../../ui-kit/TextTag";

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

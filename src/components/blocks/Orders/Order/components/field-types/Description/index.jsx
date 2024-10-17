import React, { useState } from "react";

import * as S from "./styles";
import { Text } from "../../common/Text";
import { TextInput } from "../../common/TextInput";

export const Description = ({ description }) => {
  const [text, setText] = useState(description);
  const [editMode, setEditMode] = useState(false);

  const handleRootClick = () => {
    console.log("editMode", editMode);
    setEditMode((prev) => (prev ? prev : !prev));
  };

  const handleValueChange = (value) => {
    console.log("setting value by setText", value);
    setText(value);

    setEditMode(false);
  };

  return (
    <S.Wrapper onClick={handleRootClick}>
      {editMode ? (
        <TextInput value={text} handleValueChange={handleValueChange} />
      ) : (
        <Text>{text}</Text>
      )}
    </S.Wrapper>
  );
};

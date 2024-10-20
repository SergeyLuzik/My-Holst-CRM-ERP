import React, { useState } from "react";
import * as S from "./styles";
import { OrderTextInput } from "@ui-kit/OrderTextInput";

export const Field = ({ width, text, editable }) => {
  const [textValue, setText] = useState(text);
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
    <S.Filed $width={width} onClick={handleRootClick}>
      {editMode ? (
        <OrderTextInput
          value={textValue}
          handleValueChange={handleValueChange}
        />
      ) : (
        <S.Text>{textValue}</S.Text>
      )}
    </S.Filed>
  );
};

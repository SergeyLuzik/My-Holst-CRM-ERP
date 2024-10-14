import React, { useState } from "react";

import * as S from "./styles";

export const EditableText = ({ Viewer, viewerText, Editor }) => {
  const [text, setText] = useState(viewerText);
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
        <Editor value={text} handleValueChange={handleValueChange} />
      ) : (
        <Viewer {...{ text: text }} />
      )}
    </S.Wrapper>
  );
};

import React, { useState } from "react";

import * as S from "./styles";

export const EditableText = ({ text }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <S.Wrapper onDoubleClick={() => setEditMode((prev) => !prev)}>
      {editMode ? (
        <S.Edit defaultValue={text}></S.Edit>
      ) : (
        <S.Text>{text}</S.Text>
      )}
    </S.Wrapper>
  );
};

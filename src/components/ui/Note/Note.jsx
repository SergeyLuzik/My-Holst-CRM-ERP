import React from "react";
import * as S from "./styles";
import { CloseButton } from "../CloseButton/CloseButton";
export const Note = ({ text }) => (
  <S.NoteWrapper>
    <S.Text contentEditable="true">{text}</S.Text>
    <CloseButton />
  </S.NoteWrapper>
);

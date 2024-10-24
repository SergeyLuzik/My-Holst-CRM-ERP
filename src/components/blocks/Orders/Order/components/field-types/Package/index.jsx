import React, { useState, useRef } from "react";
import * as S from "./styles";
import { Popup } from "@ui-kit/Popup";
import { Text } from "../../common/Text";
import { TextInput } from "../../common/TextInput";
import { PackageOptions } from "./PackageOptions";
import { searchTextMatch } from "@utils";

export const Package = ({ type, name }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const triggerRef = useRef(null);
  const [text, setText] = useState(`${type} ${name}`.toUpperCase());
  const [editMode, setEditMode] = useState(false);
  console.log(text, "text");

  const handleTriggerClick = () => {
    setEditMode(true);
    setText("");
    const boundingRect = triggerRef.current.getBoundingClientRect();
    setTop(boundingRect.bottom);
    setLeft(boundingRect.left + boundingRect.width / 2);
  };

  const handleValueChange = (value) => {
    console.log("setting value by setText", value);
    setText(value);
  };

  const handleModeChange = () => {
    setEditMode((prev) => !prev);
  };

  const handleOptionClick = (value) => {
    console.log("клик по опции");
    setEditMode(false);
    setText(value);
  };

  return (
    <S.Wrapper ref={triggerRef}>
      {editMode ? (
        <>
          <TextInput
            value={text}
            handleValueChange={handleValueChange}
            handleModeChange={handleModeChange}
          />
          <Popup top={top} left={left}>
            <PackageOptions text={text} handleOptionClick={handleOptionClick} />
          </Popup>
        </>
      ) : (
        <Text onClick={handleTriggerClick}>{text}</Text>
      )}
    </S.Wrapper>
  );
};

import React, { useState, useRef } from "react";
import * as S from "./styles";
import { Popup } from "@ui-kit/Popup";
import { Text } from "../../common/Text";
import { TextInput } from "../../common/TextInput";
import { searchTextMatch } from "@utils";

const SIZES = {
  allSizes: [
    "15х18",
    "15х20",
    "18х27",
    "20х25",
    "20х30",
    "25х25",
    "25х30",
    "25х35",
    "30х30",
    "30х35",
    "30х40",
    "30х45",
    "35х35",
    "35х40",
    "35х45",
    "35х50",
    "40х40",
    "40х45",
    "40х50",
    "40х60",
    "45х55",
    "45х70",
    "50х50",
    "50х60",
    "50х65",
    "50х70",
    "50х75",
    "60х60",
    "60х70",
    "60х80",
    "60х90",
    "70х70",
    "70х90",
    "80х80",
    "80х95",
    "80х100",
    "80х120",
    "90х135",
    "100х120",
    "100х130",
    "100х150",
  ],
  popular: ["40х60", "30х40", "30х45", "40х50", "20х30", "35х50", "60х90"],
};

export const Size = ({ size }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const triggerRef = useRef(null);
  const [text, setText] = useState(size);
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
            <S.List>
              {searchTextMatch(text, SIZES.allSizes).map((size) => (
                <S.Item key={size}>
                  <Text onClick={() => handleOptionClick(size)}>{size}</Text>
                </S.Item>
              ))}
            </S.List>
          </Popup>
        </>
      ) : (
        <Text onClick={handleTriggerClick}>{text}</Text>
      )}
    </S.Wrapper>
  );
};

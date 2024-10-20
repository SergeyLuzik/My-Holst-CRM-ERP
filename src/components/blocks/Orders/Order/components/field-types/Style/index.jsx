import React, { useState, useRef } from "react";
import * as S from "./STYLES";
import { Popup } from "@ui-kit/Popup";
import { Text } from "../../common/Text";
import { TextInput } from "../../common/TextInput";
import { searchTextMatch } from "@utils";

const STYLES = [
  "Бьюти Арт",
  "Вектор Арт",
  "Гранж",
  "Диджитал Арт",
  "Дрим Арт",
  "Живопись",
  "Замена фона",
  "Инстаграм",
  "Исторический",
  "Коллаж",
  "Коллаж ИНД",
  "Комикс",
  "Композиция",
  "Лав Ис",
  "Лав Поли",
  "Лакшери Арт",
  "Модульная",
  "Масло",
  "Метрика",
  "Монтаж",
  "Неон Арт",
  "Поларойд",
  "Поп Арт",
  "Сканирование",
  "Стрит Арт",
  "Шарж",
  "35 ММ",
  "Инста-Арт",
];

export const Style = ({ style }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const triggerRef = useRef(null);
  const [text, setText] = useState(style);
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
              {searchTextMatch(text, STYLES).map((style) => (
                <S.Item key={style}>
                  <Text onClick={() => handleOptionClick(style)}>{style}</Text>
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

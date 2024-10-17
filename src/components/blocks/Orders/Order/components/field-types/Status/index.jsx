import React, { useState, useRef } from "react";
import * as S from "./styles";

import { Popup } from "../../../../../../ui/Popup";

const TYPES = ["new", "approve", "printed", "done", "complete"];

const TYPES_TEXT = {
  new: "новый",
  approve: "утвержден",
  printed: "напечатан",
  done: "готов",
  complete: "завершен",
};
export const Status = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerValue, setTriggerValue] = useState(type);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const triggerRef = useRef(null);

  const handleTriggerClick = () => {
    const boundingRect = triggerRef.current.getBoundingClientRect();
    setTop(boundingRect.bottom);
    setLeft(boundingRect.left + boundingRect.width / 2);
    setIsOpen((prev) => !prev);
  };
  const handleOptionClick = (value) => {
    console.log(value);

    setIsOpen((prev) => !prev);
    setTriggerValue(value);
  };

  return (
    <S.Wrapper ref={triggerRef}>
      <S.Status $type={triggerValue} onClick={handleTriggerClick}>
        {TYPES_TEXT[triggerValue]}
      </S.Status>
      {isOpen && (
        <Popup top={top} left={left}>
          <S.List>
            {TYPES.map((type) => (
              <S.Item key={type}>
                <S.Status $type={type} onClick={() => handleOptionClick(type)}>
                  {TYPES_TEXT[type]}
                </S.Status>
              </S.Item>
            ))}
          </S.List>
        </Popup>
      )}
    </S.Wrapper>
  );
};

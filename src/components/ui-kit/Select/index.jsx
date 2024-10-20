import React, { useState, useRef } from "react";
import * as S from "./styles";
export const Select = ({ Trigger, triggerProps, Dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerValue, setTriggerValue] = useState(triggerProps);
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
    setIsOpen((prev) => !prev);
    setTriggerValue(value);
  };

  return (
    <S.Select ref={triggerRef}>
      <Trigger onClick={handleTriggerClick} {...triggerValue} />
      {isOpen && (
        <Dropdown top={top} left={left} onOptionClick={handleOptionClick} />
      )}
    </S.Select>
  );
};

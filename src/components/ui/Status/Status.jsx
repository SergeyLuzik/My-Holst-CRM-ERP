import React, { useRef, useState } from "react";
import * as S from "./styles";
import { Popup } from "../../ui/Popup/Popup";
export const Status = ({ type }) => {
  const typesText = {
    new: "новый",
    approve: "утвержден",
    printed: "напечатан",
    done: "готов",
    complete: "завершен",
  };

  const types = ["new", "approve", "printed", "done", "complete"];

  const statusRef = useRef(null);
  const [statusValue, setStatusValue] = useState(type);
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handlePlaceholderClick = () => {
    const boundingRect = statusRef.current.getBoundingClientRect();
    setTop(boundingRect.bottom);
    setLeft(boundingRect.left + boundingRect.width / 2);
    setIsOpen(!isOpen);
  };

  const handlePopupClick = (type) => {
    setIsOpen(!isOpen);
    setStatusValue(type);
  };

  return (
    <>
      <S.Status
        $type={statusValue}
        onClick={handlePlaceholderClick}
        ref={statusRef}
      >
        {typesText[statusValue]}
      </S.Status>
      {isOpen && (
        <Popup top={top} left={left}>
          {types.map((type) => (
            <S.Status $type={type} onClick={() => handlePopupClick(type)}>
              {typesText[type]}
            </S.Status>
          ))}
        </Popup>
      )}
    </>
  );
};

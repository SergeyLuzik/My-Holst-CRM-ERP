import React, { useRef, useState } from "react";
import * as S from "./styles";

import { Status } from "../../ui/Status/Status";
import { Popup } from "../../ui/Popup/Popup";
export const StatusSelect = ({ initialStatus }) => {
  const typesText = {
    new: "новый",
    approve: "утвержден",
    printed: "напечатан",
    done: "готов",
    complete: "завершен",
  };

  const types = ["new", "approve", "printed", "done", "complete"];

  const statusRef = useRef(null);
  const [statusValue, setStatusValue] = useState(initialStatus);
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
      <Status
        $type={statusValue}
        onClick={handlePlaceholderClick}
        ref={statusRef}
      >
        {typesText[statusValue]}
      </Status>
      {isOpen && (
        <Popup top={top} left={left}>
          {types.map((type) => (
            <Status $type={type} onClick={() => handlePopupClick(type)}>
              {typesText[type]}
            </Status>
          ))}
        </Popup>
      )}
    </>
  );
};

import React from "react";
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

  const [isOpen, setIsOpen] = React.useState(false);

  const handlePlaceholderClick = () => setIsOpen(!isOpen);

  return (
    <S.StatusWrapper>
      <S.Status $type={type} onClick={handlePlaceholderClick}>
        {typesText[type]}
      </S.Status>
      {isOpen && (
        <Popup>
          {types.map((type) => (
            <S.Status $type={type} onClick={handlePlaceholderClick}>
              {typesText[type]}
            </S.Status>
          ))}
        </Popup>
      )}
    </S.StatusWrapper>
  );
};

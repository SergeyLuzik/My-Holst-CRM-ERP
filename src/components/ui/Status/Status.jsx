import React from "react";
import * as S from "./styles";
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
        <S.DropDown>
          {types.map((type) => (
            <S.Status $type={type} onClick={handlePlaceholderClick}>
              {typesText[type]}
            </S.Status>
          ))}
        </S.DropDown>
      )}
    </S.StatusWrapper>
  );
};

import React, { useState } from "react";
import * as S from "./styles";
import { PlusButton } from "../../ui/PlusButton";

export const Tags = ({ children }) => {
  const [onHover, setOnHover] = useState(false);
  const handleOnHover = () => setOnHover((perv) => !perv);
  return (
    <S.Tags
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {children}
      {onHover && <PlusButton />}
    </S.Tags>
  );
};

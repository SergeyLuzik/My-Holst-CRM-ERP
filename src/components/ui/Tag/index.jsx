import React, { useState } from "react";
import * as S from "./styles";

export const Tag = ({ type, text }) => {
  const [onHover, setOnHover] = useState(false);
  const handleOnHover = () => setOnHover((perv) => !perv);
  return (
    <S.Tag
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      $type={type}
    >
      {text} {onHover && <S.Delete />}
    </S.Tag>
  );
};

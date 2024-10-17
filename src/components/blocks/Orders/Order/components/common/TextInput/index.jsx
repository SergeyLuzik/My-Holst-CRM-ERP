import React, { useEffect, useState } from "react";
import * as S from "./styles";

export const TextInput = ({ value, handleValueChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const handleInputCompleat = (e) => {
    if (e.key === "Enter") {
      console.log("inputValue on Enter", inputValue);
      handleValueChange(inputValue);
    }
  };
  useEffect(() => {
    console.log("inputValue in useEffect", inputValue);

    document.addEventListener("keydown", handleInputCompleat);

    return () => {
      document.removeEventListener("keydown", handleInputCompleat);
    };
  });

  return (
    <S.TextInput
      onChange={(e) => {
        setInputValue(e.target.value);
        console.log("inputValue in onChange", inputValue);
      }}
      value={inputValue}
      autoFocus
    />
  );
};

import React, { useEffect, useState } from "react";
import * as S from "./styles";

export const TextInput = ({ value, handleValueChange, handleModeChange }) => {
  const handleInputCompleat = (e) => {
    if (e.key === "Enter") {
      handleModeChange();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleInputCompleat);

    return () => {
      document.removeEventListener("keydown", handleInputCompleat);
    };
  }, []);

  return (
    <S.TextInput
      onChange={(e) => {
        handleValueChange(e.target.value);
      }}
      value={value}
      autoFocus
    />
  );
};

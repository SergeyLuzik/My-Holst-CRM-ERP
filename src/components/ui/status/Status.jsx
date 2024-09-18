import { StyledButton } from "./style";

export const Status = ({ type }) => {
  const typesText = {
    new: "новый",
    approve: "утвержден",
    printed: "напечатан",
    done: "готов",
    complete: "завершен",
  };

  return <StyledButton type={type}>{typesText[type]}</StyledButton>;
};

import styled from "styled-components";
export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  padding: 0;
  border: 0;
  cursor: pointer;
  box-shadow: none;
  background: none;

  &:hover,
  &:active {
    background: none;
    box-shadow: none;
  }
`;

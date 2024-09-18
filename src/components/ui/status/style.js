import styled from "styled-components";
import { Button } from "../../styled";

export const StyledButton = styled(Button)`
  font-size: 14px;
  color: ${({ theme }) => {
    theme.color.black;
  }};
  padding-inline: ${({ theme }) => {
    theme.spacing.s;
  }};
  padding-block: ${({ theme }) => {
    theme.spacing.xs;
  }};
  background-color: ${({ theme }) => {
    theme.color.newBg;
  }};
`;

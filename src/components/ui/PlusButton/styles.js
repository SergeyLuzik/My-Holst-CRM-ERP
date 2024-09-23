import styled from "styled-components";
import { Button } from "../../styled";
import { flexCenter } from "../../../style-fragments";

export const PlusButton = styled(Button)`
  ${flexCenter};
  padding: ${({ theme }) => theme.spacings.s};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.main};

  &::before {
    display: block;
    width: 18px;
    height: 18px;
    content: "";
    mask: url(${(props) => props.$icon});
    background-color: currentColor;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

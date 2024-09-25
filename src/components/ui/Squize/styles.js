import styled from "styled-components";
import { Button } from "../../../styled-tags";
import { flexCenter } from "../../../style-fragments";
import icon from "../../../assets/icons/plus.svg";

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
    mask: url(${icon});
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

import styled from "styled-components";
import { Button } from "../../styled";
import { flexCenter } from "../../../style-fragments";

export const SquareButton = styled(Button)`
  ${flexCenter};
  padding: ${({ theme }) => theme.spacings.s};
  border-radius: ${({ theme }) => theme.radiuses.m};
  color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.extraLiteMain};
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.button};
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }

  &::before {
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    mask: url(${(props) => props.$icon});
    background-color: currentColor;
    transform: rotate(45deg);
  }
`;

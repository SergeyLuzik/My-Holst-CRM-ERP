import { css } from "styled-components";

export const squareButton = css`
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radiuses.m};
  color: ${({ theme }) => theme.colors.main};
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
    content: "";
    background-color: currentColor;
  }
`;

import styled from "styled-components";
import { Button } from "../../styled";
import { flexCenter } from "../../../style-fragments";

export const CloseButton = styled(Button)`
  ${flexCenter};
  padding: ${({ theme }) => theme.spacings.xxs};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
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

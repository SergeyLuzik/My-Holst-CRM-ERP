import styled from "styled-components";
import { Button } from "../../styled-tags";
import { flexCenter } from "../../../style-fragments";
import icon from "../../../assets/icons/arrow.svg";

export const SqueezeButton = styled(Button)`
  ${flexCenter};
  padding-left: 11px;
  padding-right: 12px;
  padding-block: 9px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.black};
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
    width: 9px;
    height: 14px;
    content: "";
    mask: url(${icon});
    background-color: currentColor;
  }
`;

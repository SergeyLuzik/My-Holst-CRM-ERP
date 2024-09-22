import styled from "styled-components";
import { Link } from "../../styled";
import icon from "../../../assets/icons/picture.svg";

export const MenuItem = styled(Link)`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.main};
  padding-inline: ${({ theme }) => theme.spacings.m};
  padding-block: ${({ theme }) => theme.spacings.s};
  border-radius: ${({ theme }) => theme.radiuses.l};
  &::before {
    display: block;
    width: 24px;
    height: 24px;
    content: "";
    mask: url(${icon});
    background-color: currentColor;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.extraLiteMain};
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;

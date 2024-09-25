import styled from "styled-components";
import { Link } from "../../styled-tags";

export const MenuItem = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s};
  align-items: center;
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
    mask: url(${(props) => props.$icon});
    background-color: currentColor;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

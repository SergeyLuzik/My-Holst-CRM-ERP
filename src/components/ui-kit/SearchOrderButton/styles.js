import styled from "styled-components";
import { Button } from "../../../styled-tags";
import icon from "../../../assets/icons/search.svg";

export const SearchOrderButton = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xs};
  align-items: center;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};
  background-color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    mask: url(${icon});
    background-color: currentColor;
  }
`;

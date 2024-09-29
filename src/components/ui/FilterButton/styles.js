import styled from "styled-components";
import { Button } from "../../../styled-tags";
import icon from "../../../assets/icons/filter.svg";

export const FilterButton = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xs};
  align-items: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};

  &::before {
    display: block;
    width: 14px;
    height: 12px;
    content: "";
    mask: url(${icon});
    background-color: currentColor;
  }
`;

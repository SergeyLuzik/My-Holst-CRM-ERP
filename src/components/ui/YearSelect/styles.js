import styled from "styled-components";
import { Button } from "../../../styled-tags";
import icon from "../../../assets/icons/triangle.svg";

export const YearSelect = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xs};
  align-items: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};

  &::after {
    content: "";
    display: block;
    width: 7px;
    height: 5px;
    mask: url(${icon});
    background-color: currentColor;
  }
`;

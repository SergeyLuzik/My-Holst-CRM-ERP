import styled from "styled-components";
import { Button } from "../../styled";

const typesColor = {
  new: "newBg",
  approve: "approveBg",
  printed: "printBg",
  done: "doneBg",
  complete: "extraLiteMain",
};
export const Status = styled(Button)`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};
  background-color: ${({ theme, type }) => theme.colors[typesColor[type]]};
  &:hover {
    background-color: ${({ theme, type }) => theme.colors[typesColor[type]]};
  }
`;

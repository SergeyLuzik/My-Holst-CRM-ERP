import styled, { css } from "styled-components";
import { pill, flexCenter } from "@style-fragments";
import { Button, Li } from "@styled-tags";
import clock from "@icons/clock.svg";
import plus from "@icons/plus.svg";
const TYPES_BACKGROUND = {
  common: "extraLiteMain",
  important: "extraLiteAccent",
  time: "unset",
};
const forTime = css`
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: unset;
  }

  &::before {
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    mask: url(${clock});
    background-color: currentColor;
  }
`;

export const Tag = styled(Li)`
  ${pill};
  gap: ${({ theme }) => theme.spacings.xs};
  line-height: 1;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme, $type }) =>
    theme.colors[TYPES_BACKGROUND[$type]]};
  color: ${({ theme, $type }) =>
    $type === "important" || $type === "time"
      ? theme.colors.accent
      : theme.colors.black};
  ${({ theme, $type }) => $type === "time" && forTime};

  &:hover {
    cursor: pointer;
  }
`;

export const Delete = styled(Button)`
  ${flexCenter};
  /*padding: ${({ theme }) => theme.spacings.xs};*/
  border-radius: 50%;
  color: currentColor;

  &::before {
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    mask: url(${plus});
    background-color: currentColor;
    transform: rotate(45deg);
  }
`;

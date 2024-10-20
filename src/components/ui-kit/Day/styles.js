import styled from "styled-components";
import { A } from "@styled-tags";

const typesTextColors = {
  selected: "white",
  today: "black",
  past: "grey",
};

export const Day = styled(A)`
  flex-shrink: 0;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};

  ${({ theme, $type }) =>
    `color: ${
      theme.colors[`${$type === undefined ? "black" : typesTextColors[$type]}`]
    }`};

  ${({ theme, $type }) =>
    $type === "selected" && `background-color: ${theme.colors.main}`};

  ${({ theme, $type }) =>
    $type === "today" && `border: 1px solid ${theme.colors.main}`};

  &:hover {
    cursor: pointer;
  }
`;

//Today - border + кол-во картин в after, tomorrow - кол-во картин в after, selected - back main, past - grey text

import styled, { css } from "styled-components";
import { Li, Ul, A } from "../../../styled-tags";

const TYPES_TEXT_COLORS = {
  selected: "white",
  today: "black",
  past: "grey",
};

const ORDERS_COUNT_COLORS = {
  common: "main",
  hi: "approveBg",
  overload: "accent",
};

export const DaysRange = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: max-content;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radiuses.xl};
  gap: ${({ theme }) => theme.spacings.l};
  padding: ${({ theme }) => theme.spacings.s};
  width: 100%;
`;

export const DaysWrapper = styled.div`
  margin-left: 6.25%;
  margin-right: 0.75%;
  width: 93%;
  position: absolute;
  transform: translateY(-25%);
  display: flex;
  overflow: hidden;
`;

export const DaysList = styled(Ul)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const DayWrapper = styled(Li)`
  display: flex;
  align-items: center;

  flex-shrink: 0;
  ${({ theme, $type, $ordersCount }) => {
    if ($type === "today" || $ordersCount) {
      return `flex-direction: column;
    justify-content: flex-end;
  gap: ${theme.spacings.m};`;
    }
  }}
`;

export const Day = styled(A)`
  position: relative;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};

  ${({ theme, $type }) =>
    `color: ${
      theme.colors[
        `${$type === undefined ? "black" : TYPES_TEXT_COLORS[$type]}`
      ]
    }`};

  ${({ theme, $type }) =>
    $type === "selected" && `background-color: ${theme.colors.main}`};

  ${({ theme, $type }) =>
    $type === "today" && `border: 1px solid ${theme.colors.main}`};

  &:hover {
    cursor: pointer;
  }
`;

const daysInfo = css`
  font-size: 14px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Today = styled.span`
  ${daysInfo};
  color: ${({ theme }) => theme.colors.main};
`;

export const OrdersCount = styled.span`
  ${daysInfo};
  color: ${({ theme, $count }) => {
    if ($count < 20) {
      return theme.colors[ORDERS_COUNT_COLORS.common];
    } else if ($count < 30) {
      return theme.colors[ORDERS_COUNT_COLORS.hi];
    } else {
      return theme.colors[ORDERS_COUNT_COLORS.overload];
    }
  }};
`;

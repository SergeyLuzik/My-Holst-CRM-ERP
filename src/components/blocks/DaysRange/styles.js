import styled from "styled-components";
import { Li, Ul } from "../../../styled-tags";

export const DaysRange = styled.div`
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
  overflow-x: hidden;
`;

export const DaysList = styled(Ul)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const Day = styled(Li)`
  display: flex;
  flex-shrink: 0;
`;

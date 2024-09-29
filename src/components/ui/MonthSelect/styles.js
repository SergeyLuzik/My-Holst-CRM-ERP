import styled from "styled-components";
import { YearSelect } from "../YearSelect/styles";

export const MonthSelect = styled(YearSelect)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

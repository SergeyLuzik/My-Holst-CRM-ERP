import styled from "styled-components";
import { Day } from "../../ui/Day/styles";

export const AdditionalControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const DayButton = styled(Day)`
  text-transform: uppercase;
`;

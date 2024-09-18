import styled from "styled-components";
import { Button } from "../../styled";

export const StyledButton = styled(Button)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};
  background-color: ${({ theme }) => theme.colors.newBg};
`;

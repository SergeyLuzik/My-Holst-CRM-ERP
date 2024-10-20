import styled from "styled-components";
import { Li } from "@styled-tags";

export const Order = styled(Li)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.m};
  padding-inline: ${({ theme }) => theme.spacings.m};
  padding-block: ${({ theme }) => theme.spacings.s};
  border-radius: ${({ theme }) => theme.radiuses.l};
  background-color: ${({ theme }) => theme.colors.white};
`;

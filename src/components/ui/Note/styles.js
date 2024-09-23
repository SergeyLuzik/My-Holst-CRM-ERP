import styled from "styled-components";
import { Input } from "../../styled";

export const Note = styled(Input)`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.main};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.s};
  background-color: ${({ theme }) => theme.colors.extraLiteMain};
  &:hover {
    cursor: pointer;
  }
`;

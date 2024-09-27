import styled from "styled-components";
import { Input } from "../../../styled-tags";

export const OrderText = styled(Input)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};
  width: ${({ $width }) => $width};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
  }
`;

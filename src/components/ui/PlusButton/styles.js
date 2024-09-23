import styled from "styled-components";
import { Button } from "../../styled";
import { flexCenter } from "../../../style-fragments";

export const PlusButton = styled(Button)`
  ${flexCenter};
  padding: ${({ theme }) => theme.spacings.m};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

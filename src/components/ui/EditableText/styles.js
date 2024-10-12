import styled, { css } from "styled-components";
import { Input, P } from "../../../styled-tags";
import { pill } from "../../../style-fragments";

const text = css`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const Wrapper = styled.div`
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radiuses.m};
  }
`;
export const Text = styled(P)`
  ${pill};
  ${text};
`;
export const Edit = styled(Input)`
  ${pill};
  ${text};
  width: 100%;
  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.main};
  }
`;

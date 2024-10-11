import styled from "styled-components";
import { Input, P } from "../../../styled-tags";
import { pill } from "../../../style-fragments";

export const Wrapper = styled.div`
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radiuses.m};
  }
`;
export const Text = styled(P)`
  ${pill}
`;
export const Edit = styled(Input)`
  ${pill};
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.main}`};
  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.main};
  }
`;

import styled, { css } from "styled-components";
import { P } from "@styled-tags";
import { pill } from "@style-fragments";

export const OrderText = styled(P)`
  ${pill};

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radiuses.m};
  }
`;

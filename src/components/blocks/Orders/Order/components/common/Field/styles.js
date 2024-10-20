import styled from "styled-components";
import { P } from "@styled-tags";
import { pill } from "@style-fragments";

export const Filed = styled.div`
  width: ${({ $width }) => $width};
`;

export const Text = styled(P)`
  ${pill};

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraLiteMain};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radiuses.m};
  }
`;

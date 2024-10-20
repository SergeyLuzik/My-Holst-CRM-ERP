import styled from "styled-components";
import { Button, Li, Ul } from "../../../styled-tags";
import { pill } from "../../../style-fragments";

export const List = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const Item = styled(Li)``;

export const Style = styled(Button)`
  ${pill};
`;

import styled from "styled-components";
import { Li, Ul } from "../../../styled-tags";

export const List = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const Item = styled(Li)``;

import styled from "styled-components";
import { Li, Ul } from "@styled-tags";

export const List = styled(Ul)`
  padding-inline: ${({ theme }) => theme.spacings.m};
  display: flex;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const Item = styled(Li)`
  display: flex;
  justify-content: center;
  width: ${({ $width }) => $width};
`;

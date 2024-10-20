import styled from "styled-components";
import { Li, Ul } from "@styled-tags";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const Buttons = styled(Ul)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s};
`;

export const List = styled(Ul)`
  max-height: 300px;
  overflow-y: auto;
`;

export const Item = styled(Li)``;

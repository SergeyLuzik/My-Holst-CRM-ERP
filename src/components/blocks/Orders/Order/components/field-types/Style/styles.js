import styled from "styled-components";
import { Li, Ul } from "@styled-tags";
export const Wrapper = styled.div`
  width: 100%;
`;
export const List = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
  max-height: 300px;
  overflow-y: auto;
`;

export const Item = styled(Li)``;

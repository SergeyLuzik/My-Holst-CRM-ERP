import styled from "styled-components";
import { Li, Ul } from "../../../../../../../../styled-tags";

export const Wrapper = styled.div``;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const List = styled(Ul)``;

export const Item = styled(Li)``;

import styled from "styled-components";
import { Li, Ul, P } from "@styled-tags";
import { pill } from "@style-fragments/pill";
import { Text } from "../../../common/Text";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
`;
export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s};
`;

export const InputsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const GroupTitle = styled(P)`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.main};
`;

export const RadioButton = styled.input``;

export const Checkbox = styled.input``;

export const List = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xs};
  max-height: 300px;
  overflow-y: auto;
`;

export const Item = styled(Li)``;

export const Package = styled(Text)`
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacings.s};
  &::before {
    display: block;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
  }
`;

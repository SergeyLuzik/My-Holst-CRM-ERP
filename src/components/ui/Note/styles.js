import styled from "styled-components";
//import { Input } from "../../styled";
import icon from "../../../assets/icons/plus.svg";
import { P } from "../../styled";

export const NoteWrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.s};
  background-color: ${({ theme }) => theme.colors.extraLiteMain};
`;
export const Text = styled(P)`
  max-width: 167px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.main};
  padding: ${({ theme }) => theme.spacings.xxs};
  border-radius: ${({ theme }) => theme.radiuses.s};
  &:hover {
    cursor: pointer;
  }
`;

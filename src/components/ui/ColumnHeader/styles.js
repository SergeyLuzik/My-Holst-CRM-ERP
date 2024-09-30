import { Button } from "../../../styled-tags";
import styled from "styled-components";

export const ColumnHeader = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s};
  align-items: center;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

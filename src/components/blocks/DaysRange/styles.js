import styled from "styled-components";
import { Ul } from "../../../styled-tags";

export const DaysRange = styled(Ul)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radiuses.xl};
  gap: ${({ theme }) => theme.spacings.l};
  padding: ${({ theme }) => theme.spacings.s};
  width: 100%;
  overflow: hidden;
`;

import styled from "styled-components";
import { Ul } from "../../../styled-tags";

// tag это li а Tags это ul
export const Orders = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.m};
`;

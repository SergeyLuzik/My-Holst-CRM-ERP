import styled from "styled-components";
import { Ul } from "../../../styled-tags";

// tag это li а Tags это ul
export const Tags = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.s};
  max-width: 282px;
`;

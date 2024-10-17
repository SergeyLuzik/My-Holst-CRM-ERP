import styled from "styled-components";
import { Input } from "../../../../../../../styled-tags";
import { pill } from "../../../../../../../style-fragments";

export const TextInput = styled(Input)`
  ${pill};
  width: 100%;
  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.main};
  }
`;

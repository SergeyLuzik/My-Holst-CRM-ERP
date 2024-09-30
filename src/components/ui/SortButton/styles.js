import styled from "styled-components";
import { Button } from "../../../styled-tags";
import { flexCenter, squareButton } from "../../../style-fragments";
import sort from "../../../assets/icons/numberSort.svg";

export const SortButton = styled(Button)`
  ${flexCenter};
  ${squareButton}
  &::before {
    width: 16px;
    height: 12px;
    mask: url(${sort});
  }
`;

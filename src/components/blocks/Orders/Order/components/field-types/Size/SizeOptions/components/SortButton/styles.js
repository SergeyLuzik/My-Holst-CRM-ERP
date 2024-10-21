import styled from "styled-components";
import { Button } from "@styled-tags";
import { flexCenter, squareButton } from "@style-fragments";
import sort from "@icons/numberSort.svg";

export const SortButton = styled(Button)`
  ${flexCenter};
  ${squareButton}
  &::before {
    width: 16px;
    height: 12px;
    mask: url(${sort});
    ${({ $mode }) => {
      if ($mode === "fromSmall") return `transform: scale(1, -1);`;
    }};
  }
`;

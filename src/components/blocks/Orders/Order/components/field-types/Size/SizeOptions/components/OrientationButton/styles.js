import styled from "styled-components";
import { Button } from "@styled-tags";
import { flexCenter, squareButton } from "@style-fragments";
import portrait from "@icons/portrait.svg";
import landscape from "@icons/landscape.svg";

export const OrientationButton = styled(Button)`
  ${flexCenter};
  ${squareButton}
  &::before {
    width: 16px;
    height: 16px;
    mask: url(${portrait});
  }
`;

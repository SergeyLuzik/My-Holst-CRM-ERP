import styled from "styled-components";
import { Button } from "../../../styled-tags";
import { flexCenter, squareButton } from "../../../style-fragments";
import portrait from "../../../assets/icons/portrait.svg";
import landscape from "../../../assets/icons/landscape.svg";

export const OrientationButton = styled(Button)`
  ${flexCenter};
  ${squareButton}
  &::before {
    width: 16px;
    height: 12px;
    mask: url(${portrait});
  }
`;

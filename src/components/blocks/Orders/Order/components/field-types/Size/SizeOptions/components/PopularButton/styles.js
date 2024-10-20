import styled from "styled-components";
import { Button } from "@styled-tags";
import { flexCenter, squareButton } from "@style-fragments";
import fire from "@icons/fire.svg";

export const PopularButton = styled(Button)`
  ${flexCenter};
  ${squareButton}
  &::before {
    width: 14px;
    height: 20px;
    mask: url(${fire});
  }
`;

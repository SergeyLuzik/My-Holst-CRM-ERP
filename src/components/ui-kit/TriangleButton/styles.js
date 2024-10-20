import styled from "styled-components";
import { Button } from "@styled-tags";
import { flexCenter } from "@style-fragments";
import icon from "@icons/triangle.svg";

export const TriangleButton = styled(Button)`
  ${flexCenter};
  padding: ${({ theme }) => theme.spacings.xs};
  color: ${({ theme }) => theme.colors.main};

  &::before {
    display: block;
    width: 14px;
    height: 10px;
    content: "";
    mask: url(${icon});
    background-color: currentColor;
  }
`;

import styled from "styled-components";
import { TextTag } from "../TextTag/styles";

import icon from "../../../assets/icons/clock.svg";

const types = {
  common: "extraLiteMain",
  important: "extraLiteAccent",
  time: "unset",
};

export const TimeTag = styled(TextTag)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
  background-color: unset;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: unset;
  }

  &::before {
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    mask: url(${icon});
    background-color: currentColor;
  }
`;

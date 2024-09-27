import styled from "styled-components";
import { OrderText } from "../OrderText/styles";

const types = {
  common: "extraLiteMain",
  important: "extraLiteAccent",
  time: "unset",
};

export const Tag = styled(OrderText)`
  font-weight: ${({ theme }) => theme.fontWeights.Bold};
  background-color: ${({ theme, $type }) => theme.colors[types[$type]]};
  display: inline-block;
`;

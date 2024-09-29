import styled from "styled-components";
import { OrderText } from "../OrderText/styles";

const types = {
  common: "extraLiteMain",
  important: "extraLiteAccent",
};

export const TextTag = styled(OrderText)`
  text-transform: uppercase;
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme, $type }) => theme.colors[types[$type]]};
  color: ${({ theme, $type }) =>
    $type === "important" ? theme.colors.accent : theme.colors.black};
`;

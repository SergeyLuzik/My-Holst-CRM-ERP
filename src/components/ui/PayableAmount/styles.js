import styled from "styled-components";
import { Input } from "../../../styled-tags";
import { OrderText } from "../../ui/OrderText/styles";

export const PayableAmount = styled(OrderText)`
  &:hover {
    cursor: default;
    background-color: unset;
  }
`;

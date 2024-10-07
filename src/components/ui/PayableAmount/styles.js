import styled from "styled-components";
import { Input } from "../../../styled-tags";
import { OrderItem } from "../../ui/OrderItem/styles";

export const PayableAmount = styled(OrderItem)`
  &:hover {
    cursor: default;
    background-color: unset;
  }
`;

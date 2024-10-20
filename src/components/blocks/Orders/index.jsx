import React from "react";
import * as S from "./styles";

import { orders } from "@mocks/orders";

import { Order } from "./Order";

export const Orders = () => (
  <S.Orders>
    {orders.map((order) => (
      <Order key={order.id} order={order} />
    ))}
  </S.Orders>
);

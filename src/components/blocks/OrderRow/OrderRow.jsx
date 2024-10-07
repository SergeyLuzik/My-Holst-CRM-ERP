import React from "react";
import * as S from "./styles";
import { OrderItem } from "../../ui/OrderItem";
import { PayableAmount } from "../../ui/PayableAmount";
import { Tags } from "../Tags";
import { TextTag } from "../../ui/TextTag";
import { TimeTag } from "../../ui/TimeTag";
import { Select } from "../../ui/Select";
import { Status } from "../../ui/Status";
import { StatusOptions } from "../../blocks/StatusOptions";

export const OrderRow = () => (
  <S.OrderRow>
    <OrderItem width="106px">
      <Select
        Trigger={Status}
        triggerProps={{ type: "new" }}
        Dropdown={StatusOptions}
      />
    </OrderItem>
    <OrderItem width="75px">{"100x100"}</OrderItem>
    <OrderItem width="114px">{"Сканирование"}</OrderItem>
    <OrderItem width="432px">
      {"Свадебная пара и мама, на фоне буквы, декарация с цветами"}
    </OrderItem>
    <OrderItem width="170px">{"ШИР ТЕМНО-ЖЕЛТАЯ"}</OrderItem>
    <Tags>
      <TimeTag time="15:00" />
      <TextTag text="Багет 3222" type="important" />
      <TextTag text="Лак" type="important" />
      <TextTag text="Комментарий" type="common" />
    </Tags>
    <OrderItem width="168px">{"Капуткина Ксения"}</OrderItem>
    <PayableAmount text="11 050 ₽" width="74px" />
  </S.OrderRow>
);

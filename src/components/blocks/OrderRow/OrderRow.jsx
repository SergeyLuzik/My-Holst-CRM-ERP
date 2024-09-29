import React from "react";
import * as S from "./styles";
import { Status } from "../../ui/Status/Status";
import { OrderText } from "../../ui/OrderText/OrderText";
import { PayableAmount } from "../../ui/PayableAmount/PayableAmount";
import { Tags } from "../Tags/Tags";
import { TextTag } from "../../ui/TextTag/TextTag";
import { TimeTag } from "../../ui/TimeTag/TimeTag";

export const OrderRow = () => (
  <S.OrderRow>
    <Status type="new" />
    <OrderText text="100x100" width="75px" />
    <OrderText text="Сканирование" width="114px" />
    <OrderText
      text="Свадебная пара и мама, на фоне буквы, декарация с цветами"
      width="432px"
    />
    <OrderText text="ШИР ТЕМНО-ЖЕЛТАЯ" width="170px" />
    <Tags>
      <TimeTag time="15:00" />
      <TextTag text="Багет 3222" type="important" />
      <TextTag text="Лак" type="important" />
      <TextTag text="Комментарий" type="common" />
    </Tags>
    <OrderText text="Капуткина Ксения" width="168px" />
    <PayableAmount text="11 050 ₽" width="74px" />
  </S.OrderRow>
);

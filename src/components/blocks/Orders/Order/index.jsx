import React from "react";
import * as S from "./styles";
import { OrderItem } from "../../../ui/OrderItem";
import { PayableAmount } from "../../../ui/PayableAmount";
import { Tags } from "../../Tags";
import { Tag } from "../../../ui/Tag";
import { Select } from "../../../ui/Select";
//import { Status } from "../../../ui/Status";
//import { StatusOptions } from "./components/field-types/Status/components/StatusOptions";
import { EditableText } from "../../../ui/EditableText";
import { StyleOptions } from "../../../ui/StyleOptions";
import { OrderText } from "../../../ui/OrderText";
import { OrderTextInput } from "../../../ui/OrderTextInput";
import { Field } from "./components/common/Field";
import { Status } from "./components/field-types/Status";

export const Order = ({ order }) => (
  <S.Order>
    <OrderItem width="106px">
      <Status type={order.status} />
    </OrderItem>
    <OrderItem width="75px">{"100x100"}</OrderItem>
    <OrderItem width="114px">
      <Select
        Trigger={EditableText}
        triggerProps={{
          Viewer: OrderText,
          viewerText: "Сканирование",
          Editor: OrderTextInput,
        }}
        Dropdown={StyleOptions}
      />
    </OrderItem>
    <OrderItem width="432px">
      <EditableText
        Viewer={OrderText}
        viewerText={"Свадебная пара и мама, на фоне буквы, декарация с цветами"}
        Editor={OrderTextInput}
      />
    </OrderItem>
    <OrderItem width="170px">{"ШИР ТЕМНО-ЖЕЛТАЯ"}</OrderItem>
    <Tags>
      <Tag type="time" text="15:00" />
      <Tag type="important" text="Багет 3222" />
      <Tag type="important" text="Лак" />
      <Tag type="common" text="Комментарий" />
    </Tags>
    <OrderItem width="168px">{"Капуткина Ксения"}</OrderItem>
    <PayableAmount text="11 050 ₽" width="74px" />
  </S.Order>
);

/*
      <Select
        Trigger={Status}
        triggerProps={{ type: "new" }}
        Dropdown={StatusOptions}
      />
       */
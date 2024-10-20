import React from "react";
import * as S from "./styles";
import { OrderItem } from "@ui-kit/OrderItem";
import { PayableAmount } from "@ui-kit/PayableAmount";
import { Tags } from "../../Tags";
import { Tag } from "@ui-kit/Tag";
import { Select } from "@ui-kit/Select";
//import { Status } from "../../../ui/Status";
//import { StatusOptions } from "./components/field-types/Status/components/StatusOptions";
import { EditableText } from "@ui-kit/EditableText";
import { StyleOptions } from "@ui-kit/StyleOptions";
import { OrderText } from "@ui-kit/OrderText";
import { OrderTextInput } from "@ui-kit/OrderTextInput";
import { Field } from "./components/common/Field";
import { Status } from "./components/field-types/Status";
import { Description } from "./components/field-types/Description";
import { Style } from "./components/field-types/Style";
import { Size } from "./components/field-types/Size";

export const Order = ({ order }) => (
  <S.Order>
    <OrderItem width="106px">
      <Status type={order.status} />
    </OrderItem>
    <OrderItem width="75px">
      <Size size={order.size} />
    </OrderItem>
    <OrderItem width="114px">
      <Style style={order.style} />
    </OrderItem>
    <OrderItem width="432px">
      <Description description={order.description} />
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

      <EditableText
        Viewer={OrderText}
        viewerText={"Свадебная пара и мама, на фоне буквы, декарация с цветами"}
        Editor={OrderTextInput}
      />


       */

import React from "react";

import * as S from "./styles";
import { ColumnHeader } from "@ui-kit/ColumnHeader";

export const ColumnHeaders = () => (
  <S.List>
    <S.Item $width="106px">
      <ColumnHeader text="Статус" type="sortable" mode="text" />
    </S.Item>
    <S.Item $width="75px">
      <ColumnHeader text="Размер " type="sortable" mode="number" />
    </S.Item>
    <S.Item $width="114px">
      <ColumnHeader text="Обработка" type="sortable" mode="text" />
    </S.Item>
    <S.Item $width="432px">
      <ColumnHeader text="Описание" />
    </S.Item>
    <S.Item $width="170px">
      <ColumnHeader text="Упаковка" type="sortable" mode="text" />
    </S.Item>
    <S.Item $width="282px">
      <ColumnHeader text="Дополнительно" />
    </S.Item>
    <S.Item $width="168px">
      <ColumnHeader text="Клиент" type="sortable" mode="text" />
    </S.Item>
    <S.Item $width="74px">
      <ColumnHeader text="К оплате" />
    </S.Item>
  </S.List>
);

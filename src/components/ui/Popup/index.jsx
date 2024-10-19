import React from "react";
import * as S from "./styles";
export const Popup = ({ top, left, children }) => (
  <S.Popup $top={top} $left={left}>
    <S.Pin />
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  </S.Popup>
);

// https://medium.com/@iambharathpadhu/mastering-popovers-building-an-accessible-popover-component-in-react-with-just-html-a6e95c0be2fb
// https://azureserv.com/@iambharathpadhu/mastering-popovers-building-an-accessible-popover-component-in-react-with-just-html-a6e95c0be2fb?__cpo=aHR0cHM6Ly9tZWRpdW0uY29t

import React, { useState, useRef } from "react";
import * as S from "./styles";
import { OrientationButton } from "./components/OrientationButton";
import { SortButton } from "./components/SortButton";
import { PopularButton } from "./components/PopularButton";

export const SizeOptions = ({ sizes }) => {
  return (
    <S.Wrapper>
      <S.Buttons>
        <S.List>
          <S.Item>
            <OrientationButton />
          </S.Item>
          <S.Item>
            <SortButton />
          </S.Item>
          <S.Item>
            <PopularButton />
          </S.Item>
        </S.List>
      </S.Buttons>
      <S.List>
        {sizes.map((size) => (
          <S.Item key={size}>{size}</S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

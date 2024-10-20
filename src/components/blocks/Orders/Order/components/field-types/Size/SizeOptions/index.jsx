import React, { useState, useRef } from "react";
import * as S from "./styles";
import { OrientationButton } from "./components/OrientationButton";
import { SortButton } from "./components/SortButton";
import { PopularButton } from "./components/PopularButton";
import { Text } from "../../../common/Text";
import { searchTextMatch } from "@utils/searchTextMatch";

export const SizeOptions = ({ text, sizes, handleOptionClick }) => {
  return (
    <S.Wrapper>
      <S.Buttons>
        <S.Item>
          <OrientationButton />
        </S.Item>
        <S.Item>
          <SortButton />
        </S.Item>
        <S.Item>
          <PopularButton />
        </S.Item>
      </S.Buttons>
      <S.List>
        {searchTextMatch(text, sizes.allSizes).map((size) => (
          <S.Item key={size}>
            <Text onClick={() => handleOptionClick(size)}>{size}</Text>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

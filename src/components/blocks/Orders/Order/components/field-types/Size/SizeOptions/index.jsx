import React, { useState } from "react";
import * as S from "./styles";
import { OrientationButton } from "./components/OrientationButton";
import { SortButton } from "./components/SortButton";
import { PopularButton } from "./components/PopularButton";
import { Text } from "../../../common/Text";
import { searchTextMatch } from "@utils/searchTextMatch";
import { flipSizes } from "@utils/flipSizes";

const SIZES = {
  allSizes: [
    "15х18",
    "15х20",
    "18х27",
    "20х25",
    "20х30",
    "25х25",
    "25х30",
    "25х35",
    "30х30",
    "30х35",
    "30х40",
    "30х45",
    "35х35",
    "35х40",
    "35х45",
    "35х50",
    "40х40",
    "40х45",
    "40х50",
    "40х60",
    "45х55",
    "45х70",
    "50х50",
    "50х60",
    "50х65",
    "50х70",
    "50х75",
    "60х60",
    "60х70",
    "60х80",
    "60х90",
    "70х70",
    "70х90",
    "80х80",
    "80х95",
    "80х100",
    "80х120",
    "90х135",
    "100х120",
    "100х130",
    "100х150",
  ],
  popular: ["20х30", "30х40", "30х45", "35х50", "40х50", "40х60", "60х90"],
};

export const SizeOptions = ({ text, handleOptionClick }) => {
  const [allSizes, setAllSizes] = useState(SIZES.allSizes);
  const [popularSizes, setPopularSizes] = useState(SIZES.popular);
  const [orientationMode, setOrientation] = useState("portrait");
  const [sortMode, setSortMode] = useState("fromSmall");
  const [popularMode, setPopularMode] = useState(false);

  const handleOrientationClick = () => {
    if (orientationMode === "portrait") {
      setOrientation("landscape");
      popularMode
        ? setPopularSizes(flipSizes(popularSizes))
        : setAllSizes(flipSizes(allSizes));
    } else {
      setOrientation("portrait");
      popularMode
        ? setPopularSizes(SIZES.popular)
        : setAllSizes(SIZES.allSizes);
    }
  };
  const handleSortClick = () => {
    if (sortMode === "fromSmall") {
      setSortMode("fromLarge");
      popularMode
        ? setPopularSizes([...popularSizes].reverse())
        : setAllSizes([...allSizes].reverse());
    } else {
      setSortMode("fromSmall");
      popularMode
        ? setPopularSizes(SIZES.popular)
        : setAllSizes(SIZES.allSizes);
    }
  };

  const handlePopularClick = () => {
    setPopularMode((prev) => !prev);
  };
  return (
    <S.Wrapper>
      <S.Buttons>
        <S.Item>
          <OrientationButton
            mode={orientationMode}
            onClick={handleOrientationClick}
          />
        </S.Item>
        <S.Item>
          <SortButton mode={sortMode} onClick={handleSortClick} />
        </S.Item>
        <S.Item>
          <PopularButton mode={popularMode} onClick={handlePopularClick} />
        </S.Item>
      </S.Buttons>
      <S.List>
        {searchTextMatch(text, popularMode ? popularSizes : allSizes).map(
          (size) => (
            <S.Item key={size}>
              <Text onClick={() => handleOptionClick(size)}>{size}</Text>
            </S.Item>
          )
        )}
      </S.List>
    </S.Wrapper>
  );
};

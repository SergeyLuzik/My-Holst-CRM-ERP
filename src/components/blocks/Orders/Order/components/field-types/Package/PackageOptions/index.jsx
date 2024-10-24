import React, { useState } from "react";
import * as S from "./styles";
import { searchTextMatch } from "@utils/searchTextMatch";
import { flipSizes } from "@utils/flipSizes";
import { Checkbox } from "@ui-kit/Checkbox";

const PACKAGES = [
  {
    name: "бежевая",
    color: "#f5f5dc",
    types: ["узк"],
  },
  {
    name: "бирюзовая",
    color: "#40e0d0",
    types: ["узк", "шир"],
  },
  {
    name: "бордовая",
    color: "#800020",
    types: ["узк", "шир"],
  },
  {
    name: "голубая",
    color: "#add8e6",
    types: ["узк", "шир"],
  },
  {
    name: "желтая",
    color: "#ffff00",
    types: ["узк", "шир"],
  },
  {
    name: "зеленая",
    color: "#008000",
    types: ["узк", "шир"],
  },
  {
    name: "красная",
    color: "#ff0000",
    types: ["узк", "шир"],
  },
  {
    name: "золотая",
    color: "#ffd700",
    types: ["шир"],
  },
  {
    name: "малиновая",
    color: "#dc143c",
    types: ["узк", "шир"],
  },
  {
    name: "розовая",
    color: "#ffc0cb",
    types: ["узк", "шир"],
  },
  {
    name: "синяя",
    color: "#0000ff",
    types: ["узк", "шир"],
  },
  {
    name: "сиреневая",
    color: "#c8a2c8",
    types: ["узк", "шир"],
  },
  {
    name: "фиолетовая",
    color: "#800080",
    types: ["узк", "шир"],
  },
  {
    name: "оранжевая",
    color: "#ffa500",
    types: ["узк", "шир"],
  },
  {
    name: "персиковая",
    color: "#ffe5b4 ",
    types: ["узк", "шир"],
  },
  {
    name: "кремовая",
    color: "#fffdd0",
    types: ["шир"],
  },
  {
    name: "салатовая",
    color: "#90ee90",
    types: ["узк"],
  },

  {
    name: "темно-желтая",
    color: "#f6be00",
    types: ["шир"],
  },
];
export const PackageOptions = ({ text, handleOptionClick }) => {
  const [packages, setPackages] = useState(PACKAGES);

  return (
    <S.Wrapper>
      <Checkbox checked text={"УЗК"} />
      <S.List>
        {searchTextMatch(text, packages, "name").map(({ name, color }) => (
          <S.Item key={name}>
            <S.Package $color={color} onClick={() => handleOptionClick(name)}>
              {name.toUpperCase()}
            </S.Package>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

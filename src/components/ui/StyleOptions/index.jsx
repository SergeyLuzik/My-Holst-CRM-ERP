import React from "react";

import * as S from "./styles";

import { Popup } from "../Popup";

const STYLES = [
  "Бьюти Арт",
  "Вектор Арт",
  "Гранж",
  "Диджитал Арт",
  "Дрим Арт",
  "Живопись",
  "Замена фона",
  "Инстаграм",
  "Исторический",
  "Коллаж",
  "Коллаж ИНД",
  "Комикс",
  "Композиция",
  "Лав Ис",
  "Лав Поли",
  "Лакшери Арт",
  "Модульная",
  "Масло",
  "Метрика",
  "Монтаж",
  "Неон Арт",
  "Поларойд",
  "Поп Арт",
  "Сканирование",
  "Стрит Арт",
  "Шарж",
  "35 ММ",
  "Инста-Арт",
];

export const StyleOptions = ({ top, left, handleOptionClick }) => {
  return (
    <Popup top={top} left={left}>
      <S.List>
        {STYLES.map((style) => (
          <S.Item key={style}>
            <S.Style
              key={style}
              style={style}
              onClick={() => handleOptionClick({ text: style })}
            >
              {style}
            </S.Style>
          </S.Item>
        ))}
      </S.List>
    </Popup>
  );
};

import React from "react";
import { Status } from "../../ui/Status";
import { Popup } from "../../ui/Popup";

import * as S from "./styles";

const TYPES = ["new", "approve", "printed", "done", "complete"];
export const StatusOptions = ({ top, left, onOptionClick }) => {
  return (
    <Popup top={top} left={left}>
      <S.List>
        {TYPES.map((type) => (
          <S.Item key={type}>
            <Status
              key={type}
              type={type}
              onClick={() => onOptionClick({ type: type })}
            />
          </S.Item>
        ))}
      </S.List>
    </Popup>
  );
};
